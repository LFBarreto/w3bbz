import React from "react";
import styled from "styled-components";

const Container = styled.svg`
  position: fixed;
  z-index: 0;
  inset: 0 0 0 0;
  width: 100vw;
  height: 100vh;
  --easing: cubic-bezier(0.65, 0, 0.35, 1);
  --p4: none;
  --p5: none;
  --p6: none;
  --p7: none;
  --p8: none;
  --c1: var(--p-c80);
  --c2: var(--p-c60);
  --c3: var(--p-c80);
  --c4: var(--p-c80);
  --c5: var(--p-c80);
  --c6: var(--p-c80);
  --cc1: var(--p-c80);
  --cc2: var(--p-c60);
  --cc3: var(--p-c80);
  --cc4: var(--p-c80);
  --cc5: var(--p-c80);
  --cc6: var(--p-c80);
  --bg: hsl(160, 100%, 85%);
  --t1: 16.666s;
  --t2: 20.2s;
  --t3: 33.3s;
  --t4: 47s;
  --t5: 61.5s;
  --b0: 0;
  --b1: 0;
  --b2: 1;
  --b3: 1;
  --b4: 0;
  --b5: 0;
  --b6: 0;
  --b7: 1;
  --b8: 0;
  --p0: translate(1.6rem, -1.6rem) scale(-0.9, 0.9);
  --p1: translate(0rem, 0.8rem) scale(0.7, 0.7);
  --p2: translate(1rem, 1.2rem) scale(0.4, 0.4);
  --p3: translate(0rem, 0.2rem) scale(1, 1);
  --p4: translate(-0.2rem, 0rem) scale(-0.9, 0.9);
  --p5: translate(-2rem, -0.3rem) scale(0.4, -0.4);
  background: var(--main);

  * {
    transform-origin: 50% 50%;
  }

  .sc1 {
    stop-color: var(--c1);
  }

  .sc2 {
    stop-color: var(--c2);
  }

  .sc3 {
    stop-color: var(--c3);
  }

  .sc4 {
    stop-color: var(--c4);
  }

  .sc5 {
    stop-color: var(--c5);
  }

  .sc6 {
    stop-color: var(--c6);
  }

  .scc1 {
    stop-color: var(--cc1);
  }

  .scc2 {
    stop-color: var(--cc2);
  }

  .scc3 {
    stop-color: var(--cc3);
  }

  .scc4 {
    stop-color: var(--cc4);
  }

  .scc5 {
    stop-color: var(--cc5);
  }

  .scc6 {
    stop-color: var(--cc6);
  }

  @keyframes anim_Iddle {
    0%,
    to {
      transform: translate(0rem, 0.5rem) scaleY(1.1);
    }

    50% {
      transform: translate(0rem, -0.5rem) scaleY(0.9);
    }
  }

  @keyframes anim_1 {
    0%,
    to {
      transform: translate(0rem, 100vh) scale(0);
    }

    5% {
      transform: translate(0rem, 100vh) scale(1);
    }

    95% {
      transform: translate(0rem, -100vh) scale(1.2);
    }

    99% {
      transform: translate(0rem, -100vh) scale(0);
    }
  }

  @keyframes anim_2 {
    50% {
      transform: translate(0rem, -1rem) scale(0.7);
    }
  }

  @keyframes anim_C_Right {
    0% {
      transform: translate(0, 0) scale(0);
    }

    66% {
      transform: translate(2rem, 2rem) scale(0.7);
    }

    100% {
      transform: translate(2.5rem, -2rem) scale(0);
    }
  }

  @keyframes anim_C_Top {
    0% {
      transform: translateY(0) scale(0, 0);
    }

    33% {
      transform: translateY(-2rem) scale(0.8);
    }

    100% {
      transform: translateY(-1.5rem) scale(0, 0);
    }
  }

  @keyframes anim_C_Bot {
    0% {
      transform: translateY(0) scale(0);
    }

    33% {
      transform: translate(-1rem, 2rem) scale(0.8);
    }

    100% {
      transform: translate(-1.5rem, -3rem) scale(0);
    }
  }

  .b {
    animation: anim_Iddle var(--t3) var(--easing) infinite;
  }

  .blob_0,
  .id0 {
    transform: var(--p0);
  }

  .blob_0 g {
    animation: anim_2 var(--t1) var(--easing) infinite;
  }

  .blob_1,
  .id1 {
    transform: var(--p1);
  }

  .blob_1 g {
    animation: anim_1 var(--t4) var(--easing) infinite;
  }

  .blob_2,
  .id2 {
    transform: var(--p2);
  }

  .blob_2 g {
    animation: anim_2 var(--t3) var(--easing) infinite;
  }

  .blob_3 g,
  .id3 {
    transform: var(--p3);
  }

  .blob_3 {
    animation: anim_0 var(--t1) var(--easing) alternate-reverse infinite;
  }

  .blob_4 g {
    transform: var(--p4);
  }

  .blob_4 {
    animation: anim_1 var(--t3) var(--easing) infinite;
  }

  .blob_5 path,
  .id5 {
    transform: var(--p5);
  }

  .blob_5 path {
    animation: anim_C_Top var(--t5) var(--easing) alternate-reverse infinite;
  }

  .blob_6 g,
  .id6 {
    transform: var(--p6);
  }

  .blob_6 path {
    animation: anim_C_Bot var(--t3) var(--easing) alternate-reverse infinite;
  }

  .blob_7 g,
  .id7 {
    transform: var(--p7);
  }

  .blob_7 {
    animation: anim_0 var(--t1) var(--easing) alternate-reverse infinite;
  }

  .blob_8 g,
  .id8 {
    transform: var(--p8);
  }

  .blob_8 path {
    transform: var(--p8);
    animation: anim_1 var(--t2) var(--easing) alternate-reverse infinite;
  }

  .circle_1 {
    animation: anim_C_Bot var(--t1) var(--easing) infinite;
  }

  .circle_2 {
    animation: anim_C_Right var(--t2) var(--easing) infinite;
  }

  .circle_3 {
    animation: anim_C_Top var(--t3) var(--easing) infinite;
  }
`;

export default function Blobz() {
  return (
    <Container
      viewBox="0 0 600 600"
      id="blobzz"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter id="goo">
          <feGaussianBlur in="r" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10"
          />
        </filter>
        <circle id="C0" className="circle__0" cx="300" cy="300" r="15" />
        <g id="layer_1" fill="var(--c1)">
          <use
            href="#C0"
            className="id4"
            fillOpacity="var(--b4)"
            style={{ strokeWidth: "0.2rem" }}
          />
          <use
            href="#C0"
            className="id5"
            x="1rem"
            fillOpacity="var(--b5)"
            style={{ strokeWidth: "calc(0.2rem * var(--b5))" }}
          />
          <use
            href="#C0"
            className="id3"
            x="-5rem"
            fillOpacity="var(--b3)"
            style={{ strokeWidth: "calc(0.2rem * var(--b3))" }}
          />
          <use
            href="#C0"
            className="id7"
            y="4rem"
            fillOpacity="var(--b7)"
            style={{ strokeWidth: "calc(0.2rem * var(--b7))" }}
          />
          <use
            href="#C0"
            className="id1"
            y="-1rem"
            fillOpacity="var(--b1)"
            style={{ strokeWidth: "calc(0.2rem * var(--b5))" }}
          />
          <use
            href="#C0"
            className="id8"
            x="1rem"
            y="1rem"
            fillOpacity="var(--b8)"
            style={{ strokeWidth: "calc(0.2rem * var(--b8))" }}
          />
          <use
            href="#C0"
            className="id2"
            x="1rem"
            y="-1rem"
            fillOpacity="var(--b2)"
            style={{ strokeWidth: "calc(0.2rem * var(--b2))" }}
          />
          <use
            href="#C0"
            className="id6"
            x="-1rem"
            y="1rem"
            fillOpacity="var(--b6)"
            style={{ strokeWidth: "calc(0.2rem * var(--b6))" }}
          />
          <use
            href="#C0"
            className="id0"
            x="-1rem"
            y="-1rem"
            fillOpacity="var(--b0)"
            style={{ strokeWidth: "calc(0.2rem * var(--b0))" }}
          />
        </g>
      </defs>
      <g id="global" filter="url(#goo)">
        <use href="#layer_1" fill="none" stroke="var(--bg)" />
        <g className="b">
          <g className="blob_0">
            <g>
              <path
                fill="var(--c1)"
                d="M129,134Q100,169,77,162Q55,155,77,103Q100,51,129,75Q159,100,129,134Z"
              />
            </g>
          </g>
          <g className="blob_1">
            <g>
              <circle
                className="circle_1"
                cx="300"
                cy="280"
                r="20"
                fill="var(--c1)"
              />
              <path
                fill="var(--c1)"
                d="M153,141Q112,170,81,178Q50,187,81,115Q112,44,153,78Q194,112,153,141Z"
              />
            </g>
          </g>
          <g className="blob_2">
            <g>
              <circle
                className="circle_1"
                cx="300"
                cy="280"
                r="20"
                fill="var(--c1)"
              />
              <circle
                className="circle_2"
                cx="300"
                cy="260"
                r="40"
                fill="var(--c1)"
              />
              <path
                fill="var(--c1)"
                d="M142,158Q87,191,85,122Q84,54,141,89Q198,125,142,158Z"
              />
            </g>
          </g>
          <g className="blob_3">
            <g>
              <circle
                className="circle_1"
                cx="300"
                cy="280"
                r="20"
                fill="var(--c1)"
              />
              <circle
                className="circle_2"
                cx="300"
                cy="260"
                r="40"
                fill="var(--c1)"
              />
              <circle
                className="circle_3"
                cx="300"
                cy="240"
                r="60"
                fill="var(--c1)"
              />
              <path
                fill="var(--c1)"
                d="M159,179Q88,222,95,149Q102,76,166,106Q230,137,159,179Z"
              />
            </g>
          </g>
          <g className="blob_4">
            <g>
              <path
                fill="var(--c1)"
                d="M208,196Q150,243,82,279Q15,315,82,173Q150,31,208,90Q267,150,208,196Z"
              />
            </g>
          </g>
          <g className="blob_5">
            <g>
              <circle
                className="circle_1"
                cx="300"
                cy="280"
                r="20"
                fill="var(--c1)"
              />
              <path
                fill="var(--c1)"
                d="M182,226Q88,291,91,167Q94,44,185,103Q277,162,182,226Z"
              />
            </g>
          </g>
        </g>
      </g>
      <use href="#layer_1" stroke="none" />
    </Container>
  );
}
