import styled from "styled-components";
import { baseStyles, BaseStyledProps } from "../styled";

export type FlexBoxProps = BaseStyledProps;

const FlexBox = styled.div.attrs<FlexBoxProps, FlexBoxProps>({
  display: "flex",
})`
  ${baseStyles}
`;

export default FlexBox;
