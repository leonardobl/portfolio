import { Icons } from "@/components/Icons";
import { ComponentProps, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { twMerge } from "tailwind-merge";

type InputSearchProps = ComponentProps<"input">;

export const InputSearch = ({ className, ...rest }: InputSearchProps) => {
  const isSmall = useMediaQuery({ maxWidth: "1280px" });
  const [toggleOpen, setToggleOpen] = useState(!isSmall);

  return (
    <div
      className={twMerge(
        "flex flex-col items-end relative",
        toggleOpen && isSmall && "search-overlay z-10"
      )}
    >
      <div className="relative">
        <div className={twMerge("pr-3 flex justify-end xl:hidden")}>
          {toggleOpen ? (
            <Icons.X
              className="cursor-pointer"
              onClick={() => setToggleOpen(false)}
              iconCircle
              variantCircle="default"
            />
          ) : (
            <Icons.Search
              className="cursor-pointer"
              onClick={() => setToggleOpen(true)}
              variantCircle="transparent"
              iconCircle
              fill="#fff"
            />
          )}
        </div>

        <label
          className={twMerge(
            "xl:relative h-fit w-fit hidden xl:block",
            toggleOpen && "block",
            "absolute z-10 right-0 top-12 xl:top-0"
          )}
        >
          <input
            {...rest}
            className={twMerge(
              "w-52 h-9 bg-white rounded-[24px] text-[14px] outline-none border border-custom-gray-80 pl-4 pr-10 text-black",
              className
            )}
          />
          <Icons.Search className="cursor-pointer absolute top-[50%] translate-y-[-50%] right-4 text-base" />
        </label>
      </div>
    </div>
  );
};
