import { tv } from "tailwind-variants";
import { TypographBase } from "../base";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type TitleProps = PropsWithChildren<{
  as: "h1" | "h2";
  variant?: "h2-ibm" | "big" | "number";
  className?: string;
}>;

const styles = tv({
  base: "",
  variants: {
    as: {
      h1: "text-[64px] font-ubuntu",
      h2: "text-[32px] font-ubuntu",
    },
    variant: {
      "h2-ibm": "font-ibm font-medium",
      big: "text-[117px]",
      number: "font-ibm text-5xl font-medium",
    },
  },
});

export const Title = ({ as, className, variant, ...props }: TitleProps) => {
  return (
    <TypographBase
      as={as}
      {...props}
      className={twMerge(styles({ as, variant }), "text-", className)}
    />
  );
};
