import { Container, Header, Wrapper } from "@/components";
import { ComponentProps } from "react";

type ILayoutProps = ComponentProps<"div">;

export const Layout = ({ children, ...rest }: ILayoutProps) => {
  return (
    <div className="w-full bg-custom-gray-80" {...rest}>
      <Container>
        <Wrapper>
          <Header />
          {children}
        </Wrapper>
      </Container>
    </div>
  );
};
