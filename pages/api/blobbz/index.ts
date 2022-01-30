/* eslint-disable no-control-regex */
import Redis from "ioredis";

const redis = new Redis(
  process.env.REDIS_URL || process.env.NEXT_PUBLIC_REDIS_URL
);

const VERSION = process.env.VERSION_ID || process.env.NEXT_PUBLIC_VERSION_ID;

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
const totalSupplyHex = "0x18160ddd";
const tokenURIHex = "0xc87b56dd";
const pad32 = Array(32).fill("00").join("");
const JSON_PREFIX = "data:application/json;base64,";
const SVG_PREFIX = "data:image/svg+xml;base64,";

const padValue = (value: string) => (pad32 + value).substr(value.length);

const getInfuraTotalSupplyPayload = () => ({
  method: "eth_call",
  params: [
    {
      to: CONTRACT_ADDRESS,

      data: totalSupplyHex,
    },
    "latest",
  ],
  id: requestID,
  jsonrpc: "2.0",
});

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
  if (!str1) return "";
  const hex = str1.toString();
  let str = "";
  for (let n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
}

async function fetchTokenURI(id: number) {
  const cacheID = "tokenURI:" + VERSION + ":" + CONTRACT_ADDRESS;
  const cache = await redis.hget(cacheID, `${id}`);

  if (cache) {
    return JSON.parse(cache);
  } else {
    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(getInfuraTokenURIPayload(id)),
    };

    return fetch(`https://polygon-mainnet.infura.io/v3/${INFURA_ID}`, options)
      .then((r) => r.json())
      .then((data) => {
        const { result } = data;
        const hexResult = hex_to_ascii(result);
        const tokenURI = hexResult
          .substr(hexResult.indexOf(JSON_PREFIX))
          .replace(/\x00+/g, "");
        const metadata = JSON.parse(
          Buffer.from(tokenURI.replace(JSON_PREFIX, ""), "base64").toString(
            "binary"
          )
        );

        metadata.image = Buffer.from(
          metadata.image.replace(SVG_PREFIX, ""),
          "base64"
        ).toString("binary");

        const parsedResult = { metadata, id };
        redis.hset(cacheID, id, JSON.stringify(parsedResult));
        return parsedResult;
      });
  }
}

const PER_PAGE = 5;

async function fetchTokenURIS(
  { page, totalSupply }: { page: number; totalSupply: number },
  res: any
) {
  const offset = page * PER_PAGE;

  if (offset > totalSupply) {
    return res.status(200).json({ data: [] });
  }

  const list = [];

  const limit = Math.max(0, totalSupply - offset - PER_PAGE);

  for (let i = totalSupply - offset - 1; i >= limit; i--) {
    list.push(await fetchTokenURI(i));
  }

  return res.status(200).json({
    data: list,
    page,
    limit,
    totalSupply,
    remaining: MAX_ID - totalSupply + 1,
  });
}

export default async function blobbzListHandler(
  req: { query: { page: string } },
  res: any
) {
  const {
    query: { page },
  } = req;
  const totalSupplyCacheID = "totalSupply:" + VERSION + ":" + CONTRACT_ADDRESS;

  const totalSupplyCache = await redis.get(totalSupplyCacheID);

  if (totalSupplyCache) {
    return fetchTokenURIS(
      { page: parseInt(page), totalSupply: parseInt(totalSupplyCache) },
      res
    );
  } else {
    const totalSupplyOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(getInfuraTotalSupplyPayload()),
    };
    const totalSupply = await fetch(
      `https://polygon-mainnet.infura.io/v3/${INFURA_ID}`,
      totalSupplyOptions
    );
    const json = await totalSupply.json();
    const result = parseInt(json.result);
    redis.set(totalSupplyCacheID, `${result}`, "EX", 60);

    return fetchTokenURIS({ page: parseInt(page), totalSupply: result }, res);
  }
}
