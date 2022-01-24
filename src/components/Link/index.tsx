import React from "react";
import styled from "styled-components";
import Text, { TextProps } from "../Text";
import { baseStyles, BaseStyledProps } from "../styled";

export type LinkProps = BaseStyledProps &
  TextProps &
  Partial<{
    href: string;
    target?: string;
    children?: React.ReactNode;
    tabIndex?: number;
  }>;

const Link = styled.a.attrs<LinkProps, LinkProps>({
  display: "flex",
})`
  ${baseStyles};
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  font-size: 1em;
  background-color: transparent;
  min-height: 44px;
  width: min-content;
  ${(p) => p.theme.transition()}
  &:focus, &focus-within, &focus-visible {
    filter: invert(1)
      drop-shadow(0.3rem 0px 0px ${(p) => p.theme.colors.primary.c80});
  }
  text-decoration: none;
  &:hover span.post-link {
    display: inline-block;
    transform: scale(-1, 1);
  }
`;

export default function LinkComponent({
  children,
  tabIndex,
  fontFamily,
  fontSize,
  variant,
  textAlign,
  fontWeight,
  lineHeight,
  textTransform,
  textOverflow,
  uppercase,
  whiteSpace,
  ...props
}: LinkProps) {
  return (
    <Link tabIndex={tabIndex} {...props}>
      <Text
        fontFamily={fontFamily}
        fontSize={fontSize}
        variant={variant}
        textAlign={textAlign}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
        textTransform={textTransform}
        textOverflow={textOverflow}
        uppercase={uppercase}
        whiteSpace={"nowrap"}
      >
        {children} <span className="post-link">{">>>"}</span>
      </Text>
    </Link>
  );
}
