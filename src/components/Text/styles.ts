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
    fontFamily: "Tiny",
    fontWeight: 500,
    "text-transform": "uppercase",
  },
  h5: {
    fontFamily: "Tiny",
    fontWeight: 500,
    "text-transform": "uppercase",
  },
  large: {
    fontFamily: "Dots-Bold",
  },
  largeLineHeight: {
    fontFamily: "Dots-Bold",
    lineHeight: 1.7,
  },
  body: {
    fontFamily: "Dots-Bold",
    lineHeight: 1.7,
  },
  bodyLineHeight: {
    fontFamily: "Dots-Bold",
    lineHeight: 1.7,
  },
  paragraph: {
    fontFamily: "Futura",
    fontWeight: 300
  },
  paragraphLineHeight: {
    fontFamily: "Dots-Bold",
    lineHeight: 1.7,
  },
  small: {
    fontFamily: "Dots",
  },
  extraSmall: {
    fontFamily: "Dots",
  },
  tiny: {
    fontFamily: "Tiny",
  },
  micro: {
    fontFamily: "Tiny",
  },
  subtitle: {
    fontFamily: "Dots",
    fontWeight: 600,
    "text-transform": "uppercase",
  },
};