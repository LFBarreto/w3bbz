import styled from "styled-components";
import { baseStyles, BaseStyledProps } from "../styled";
import {
  compose,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  system,
} from "styled-system";
import { TextVariants } from "../../../styles/theme";
import { textVariantStyle } from "./styles";

const uppercase = system({
  uppercase: {
    property: "textTransform",
    transform: (value) => (value ? "uppercase" : "none"),
  },
});

type WhiteSpace = "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";

export interface TextProps extends BaseStyledProps {
  fontFamily?: string;
  fontSize?: number | string | TextVariants;
  variant?: TextVariants;
  textAlign?: string;
  fontWeight?: string;
  lineHeight?: string;
  textTransform?: string;
  textOverflow?: string;
  uppercase?: boolean;
  whiteSpace?: WhiteSpace;
}

const Text = styled.span.attrs<TextProps, TextProps>(
  ({ variant = "body", fontSize, color }) => ({
    fontSize: fontSize ? fontSize : variant,
    color: color || "neutral.c100",
  })
)`
  font-weight: 500;
  white-space: ${(props) => props.whiteSpace ?? "normal"};
  ${(p) => textVariantStyle[p.variant || "body"]}
  ${baseStyles}
  ${compose(
    uppercase,
    lineHeight,
    fontSize,
    textAlign,
    fontWeight,
    letterSpacing,
    system({
      textOverflow: true,
    })
  )}
  ${(p) => (p.textTransform ? `text-transform: ${p.textTransform};` : "")}
`;

export default Text;
