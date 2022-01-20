import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-size: calc(60px + 2vw);
  }

  body {
    font-family: monospace;
    line-height: 1.5rem;
    font-size: 1.1rem;
    width: 100%;
    height: 100%;
    background-color: ${(p) => p.theme.colors.background.main};
  }

  [data-reactroot] {
    width: 100%;
    height: 100%;
    display: flex;
    padding: ${(p) => p.theme.space[3]}px;
  }

  ::spelling-error  {
    text-decoration: none;
  }

    /* width */
  ::-webkit-scrollbar {
    width: ${(p) => p.theme.space[2]}px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(p) => p.theme.colors.primary.c80};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${(p) => p.theme.colors.primary.c100};
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover, 
  :-webkit-autofill:focus, 
  :-webkit-autofill:active{
      -webkit-box-shadow: 0 0 0 30px ${(p) =>
    p.theme.colors.background.main} inset !important;
      -webkit-text-fill-color: ${(p) => p.theme.colors.primary.c100} !important;
  }

  @font-face {
    font-family: "Tinier";
    src: url("fonts/tinier.regular.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Tiny";
    src: url("fonts/tiny.regular.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
    user-select: inherit;
    cursor: inherit;
    outline: none;
  }

  ::selection {
    background: ${(p) => p.theme.colors.primary.c10};
  }

  --track-color: rgba(0,0,0,0);


  #blobzz {
    position: fixed;
    z-index: -1;
    inset: 0 0 0 0;
    width: 100vw;
    height: 100vh;
    
    --easing: cubic-bezier(0.65, 0, 0.35, 1);
  
    --c1: hsl(60, 100%, 50%);
    --c2: hsl(120, 100%, 50%);
    --c3: hsl(180, 100%, 50%);
    --c4: hsl(240, 100%, 50%);
    --c5: hsl(300, 100%, 50%);
    --c6: hsl(360, 100%, 50%);
    --cc1: hsl(60, 100%, 50%);
    --cc2: hsl(120, 100%, 50%);
    --cc3: hsl(180, 100%, 50%);
    --cc4: hsl(240, 100%, 50%);
    --cc5: hsl(300, 100%, 50%);
    --cc6: hsl(360, 100%, 50%);
    --bg: ${(p) => p.theme.colors.background.main};
  
    --t1: 16s;
    --t2: 20s;
    --t3: 33s;
    --t4: 47s;
    --t5: 60s;
  
    --p0: translate(0rem, 0rem) scale(0.5);
    --p1: translate(-2rem, 2rem) scale(0.7);
    --p2: translate(2rem, 3rem) scale(1.5);
    --p3: translate(-2rem, -4rem) scale(2);
    --p4: translate(1rem, 0.5rem) scale(0.3);
    --p5: translate(-3rem, 1.5rem) scale(0.2);
  
    --b0: 1;
    --b1: 0;
    --b2: 1;
    --b3: 1;
    --b4: 1;
    --b5: 0;
    --b6: 1;
    --b7: 0;
    --b8: 1;
  
    background: var(--bg);
  }
  
  #blobzz * {
    transform-origin: 50% 50%;
  }
  
  #blobzz .sc1 {
    stop-color: var(--c1);
  }
  
  #blobzz .sc2 {
    stop-color: var(--c2);
  }
  
  #blobzz .sc3 {
    stop-color: var(--c3);
  }
  
  #blobzz .sc4 {
    stop-color: var(--c4);
  }
  
  #blobzz .sc5 {
    stop-color: var(--c5);
  }
  
  #blobzz .sc6 {
    stop-color: var(--c6);
  }
  
  #blobzz .scc1 {
    stop-color: var(--cc1);
  }
  
  #blobzz .scc2 {
    stop-color: var(--cc2);
  }
  
  #blobzz .scc3 {
    stop-color: var(--cc3);
  }
  
  #blobzz .scc4 {
    stop-color: var(--cc4);
  }
  
  #blobzz .scc5 {
    stop-color: var(--cc5);
  }
  
  #blobzz .scc6 {
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
      transform: translateY(-2rem) scale(0.8, 0.6);
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
      transform: translate(-1rem, 2rem) scale(0.8, 0.6);
    }
  
    100% {
      transform: translate(-1.5rem, -3rem) scale(0);
    }
  }
  
  #blobzz .b {
    animation: anim_Iddle var(--t3) var(--easing) infinite;
  }
  
  #blobzz .blob_0 {
    transform: var(--p0);
  }
  
  #blobzz .blob_0 g {
    animation: anim_2 var(--t1) var(--easing) infinite;
  }
  
  #blobzz .blob_1 {
    transform: var(--p1);
  }
  
  #blobzz .blob_1 g {
    animation: anim_1 var(--t4) var(--easing) infinite;
  }
  
  #blobzz .blob_2 {
    transform: var(--p2);
  }
  
  #blobzz .blob_2 g {
    animation: anim_2 var(--t3) var(--easing) infinite;
  }
  
  #blobzz .blob_3 g {
    transform: var(--p3);
  }
  
  #blobzz .blob_3 {
    animation: anim_0 var(--t1) var(--easing) alternate-reverse infinite;
  }
  
  #blobzz .blob_4 g {
    transform: var(--p4);
  }
  
  #blobzz .blob_4 {
    animation: anim_1 var(--t3) var(--easing) infinite;
  }
  
  #blobzz .blob_5 path {
    transform: var(--p5);
    animation: anim_C_Top var(--t5) var(--easing) alternate-reverse infinite;
  }
  
  #blobzz .circle_0 {
    animation: anim_C_Bot var(--t1) var(--easing) infinite;
  }
  
  #blobzz .circle_1 {
    animation: anim_C_Right var(--t2) var(--easing) infinite;
  }
  
  #blobzz .circle_2 {
    animation: anim_C_Top var(--t3) var(--easing) infinite;
  }
  
`;
