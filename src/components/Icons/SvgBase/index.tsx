import { ComponentProps, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

export interface ISvgBaseProps extends ComponentProps<"svg"> {
  iconCircle?: boolean;
  containerCircleClass?: string;
  variantCircle?: "default" | "green" | "transparent";
  onClick?: (event: MouseEvent<SVGSVGElement | HTMLDivElement>) => void;
}

const circleStyles = tv({
  base: "rounded-full flex items-center justify-center w-8 h-8 border border-custom-gray-80 cursor-pointer",
  variants: {
    variantCircle: {
      default: "bg-white",
      green: "bg-custom-brand-80",
      transparent: "bg-transparent border-transparent",
    },
  },
});

const svgStyles = tv({
  base: "",
  variants: {
    icon: {
      default: "brightness-25 saturate-200",
      green: "custom-filter-gray-80",
      transparent: "",
    },
  },
});

export const SvgBase = ({
  iconCircle,
  variantCircle,
  containerCircleClass,
  className,
  onClick,
  ...rest
}: ISvgBaseProps) => {
  const svgElement = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge(svgStyles({ icon: variantCircle }), className)}
      {...rest}
      onClick={!iconCircle ? onClick : undefined}
    />
  );

  return iconCircle ? (
    <div
      className={twMerge(circleStyles({ variantCircle }), containerCircleClass)}
      onClick={onClick}
    >
      {svgElement}
    </div>
  ) : (
    svgElement
  );
};
