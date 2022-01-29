import Head from "next/head";
import { Flex, Text, ImageFilter } from "../../src/components";
import styled from "styled-components";

const NotFoundImage = styled(Flex).attrs({
  position: "absolute",
  width: "100%",
  height: "100%",
  bottom: 0,
  left: 0,
  zIndex: 0,
})`
  background-image: url("/images/404.gif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  ${ImageFilter}
`;

export default function Page404() {
  return (
    <>
      <Head>
        <title>W3BBZ - 404</title>
        <meta property="og:description" content="W3B.BZ 404 - Where am i?" />
        <meta property="og:site_name" content="W3BBZ" />
        <meta property="og:url" content="https://w3b.bz/about" />
        <meta property="og:image" content="/images/404.gif" />
      </Head>
      <Flex
        flexDirection="column"
        flex="1"
        alignItems="center"
        justifyContent="center"
        position="relative"
        bg="primary.c80"
      >
        <NotFoundImage />
        <Text
          variant="h1"
          textAlign="center"
          width="100%"
          fontSize={"30vw"}
          style={{ mixBlendMode: "multiply" }}
          color="primary.c80"
          zIndex={1}
        >
          404
        </Text>
      </Flex>
    </>
  );
}
