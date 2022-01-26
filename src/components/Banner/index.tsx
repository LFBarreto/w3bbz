import styled, { keyframes } from "styled-components";
import Text, { TextProps } from "../Text";
import { baseStyles, BaseStyledProps } from "../styled";
import React, { useRef, useState, useEffect } from "react";
import Flex, { FlexBoxProps } from "../Layout/Flex";
import { useWindowSize } from "react-use";

export type BannerProps = BaseStyledProps &
  TextProps &
  FlexBoxProps &
  Partial<{ children: React.ReactNode; ready?: boolean }>;

const animBanner = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const Banner = styled(Flex).attrs<BannerProps, BannerProps>({
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "flex-end",
  width: "100%",
})`
  opacity: ${(p) => (p.ready ? 1 : 0)};
  ${baseStyles};
  box-sizing: border-box;
  border: none;
  font-size: 1em;
  min-height: 44px;
  ${Text} {
    line-height: 44px;
    animation: ${animBanner} 10s linear infinite;
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
  const [size, setSize] = useState(0);
  const { width } = useWindowSize();
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    if (
      ref &&
      ref.current &&
      typeof ref.current?.getBoundingClientRect === "function"
    ) {
      const { width: elWidth } = ref.current.getBoundingClientRect();
      setSize(Math.ceil(width / elWidth) + 2);
      setReady(true);
    }
  }, [ref, width]);

  return (
    <Banner ready={ready} {...props}>
      <Text
        ref={ref}
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
        px={8}
        color="textContrast"
      >
        {children}
      </Text>
      {size > 0 &&
        Array(size)
          .fill(null)
          .map((_, i) => (
            <Text
              key={i}
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
              px={8}
              color="textContrast"
            >
              {children}
            </Text>
          ))}
    </Banner>
  );
}
