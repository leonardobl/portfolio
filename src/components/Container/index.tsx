import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = ComponentProps<"div">;

export const Container = ({ className, ...rest }: ContainerProps) => {
  return (
    <div
      className={twMerge(
        "mx-auto w-full max-w-[1920px] min-h-dvh px-6 md:px-14 xl:px-32 relative pt-20 xl:pt-0",
        className
      )}
      {...rest}
    />
  );
};
