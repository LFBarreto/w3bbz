import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-size: calc(9px + 1vw);
  }

  body {
    --p-c10: hsl(120, 10%, 50%);
    --p-c20: hsl(120, 20%, 50%);
    --p-c30: hsl(120, 30%, 50%);
    --p-c40: hsl(120, 40%, 50%);
    --p-c50: hsl(120, 50%, 50%);
    --p-c60: hsl(120, 60%, 50%);
    --p-c70: hsl(120, 70%, 50%);
    --p-c80: hsl(120, 80%, 50%);
    --p-c90: hsl(120, 90%, 50%);
    --p-c100: hsl(120, 100%, 50%);

    --n-c00: hsl(0, 0%, 0%);
    --n-c20: hsl(0, 0%, 10%);
    --n-c30: hsl(0, 0%, 15%);
    --n-c40: hsl(0, 1%, 23%);
    --n-c50: hsl(0, 0%, 34%);
    --n-c60: hsl(0, 0%, 44%);
    --n-c70: hsl(0, 0%, 58%);
    --n-c80: hsl(0, 0%, 76%);
    --n-c90: hsl(0, 0%, 88%);
    --n-c100: hsl(0, 0%, 100%);
    --n-c100a07: hsl(0, 0%, 100%, 0.7);

    --main: hsla(0, 0%, 0%, 1);
    --sptfy-filter: none;
    --filter-noise:  url(/images/bg-noise-dark.png);

    font-family: monospace;
    width: 100%;
    height: 100%;
    background-color: var(--main);

    overflow-x: hidden;
    overflow-y: visible;
  }

  body.light {
   
      --p-c10: hsl(251, 100%, 99%);
      --p-c20: hsl(251, 100%, 97%);
      --p-c30: hsl(249, 100%, 95%);
      --p-c40: hsl(250, 100%, 91%);
      --p-c50: hsl(249, 100%, 88%);
      --p-c60: hsl(248, 100%, 85%);
      --p-c70: hsl(248, 76%, 79%);
      --p-c80: hsl(247, 56%, 68%);
      --p-c90: hsl(247, 40%, 53%);
      --p-c100: hsl(247, 46%, 42%);
    

      --n-c00: hsl(0, 0%, 100%);
      --n-c20: hsl(0, 0%, 98%);
      --n-c30: hsl(0, 0%, 96%);
      --n-c40: hsl(0, 0%, 91%);
      --n-c50: hsl(0, 0%, 84%);
      --n-c60: hsl(0, 0%, 76%);
      --n-c70: hsl(0, 0%, 58%);
      --n-c80: hsl(0, 0%, 42%);
      --n-c90: hsl(0, 0%, 30%);
      --n-c100: hsl(0, 0%, 0%);
      --n-c100a07: hsla(0, 0%, 0%, 0.7);

      --main: hsla(0, 0%, 100%, 1);

      --sptfy-filter: invert(1);
      --filter-noise:  url(/images/bg-noise-light.png);
  }

  .shift-title {
    text-shadow: 0.3rem 0px var(--p-c80),
      0.35rem 0px var(--p-c80);
  }

  [data-reactroot] {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px;

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
    src: url("/fonts/tinier.regular.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Tiny";
    src: url("/fonts/tiny.regular.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura";
    src: url("/fonts/FuturaLT-Bold.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura-Oblique";
    src: url("/fonts/FuturaLT-ExtraBoldOblique.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura-Regular";
    src: url("/fonts/FuturaLT-Condensed.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Futura-Thin";
    src: url("/fonts/FuturaLT-Light.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Dots";
    src: url("/fonts/5by7.regular.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Dots-Bold";
    src: url("/fonts/5by7.bold.woff2") format("woff2");
    font-weight: 600;
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
    background: ${(p) => p.theme.colors.primary.c80};
    color: ${(p) => p.theme.colors.neutral.c100};
  }

  --track-color: rgba(0,0,0,0);
`;
