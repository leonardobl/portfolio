import { Divider } from "../Divider";
import { InputSearch } from "../FormFields/Inputs/InputSearch";
import { Nav } from "../Nav";
import { SocialMedias } from "../SocialMedias";
import { Text } from "../Typography/Text";

export const Header = () => {
  return (
    <header className="px-3 sm:px-6 fixed w-full max-w-screen xl:relative bg-custom-gray-80 left-0 right-0 top-0 z-10">
      <div className="flex items-center justify-between h-[68px] md:h-20 xl:h-[170px]">
        <Text
          as="p"
          variant="media"
          className="text-custom-brand-100 md:text-2xl"
        >
          &lt;Leonardo Lima/&gt;{" "}
        </Text>
        <Nav />
        <InputSearch />
        <SocialMedias />
      </div>
      <Divider />
    </header>
  );
};
