import React from "react";
import styled, { css } from "styled-components";
import Flex, { FlexBoxProps } from "../Layout/Flex";

export const ImageFilter = css`
  mix-blend-mode: screen;
  -webkit-filter: grayscale(100%) contrast(200%);
  filter: grayscale(100%) contrast(200%);
  opacity: 1;
  user-select: none;
  pointer-events: none;
`;

const ImageContainer = styled(Flex).attrs({
  bg: "primary.c80",
})`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${ImageFilter}
  }
  user-select: none;
  pointer-events: none;
`;

type Props = FlexBoxProps & {
  bg?: string;
  src: string;
  alt?: string;
};

export default function Image({ src, alt, ...props }: Props) {
  return (
    <ImageContainer {...props}>
      <img src={src} alt={alt} loading="lazy" />
    </ImageContainer>
  );
}
