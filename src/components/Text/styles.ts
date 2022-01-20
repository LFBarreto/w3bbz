import { TextVariants } from "../../../styles/theme";

export const textVariantStyle: Record<
  TextVariants,
  {
    fontFamily: string;
    lineHeight?: string | number;
    fontWeight?: number;
    "text-transform"?: string;
  }
> = {
  h1: {
    fontFamily: "Tinier",
    fontWeight: 500,
    "text-transform": "uppercase",
    lineHeight: "60px",
  },
  h2: {
    fontFamily: "Tinier",
    fontWeight: 500,
    "text-transform": "uppercase",
  },
  h3: {
    fontFamily: "Tinier",
    fontWeight: 500,
    "text-transform": "uppercase",
  },
  h4: {
    fontFamily: "Tinier",
    fontWeight: 500,
    "text-transform": "uppercase",
  },
  h5: {
    fontFamily: "Tinier",
    fontWeight: 500,
    "text-transform": "uppercase",
  },
  large: {
    fontFamily: "Tiny",
  },
  largeLineHeight: {
    fontFamily: "Tiny",
    lineHeight: 1.7,
  },
  body: {
    fontFamily: "Tiny",
    lineHeight: 1.7,
  },
  bodyLineHeight: {
    fontFamily: "Tiny",
    lineHeight: 1.7,
  },
  paragraph: {
    fontFamily: "Tiny",
  },
  paragraphLineHeight: {
    fontFamily: "Tiny",
    lineHeight: 1.7,
  },
  small: {
    fontFamily: "Tiny",
  },
  extraSmall: {
    fontFamily: "Tiny",
  },
  tiny: {
    fontFamily: "Tiny",
  },
  micro: {
    fontFamily: "Tiny",
  },
  subtitle: {
    fontFamily: "Tiny",
    fontWeight: 600,
    "text-transform": "uppercase",
  },
};