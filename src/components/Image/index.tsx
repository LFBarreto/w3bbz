import React from "react";
import styled, { css } from "styled-components";
import Flex, { FlexBoxProps } from "../Layout/Flex";
import NextImage from "next/image";

export const ImageFilter = css`
  mix-blend-mode: screen;
  -webkit-filter: grayscale(100%) contrast(100%);
  filter: grayscale(100%) contrast(200%);
  opacity: 1;
`;

const ImageContainer = styled(Flex).attrs({ bg: "primary.c80" })<{
  backgroundSize?: string;
  backgroundPosition?: string;
  noFilter?: boolean;
}>`
  .inner-img {
    position: relative;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    object-fit: cover;
    z-index: 1;
    ${ImageFilter}
  }
  ${(p) =>
    p.noFilter
      ? `
    &:hover .inner-img ,.inner-img:hover {
      filter:none;
      mix-blend-mode: normal;
    }
    `
      : ""}

  ${(p) =>
    p.height
      ? ""
      : ` min-height: 40vw;
  @media (max-width: 600px) {
    min-height: 100vmin;
  }`}
`;

export type ImageProps = FlexBoxProps & {
  bg?: string;
  src: string;
  alt?: string;
  backgroundSize?: "cover" | "contain";
  backgroundPosition?: string;
  children?: React.ReactNode;
  noFilter?: boolean;
};

export default function Image({
  src,
  alt,
  backgroundSize = "cover",
  children,
  ...props
}: ImageProps) {
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
