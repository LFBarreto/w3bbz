import { Flex, Text, ImageFilter } from "../../src/components";
import styled from "styled-components";

const Image = styled(Flex).attrs({
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
    <Flex
      flexDirection="column"
      flex="1"
      alignItems="center"
      justifyContent="center"
      position="relative"
      bg="primary.c80"
    >
      <Image />
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
  );
}
