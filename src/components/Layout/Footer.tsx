import styled from "styled-components";
import Flex from "./Flex";
import Text from "../Text";
import Link from "../Link";
import Banner from "../Banner";
import SpotifyWidget from "./SpotifyWidget";
import { getLocale } from "../../helpers/getLocale";

const Container = styled(Flex).attrs({
  width: "100%",
  bg: "primary.c80",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  flex: 1,
  position: "relative",
})`
  min-height: calc(100% - 152px);
  background-image: var(--filter-noise);
  background-repeat: repeat;
`;

const LinksContainer = styled(Flex).attrs({
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  flex: 1,
  position: "relative",
  p: 6,
})`
  @media (max-width: 700px) {
    padding-bottom: 86px;
  }
`;

export default function Footer() {
  const locale = getLocale();
  return (
    <Container>
      <Banner> W3B.BZ </Banner>
      <SpotifyWidget />
      <Flex flex={1} />
      <LinksContainer>
        <Link
          href="https://cacahu.eth.xyz/"
          target="_blank"
          variant="body"
          color="textContrast"
        >
          cacahu.eth
        </Link>
        <Link
          href="https://opensea.io/cacahueth"
          target="_blank"
          variant="body"
          color="textContrast"
        >
          opensea
        </Link>
        <Link
          href="https://github.com/LFBarreto"
          target="_blank"
          variant="body"
          color="textContrast"
        >
          github
        </Link>
        <Link
          href="https://www.linkedin.com/in/barretoluiz/"
          target="_blank"
          variant="body"
          color="textContrast"
        >
          linkedin
        </Link>
        <Link
          href="mailto:barreto.luiz.f@gmail.com"
          target="_blank"
          color="textContrast"
        >
          mail
        </Link>
        <Text variant="body" color="textContrast">
          {new Date().toLocaleString(locale, {
            year: "numeric",
          })}
          ~W3BBZ
        </Text>
      </LinksContainer>
    </Container>
  );
}
