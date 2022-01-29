/* eslint-disable no-control-regex */
import Redis from "ioredis";

const redis = new Redis(
  process.env.REDIS_URL || process.env.NEXT_PUBLIC_REDIS_URL
);

const CONTRACT_ADDRESS =
  process.env.BLOBZ_CONTRACT_ADDRESS ||
  process.env.NEXT_PUBLIC_BLOBZ_CONTRACT_ADDRESS;

const INFURA_ID = process.env.INFURA_ID || process.env.NEXT_PUBLIC_INFURA_ID;

const headers = {
  "Content-Type": "application/json",
};

const MIN_ID = 0;
const MAX_ID = 511;
const requestID = 42;
const tokenURIHex = "0xc87b56dd";
const pad32 = Array(32).fill("00").join("");
const JSON_PREFIX = "data:application/json;base64,";

const padValue = (value: string) => (pad32 + value).substr(value.length);

const getInfuraTokenURIPayload = (id: number) => ({
  method: "eth_call",
  params: [
    {
      to: CONTRACT_ADDRESS,

      data:
        tokenURIHex +
        padValue(Math.max(MIN_ID, Math.min(MAX_ID, id)).toString(16)),
    },
    "latest",
  ],
  id: requestID,
  jsonrpc: "2.0",
});

function hex_to_ascii(str1: string) {
  const hex = str1.toString();
  let str = "";
  for (let n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
}

export default async function blobbzHandler(
  req: { query: { id: string } },
  res: any
) {
  const {
    query: { id },
  } = req;
  const nId = parseInt(id);
  const cacheID = "tokenURI:" + CONTRACT_ADDRESS;

  const cache = await redis.hget(cacheID, id);

  if (cache) {
    return res.status(200).json(JSON.parse(cache));
  } else {
    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(getInfuraTokenURIPayload(nId)),
    };

    return fetch(`https://polygon-mainnet.infura.io/v3/${INFURA_ID}`, options)
      .then((r) => r.json())
      .then((data) => {
        const { result } = data;
        const hexResult = hex_to_ascii(result);
        const tokenURI = hexResult
          .substr(hexResult.indexOf(JSON_PREFIX))
          .replace(/\x00+/g, "");
        const parsedResult = { tokenURI };
        redis.hset(cacheID, id, JSON.stringify(parsedResult));
        return res.status(200).json(parsedResult);
      });
  }
}
