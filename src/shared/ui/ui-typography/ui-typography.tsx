import { ComponentProps, ElementType, ReactNode } from "react";
import clsx from "clsx";

import s from "./ui-typography.module.scss";

export type TTypographyVariants = "h1" | "h2" | "body1" | "body2";

export type TTypographyOwnProps<E extends ElementType = ElementType> = {
  variant?: TTypographyVariants;
  color?: "blue" | "black-blue" | "pink" | "indigo-blue";
  weight?: "400" | "700";
  children?: ReactNode;
  className?: string;
  as?: E;
};

export type TTypographyProps<E extends ElementType> = TTypographyOwnProps<E> &
  Omit<ComponentProps<E>, keyof TTypographyOwnProps>;

const defaultElement = "p";

export function UiTypography<E extends ElementType = typeof defaultElement>({
  variant = "body1",
  color = "black-blue",
  weight,
  children,
  className,
  as,
  ...otherProps
}: TTypographyProps<E>) {
  const fontWeightMapper = {
    "400": "weight-400",
    "500": "weight-500",
    "600": "weight-600",
    "700": "weight-700",
  };

  const classes = clsx(
    s.root,
    s[variant],
    s[color],
    weight && s[fontWeightMapper[weight]],
    className,
  );
  const TagName = as || defaultElement;

  return (
    <TagName className={classes} {...otherProps}>
      {children}
    </TagName>
  );
}
