/* eslint-disable no-irregular-whitespace */
import styled, { keyframes } from "styled-components";
import Text, { TextProps } from "../Text";
import { baseStyles, BaseStyledProps } from "../styled";
import React, { useMemo } from "react";
import Flex, { FlexBoxProps } from "../Layout/Flex";
import { useWindowSize } from "react-use";

export type BannerProps = BaseStyledProps &
  TextProps &
  FlexBoxProps &
  Partial<{ children: React.ReactNode; ready?: boolean }>;

const animBanner = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`;

const Banner = styled(Flex).attrs<BannerProps, BannerProps>({})`
  ${baseStyles};
  box-sizing: border-box;
  border: none;
  font-size: 1em;
  min-height: 44px;
  white-space: nowrap;
  display: inline-block;
  animation: ${animBanner} 20s linear infinite;
  ${Text} {
    display: inline-block;
    line-height: 44px;
  }
`;

export default function BannerComponent({
  children,
  fontFamily,
  fontSize,
  variant,
  textAlign,
  fontWeight,
  lineHeight,
  textTransform,
  textOverflow,
  uppercase,
  ...props
}: BannerProps) {
  const { width } = useWindowSize();

  const inner = useMemo(() => {
    if (typeof children !== "string" || width <= 0) return "";
    const size = Math.ceil(width / ((children.length + 1) * 10));
    return size > 0 && size < Infinity
      ? new Array(size).fill(`${children}`).join(`   `)
      : "";
  }, [children, width]);

  return (
    <Flex width="100%" overflow="hidden" {...props}>
      <Banner>
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
          whiteSpace="nowrap"
          color="textContrast"
        >
          {inner}
        </Text>
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
          whiteSpace="nowrap"
          color="textContrast"
        >
          {inner}
        </Text>
      </Banner>
    </Flex>
  );
}
