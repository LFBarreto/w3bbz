import styled from "styled-components";
import Flex from "./Flex";

const Container = styled(Flex).attrs({
  width: "100%",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "flex-start",
  flex: 1,
  bg: "background.main",
  pt: 150,
})``;

export default function InnerPage({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}
