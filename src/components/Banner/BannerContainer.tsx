import styled from "styled-components";
import { Flex } from "../../../src/components";

const BannerContainer = styled(Flex).attrs<{ bg?: string }>(({ bg }) => ({
  flexDirection: "column",
  width: "100%",
  bg: bg || "primary.c80",
}))`
  background-image: var(--filter-noise);
  background-repeat: repeat;
`;

export default BannerContainer;
