import { Blobz } from "../src/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:description" content="W3B + WEEB = W3B.BZ" />
        <meta property="og:site_name" content="W3BBZ" />
        <meta property="og:url" content="https://w3b.bz" />
        <meta property="og:image" content="https://w3b.bz/iconx512.png" />
      </Head>
      <Blobz />;
    </>
  );
}
