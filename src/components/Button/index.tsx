import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { If } from "../If";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "default" | "outline" | "bg-white";
  icon?: React.ReactElement<SVGAElement>;
};
export const Button = ({
  variant = "default",
  icon,
  children,
  ...rest
}: ButtonProps) => {
  const ButtonVariant = {
    default: " bg-custom-brand-100 text-custom-gray-80",
    outline: "bg-transparent text-white",
    "bg-white": "text-custom-gray-80 bg-white border-white",
  };
  return (
    <button
      {...rest}
      className={twMerge(
        "font-ubuntu text-xl cursor-pointer h-14 w-fit px-8 flex items-center justify-center rounded-full border-2 border-custom-brand-100 gap-3 relative",
        ButtonVariant[variant]
      )}
    >
      {children}
      <If condition={Boolean(icon)}>{icon}</If>
    </button>
  );
};
