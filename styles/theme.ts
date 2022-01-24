import {
  keyframes,
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
} from "styled-components";
import palette from "./palettes/theme";

export type ThemeNames = "default";
export type ColorPalette = typeof palette;

/* space indexes:
  0, 1, 2, 3, 4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21
 */
export const space = [
  0, 2, 4, 8, 10, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68,
  72, 76,
];

export type TextVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "large"
  | "largeLineHeight"
  | "body"
  | "bodyLineHeight"
  | "paragraph"
  | "paragraphLineHeight"
  | "small"
  | "extraSmall"
  | "tiny"
  | "micro"
  | "subtitle";

export type ThemeScale<Type, Aliases extends string> = Array<Type> &
  Record<Aliases, Type>;

export const fontSizes = [
  '0.5rem', '0.8rem', '1rem', '1.1rem', '1.3rem', '1.5rem', '1.6rem', '1.7rem', '2.2rem', '2.6rem', '3rem', '4rem',
] as ThemeScale<string, TextVariants>;

[
  fontSizes.micro,
  fontSizes.tiny,
  fontSizes.extraSmall,
  fontSizes.small,
  fontSizes.paragraph,
  fontSizes.body,
  fontSizes.large,
  fontSizes.h5,
  fontSizes.h4,
  fontSizes.h3,
  fontSizes.h2,
  fontSizes.h1,
] = fontSizes;
fontSizes.largeLineHeight = fontSizes.large;
fontSizes.bodyLineHeight = fontSizes.body;
fontSizes.paragraphLineHeight = fontSizes.paragraph;
fontSizes.subtitle = fontSizes.extraSmall;

const fontWeights = {
  extraLight: "100",
  light: "300",
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
  extraBold: "800",
};

export const radii = [0, 4, 8, 12, 16, 20];
export const shadows = ["0 4px 8px 0 rgba(0, 0, 0, 0.03)"];
export const zIndexes = [-1, 0, 1, 9, 10, 90, 100, 900, 1000];

const animationDuration = "0.33s";
const easings = {
  outQuadratic: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
};

const transition = (
  properties = ["all"],
  duration = animationDuration,
  easing = easings.outQuadratic
): FlattenSimpleInterpolation => css`
  transition-property: ${properties.join(",")};
  transition-duration: ${duration};
  transition-timing-function: ${easing};
`;

const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;
const fadeOut = keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  `;
const fadeInGrowX = keyframes`
    0% {
      opacity: 0;
      transform: scaleX(0);
    }
    100% {
      opacity: 1;
      transform: scaleX(1);
    }
`;
const fadeInUp = keyframes`
    0% {
      opacity: 0;
      transform: translateY(66%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  `;
const animations = {
  fadeIn: (): FlattenSimpleInterpolation =>
    css`
      ${fadeIn} ${animationDuration} ${easings.outQuadratic} forwards
    `,
  fadeOut: (): FlattenSimpleInterpolation =>
    css`
      ${fadeOut} ${animationDuration} ${easings.outQuadratic} forwards
    `,
  fadeInGrowX: (): FlattenSimpleInterpolation =>
    css`
      ${fadeInGrowX} 0.6s ${easings.outQuadratic} forwards
    `,
  fadeInUp: (): FlattenSimpleInterpolation =>
    css`
      ${fadeInUp} ${animationDuration} ${easings.outQuadratic} forwards
    `,
};
const overflow = {
  x: css`
    overflow-y: hidden;
    overflow-x: scroll;
    will-change: transform;
    &:hover {
      --track-color: ${(p) => p.theme.colors.neutral.c30};
    }
  `,
  y: css`
    overflow-x: hidden;
    overflow-y: scroll;
    will-change: transform;
    &:hover {
      --track-color: ${(p) => p.theme.colors.neutral.c30};
    }
  `,
  yAuto: css`
    overflow-x: hidden;
    overflow-y: auto;
    will-change: transform;
    &:hover {
      --track-color: ${(p) => p.theme.colors.neutral.c30};
    }
  `,
  xy: css`
    overflow: scroll;
    will-change: transform;
    &:hover {
      --track-color: ${(p) => p.theme.colors.neutral.c30};
    }
  `,
  trackSize: 12,
};

const sizes: Record<string, string> = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const devices: Record<string, string> = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
  desktopL: `(max-width: ${sizes.desktop})`
};

declare module "styled-components" {
  export interface Font {
    weight: number;
    style: string;
  }
  export interface DefaultTheme {
    theme: string;
    animations: typeof animations;
    transition: typeof transition;
    mediaQuery: typeof mediaQuery;
    overflow: typeof overflow;
    sizes: Record<string, string>;
    radii: number[];
    fontSizes: string[];
    space: number[];
    shadows: string[];
    colors: ColorPalette;
    fontWeights: Record<string, string>;
    zIndexes: number[];
  }
}



const mediaQuery = (
  size = "mobileL",
  styleString: any,
): FlattenSimpleInterpolation => css`
@media ${devices[size]} {
  ${styleString}
} 
`;

const theme: DefaultTheme = {
  theme: "light",
  sizes,
  mediaQuery,
  radii,
  fontSizes,
  fontWeights,
  space,
  shadows,
  colors: palette,
  animations,
  overflow,
  transition,
  zIndexes,
};

export default theme;
export type Theme = DefaultTheme;
