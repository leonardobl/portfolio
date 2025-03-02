import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type WrapperProps = ComponentProps<"div">;

export const Wrapper = ({ className, ...rest }: WrapperProps) => {
  return (
    <div
      className={twMerge("w-full max-w-[1664px] mx-auto py-16", className)}
      {...rest}
    />
  );
};
