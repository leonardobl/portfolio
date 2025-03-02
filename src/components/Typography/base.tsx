import {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";
import { twMerge } from "tailwind-merge";

type TypographProps<T extends ElementType> = PropsWithChildren<{
  as?: T;
}> &
  ComponentPropsWithoutRef<T>;

export function TypographBase<T extends ElementType = "span">({
  as,
  className,
  ...props
}: TypographProps<T>) {
  const Component = as || "p";

  return (
    <Component
      className={twMerge("", className)}
      {...(props as ComponentPropsWithoutRef<T>)}
    />
  );
}
