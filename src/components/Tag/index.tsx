import { ComponentProps } from "react";
import { Text } from "../Typography/Text";

interface ITagProps extends ComponentProps<"div"> {
  text: string;
}
export const Tag = ({ text, ...rest }: ITagProps) => {
  return (
    <div
      {...rest}
      className="bg-custom-brand-100 rounded-full h-[18px] px-2 text-custom-gray-80 w-fit flex items-center justify-center"
    >
      <Text as="span" variant="code">
        {text}
      </Text>
    </div>
  );
};
