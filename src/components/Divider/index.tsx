import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type DividerProps = ComponentProps<"hr">;
export const Divider = ({ className, ...rest }: DividerProps) => {
  return (
    <hr
      className={twMerge("w-full border-custom-gray-60", className)}
      {...rest}
    />
  );
};
