import styled from "styled-components";
import Text, { TextProps } from "../Text";
import { baseStyles, BaseStyledProps } from "../styled";
import React, { forwardRef } from "react";

export type ButtonProps = BaseStyledProps &
  TextProps &
  React.RefAttributes<HTMLButtonElement> &
  Partial<{
    children: React.ReactNode;
    onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
    style?: React.CSSProperties;
    tabIndex?: number;
    id?: string;
    noInvert?: boolean;
    title?: string;
  }>;

const Button = styled.button.attrs<ButtonProps, ButtonProps>({
  display: "flex",
})`
  ${baseStyles};
  min-width: 44px;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  font-size: 1em;
  min-height: 44px;
  width: min-content;
  ${(p) => p.theme.transition()}
  &:focus, &focus-within, &focus-visible {
    ${(p) =>
      p.noInvert
        ? `
        filter: drop-shadow(0.3rem 0px 0px ${p.theme.colors.neutral.c100});
    `
        : `
    filter: invert(1)
    drop-shadow(0.3rem 0px 0px ${p.theme.colors.primary.c80});
    `}
  }
`;

const ButtonComponent = forwardRef(
  (
    {
      children,
      tabIndex,
      fontFamily,
      fontSize,
      variant,
      textAlign,
      fontWeight,
      lineHeight,
      textTransform,
      textOverflow,
      uppercase,
      whiteSpace,
      color,
      bg = "transparent",
      ...props
    }: ButtonProps,
    ref
  ) => (
    <Button tabIndex={tabIndex} ref={ref} bg={bg} {...props}>
      <Text
        fontFamily={fontFamily}
        fontSize={fontSize}
        variant={variant}
        textAlign={textAlign}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
        textTransform={textTransform}
        textOverflow={textOverflow}
        uppercase={uppercase}
        whiteSpace={whiteSpace}
        color={color}
      >
        {children}
      </Text>
    </Button>
  )
);

ButtonComponent.displayName = "ButtonComponent";

export default ButtonComponent;
