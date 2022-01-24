import Head from "next/head";
import { useRouter } from "next/router";
import { Flex, Text } from "../../../src/components";

export default function BlobzHome() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Flex flex="1">
      <Head>
        <title>W3BBZ</title>
        <meta name="description" content="W3BBZ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDirection="column" flex="1">
        <Text variant="h1">W3BBZ</Text>
        <Text variant="body">BLOBZ BLOCKZ {id}</Text>
      </Flex>
    </Flex>
  );
}
