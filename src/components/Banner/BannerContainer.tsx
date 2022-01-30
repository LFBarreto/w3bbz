import styled from "styled-components";
import { Flex } from "../../../src/components";

const BannerContainer = styled(Flex).attrs<{ bg?: string }>((props) => ({
  flexDirection: "column",
  width: "100%",
  bg: "primary.c80",
  ...props,
}))`
  background-image: var(--filter-noise);
  background-repeat: repeat;
`;

export default BannerContainer;
