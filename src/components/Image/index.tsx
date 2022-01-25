import React from "react";
import styled, { css } from "styled-components";
import Flex, { FlexBoxProps } from "../Layout/Flex";
import NextImage from "next/image";

export const ImageFilter = css`
  mix-blend-mode: screen;
  -webkit-filter: grayscale(100%) contrast(100%);
  filter: grayscale(100%) contrast(200%);
  opacity: 1;
  user-select: none;
  pointer-events: none;
`;

const ImageContainer = styled(Flex).attrs({ bg: "primary.c80" })<{
  backgroundSize?: string;
  backgroundPosition?: string;
}>`
  position: 100vmin;
  min-height: 40vw;
  .inner-img {
    position: relative;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    object-fit: cover;
    ${ImageFilter}
    z-index: 1;
  }

  @media (max-width: 600px) {
    min-height: 100vmin;
  }
`;

type Props = FlexBoxProps & {
  bg?: string;
  src: string;
  alt?: string;
  backgroundSize?: "cover" | "contain";
  backgroundPosition?: string;
  children?: React.ReactNode;
};

export default function Image({
  src,
  alt,
  backgroundSize = "cover",
  children,
  ...props
}: Props) {
  return (
    <ImageContainer backgroundSize={backgroundSize} {...props}>
      <div className="inner-img">
        <NextImage
          src={src}
          alt={alt}
          layout="fill"
          objectFit={backgroundSize}
        />
      </div>
      {children}
    </ImageContainer>
  );
}
