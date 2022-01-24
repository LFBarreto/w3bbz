import styled from "styled-components";
import Flex from "./Flex";
import Text from "../Text";
import Link from "../Link";
import Banner from "../Banner";
import { getLocale } from "../../helpers/getLocale";

const Container = styled(Flex).attrs({
  width: "100%",
  bg: "primary.c80",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  overflow: "hidden",
  flex: 1,
  position: "relative",
  pr: 6,
  pb: 6,
})`
  min-height: calc(100% - calc(152px + 2vw));
  z-index: -1;
  background-image: url(/images/bg-noise.png);
  background-repeat: repeat;
`;

export default function Footer() {
  const locale = getLocale();
  return (
    <Container>
      <Banner> W3B.BZ </Banner>
      <Flex flex={1} />
      <Link href="https://cacahu.eth.xyz/" target="_blank" variant="body">
        cacahu.eth
      </Link>
      <Link href="https://opensea.io/cacahueth" target="_blank" variant="body">
        opensea
      </Link>
      <Link href="https://github.com/LFBarreto" target="_blank" variant="body">
        github
      </Link>
      <Link
        href="https://www.linkedin.com/in/barretoluiz/"
        target="_blank"
        variant="body"
      >
        linkedin
      </Link>
      <Link href="mailto:barreto.luiz.f@gmail.com" target="_blank">
        mail
      </Link>
      <Text variant="body">
        {new Date().toLocaleString(locale, {
          year: "numeric",
        })}
        ~W3BBZ
      </Text>
    </Container>
  );
}
