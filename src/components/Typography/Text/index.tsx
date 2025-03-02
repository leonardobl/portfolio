import { tv } from "tailwind-variants";
import { TypographBase } from "../base";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type TextProps = PropsWithChildren<{
  as: "p" | "span";
  variant?:
    | "p-ibm"
    | "label-m"
    | "label-l"
    | "logo-m"
    | "media"
    | "code"
    | "menu";

  className?: string;
}>;

const styles = tv({
  base: "text-base font-ubuntu",
  variants: {
    as: {
      p: "",
      span: "",
    },
    variant: {
      "p-ibm": "font-ibm",
      "label-m": "text-[14px] font-medium",
      "label-l": "text-[14px] font-light",
      "logo-m": "font-ibm text-[32px] font-medium",
      menu: "font-ibm text-[24px]",
      media: "font-ibm",
      code: "font-ibm text-[14px]",
    },
  },
});

export const Text = ({
  as,
  className,
  variant = "media",
  ...props
}: TextProps) => {
  return (
    <TypographBase
      as={as}
      {...props}
      className={twMerge(styles({ as, variant }), className)}
    />
  );
};
