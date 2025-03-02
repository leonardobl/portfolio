import { ReactElement } from "react";

type IfProps = {
  condition: boolean;
  children?: ReactElement | ReactElement[];
};
export const If = ({ children, condition }: IfProps) => {
  return condition ? <>{children}</> : null;
};
