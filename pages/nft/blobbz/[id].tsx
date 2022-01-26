import Head from "next/head";
import { useRouter } from "next/router";
import { NFTViewer } from "../../../src/components";

import abi from "./abi-blobz.json";

const blobzContract =
  process.env.BLOBZ_CONTRACT_ADDRESS ||
  process.env.NEXT_PUBLIC_BLOBZ_CONTRACT_ADDRESS;

export default function BlobzHome() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>BLOBZ-BLOCKZ#{id}</title>
        <meta
          name="description"
          content={`W3BBZ - #${id} BlobzBlockz A series of 512 blobz fully generated on chain. Inspired by lava lamps and their inhate randomness (ie: cloudflare lava lamps RNG) This series explores generative art on polygon using solidity. Each NFT is unique in shape size animations and mix of colors.`}
        />
        <meta property="og:url" content={`https://web.bz/nft/blobbz/${id}`} />
        <meta property="og:image" content="images/blobzzz.png" />
      </Head>
      {blobzContract && abi ? (
        <NFTViewer contract={blobzContract} abi={abi} tokenId={Number(id)} />
      ) : null}
    </>
  );
}
