import styled from "styled-components";
import { baseStyles, BaseStyledProps } from "../styled";

export type BlockquoteProps = BaseStyledProps;

const Blockquote = styled.div.attrs<BlockquoteProps, BlockquoteProps>({})`
  ${baseStyles}
`;

export default Blockquote;
