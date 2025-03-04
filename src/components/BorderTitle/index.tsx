import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type BorderTitleProps = ComponentProps<"div">;

export const BorderTitle = ({ className, ...rest }: BorderTitleProps) => {
  return (
    <div
      className={twMerge(
        "w-fit px-10 py-4 border-4 border-custom-brand-100 rounded-tl-[40px] rounded-br-[40px] flex items-center justify-center mx-auto",
        className
      )}
      {...rest}
    />
  );
};
