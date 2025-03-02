import { ComponentProps } from "react";
import { Icons } from "../Icons";
import { Text } from "../Typography/Text";
import { BiLogoWhatsapp } from "react-icons/bi";

type SocialMediasProps = ComponentProps<"div">;

export const SocialMedias = (props: SocialMediasProps) => {
  return (
    <div {...props} className="hidden md:flex gap-8 items-center ">
      <a href="#" target="_blank" className="flex items-center gap-2">
        <Icons.Instagram className="text-custom-brand-100 h-6" />
        <Text as="span" variant="media" className="hidden xl:block">
          Instagram
        </Text>
      </a>
      <a href="#" target="_blank" className="flex items-center gap-2">
        <Icons.GitHub className="text-custom-brand-100" />
        <Text as="span" variant="media" className="hidden xl:block">
          Github
        </Text>
      </a>
      <a href="#" target="_blank" className="flex items-center gap-2">
        <BiLogoWhatsapp className="w-6 h-6 text-custom-brand-100" />
        <Text as="span" variant="media" className="hidden xl:block">
          Discord
        </Text>
      </a>
    </div>
  );
};
