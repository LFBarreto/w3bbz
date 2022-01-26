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
        <meta name="description" content="W3BBZ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {blobzContract && abi ? (
        <NFTViewer contract={blobzContract} abi={abi} tokenId={Number(id)} />
      ) : null}
    </>
  );
}
