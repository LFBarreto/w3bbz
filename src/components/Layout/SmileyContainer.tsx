import styled from "styled-components";
import Flex from "./Flex";
import Smileys from "../Svgs/Smileyz";

const SmileyContainer = styled(Flex).attrs({
  position: "fixed",
  bottom: "-12vmin",
  left: "-15vmin",
  width: "70vmin",
  height: "70vmin",
})`
  overflow: hidden;
  z-index: 1;
`;

export default function SmileyContainerComponent() {
  return (
    <SmileyContainer>
      <Smileys />
    </SmileyContainer>
  );
}
