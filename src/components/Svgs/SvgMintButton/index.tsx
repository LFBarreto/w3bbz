import React from "react";
import styled, { css, keyframes } from "styled-components";

export const arrowAnim = keyframes`
  0%, to {
    transform:  rotate(-45deg)  translateX(10px);
  }
  50% {
    transform:  rotate(-45deg) translateX(20px) 
  }
`;
export const rotate = keyframes`
  0% {
    transform:  rotate(0deg);
  }
  50% {
    transform:  rotate(180deg) 
  }
  to {
    transform:  rotate(380deg);
  }
`;

const MintContainer = styled.svg<{ loading?: boolean }>`
  position: fixed;
  bottom: -10vmin;
  left: -15vmin;
  width: 70vmin;
  height: 70vmin;
  z-index: 4;
  cursor: pointer;
  transform: translateY(100%);
  filter: grayscale(1);
  transition: all 0.3s ease-in-out;
  will-change: transform;
  &.active {
    transform: translateY(0%);
  }
  &:hover {
    transform: translateY(0%) scale(1.1);
    filter: none;
  }

  #path828 {
    fill: none;
    fill-opacity: 1;
    stroke-width: 0.23076871;
  }
  .path845 {
    fill: var(--n-c00);
    fill-opacity: 1;
  }
  .path888 {
    fill: url(#img1);
  }
  .path846,
  .path845,
  .path888 {
    stroke: var(--n-c100);
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 4;
    stroke-dasharray: none;
    stroke-opacity: 1;
  }
  .path846 {
    fill: none;
  }

  .SR {
    fill: var(--t-contrast);
    font-family: Dots-Bold;
    font-size: 30px;
    user-select: none;
  }
  .RR {
    fill: var(--n-c100);
    font-family: Tiny;
    font-size: 40px;
    user-select: none;
  }
  .Top {
    font-size: 75px;
  }

  .inner-text {
    transform-origin: 50% 50%;
    will-change: transform;
    ${(p) =>
      p.loading
        ? css`
            animation: ${rotate} 10s linear infinite;
          `
        : ""}
  }

  .Arrow {
    fill: var(--p-c80);
    transform-origin: 50% 50%;
    will-change: transform;
    animation: ${arrowAnim} 1s linear infinite;
  }

  @media (max-width: 400px) {
    bottom: -2vmin;
  }
`;

export default function SvgMintButton({
  name,
  supply,
  onClick,
  text1,
  text2,
  bgImage,
  loading,
  active,
}: {
  name: string;
  supply: number;
  onClick: () => void;
  text1: string;
  text2: string;
  bgImage?: string;
  loading?: boolean;
  active?: boolean;
}) {
  return (
    <MintContainer
      className={active ? "active" : ""}
      loading={loading}
      viewBox="0 0 600 600"
      id="minteyzz"
      onClick={onClick}
    >
      <defs>
        <pattern
          id="img1"
          patternUnits="userSpaceOnUse"
          width="600"
          height="600"
        >
          <image href={bgImage} x="0" y="0" width="600" height="600" />
        </pattern>
      </defs>
      <g id="layer1">
        <circle className="path888" cx="300" cy="300" r="259.83856" />

        <circle className="path845" cx="300" cy="300" r="151.21957" />
        <circle className="path846" cx="300" cy="300" r="161.21957" />
        <circle className="path846" cx="300" cy="300" r="177.82922" />
        <circle className="path846" cx="300" cy="300" r="196.65349" />
        <circle className="path846" cx="300" cy="300" r="218.53146" />
        <circle className="path846" cx="300" cy="300" r="239.83856" />
        <circle className="path846" cx="300" cy="300" r="289.66751" />

        <path
          id="path847"
          d="M 564.19938,300 A 264.19938,264.19938 0 0 1 300,564.19938 264.19938,264.19938 0 0 1 35.800622,300 264.19938,264.19938 0 0 1 300,35.800622 264.19938,264.19938 0 0 1 564.19938,300 Z"
          className="path849"
          fill="none"
        />
        <g className="inner-text">
          <text
            x="51%"
            y="48%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="RR Top"
          >
            {text1}
          </text>
          <text
            x="50%"
            y="57%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="RR"
          >
            {text2}
          </text>
        </g>
        <path
          className="Arrow"
          d="m 456.574,281.04163 v 7.46498 h 7.46662 v -7.46498 z m 0,7.46498 h -7.46499 v 7.46663 h 7.46499 z m -7.46499,7.46663 h -7.46662 v 7.46665 h 7.46662 z m 0,7.46665 v 7.46662 h 7.46499 v -7.46662 z m 7.46499,7.46662 v 7.46498 h 7.46662 v -7.46498 z m 29.86487,-29.86488 v 7.46498 h 7.46663 v -7.46498 z m 0,7.46498 h -7.46499 v 7.46663 h 7.46499 z m -7.46499,7.46663 h -7.46664 v 7.46665 h 7.46664 z m 0,7.46665 v 7.46662 h 7.46499 v -7.46662 z m 7.46499,7.46662 v 7.46498 h 7.46663 v -7.46498 z m 29.86487,-29.86488 v 7.46498 h 7.46662 v -7.46498 z m 0,7.46498 h -7.46499 v 7.46663 h 7.46499 z m -7.46499,7.46663 h -7.46663 v 7.46665 h 7.46663 z m 0,7.46665 v 7.46662 h 7.46499 v -7.46662 z m 7.46499,7.46662 v 7.46498 h 7.46662 v -7.46498 z"
        />
        <text className="SR">
          <textPath
            href="#path847"
            startOffset="0%"
            lengthAdjust="spacing"
            method="align"
            spacing="auto"
            textLength="1640"
          >
            {name} left: {supply} {"<<<"} {name} left: {supply} {"<<<"}
            <animate
              attributeName="startOffset"
              values="0%;-100%"
              dur="60s"
              repeatCount="indefinite"
            />
          </textPath>
        </text>
        <text className="SR">
          <textPath
            href="#path847"
            startOffset="-100%"
            lengthAdjust="spacing"
            method="align"
            spacing="auto"
            textLength="1640"
          >
            {name} left: {supply} {"<<<"} {name} left: {supply} {"<<<"}
            <animate
              attributeName="startOffset"
              values="100%;0%"
              dur="60s"
              repeatCount="indefinite"
            />
          </textPath>
        </text>
      </g>
    </MintContainer>
  );
}
