import styled, { StyledInterface, InterpolationFunction } from "styled-components";
import {
  compose,
  flexbox,
  FlexboxProps,
  space,
  SpaceProps,
  position,
  PositionProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  overflow,
  OverflowProps,
  border,
  BorderProps,
} from "styled-system";

export type BaseStyledProps = SpaceProps &
  FlexboxProps &
  PositionProps &
  ColorProps &
  LayoutProps &
  BorderProps &
  OverflowProps & {
    /**
     * The columnGap CSS property sets the size of the gap (gutter) between an element's grid columns.
     */
    columnGap?: string | number;
    /**
     * The rowGap CSS property sets the size of the gap (gutter) between an element's grid rows.
     */
    rowGap?: string | number;
    color?: string;
  };

export const baseStyles: InterpolationFunction<unknown> = compose(
  flexbox,
  space,
  position,
  color,
  layout,
  overflow,
  border,
);