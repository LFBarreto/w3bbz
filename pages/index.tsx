import Head from "next/head";
import { Flex, Text, Blobz } from "../src/components";

export default function Home() {
  return (
    <Flex flex="1">
      <Head>
        <title>W3BBZ</title>
        <meta name="description" content="W3BBZ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDirection="column" flex="1">
        <Text variant="h1">W3BBZ</Text>
        <Text variant="body">Coming soon</Text>
      </Flex>
      <Blobz />
    </Flex>
  );
}
