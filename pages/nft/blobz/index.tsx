import Head from "next/head";
import { Flex } from "../../../src/components";

export default function BlobzHome() {
  return (
    <Flex flex="1">
      <Head>
        <title>WEBBZ - BLOBZ</title>
        <meta name="description" content="W3BBZ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDirection="column" flex="1"></Flex>
    </Flex>
  );
}
