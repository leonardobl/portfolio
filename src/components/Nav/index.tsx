import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { Text } from "../Typography/Text";

export const Nav = () => {
  return (
    <nav className={twMerge("menu-nav flex items-center gap-4 md:gap-8")}>
      <NavLink to={"/"}>
        <Text as="span" className="text-[14px] sm:text-base">
          Home
        </Text>
      </NavLink>
      <NavLink to={"/blog"}>
        <Text as="span" className="text-[14px] sm:text-base">
          Blog
        </Text>
      </NavLink>
    </nav>
  );
};
