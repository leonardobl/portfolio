import { BorderTitle } from "../BorderTitle";
import { Title } from "../Typography/Title";
import { Wrapper } from "../Wrapper";

export const SectionAbout = () => {
  return (
    <div className="wrapper-section-about">
      <Wrapper>
        <div className="wrapper-section-about">
          <div>
            <BorderTitle>
              <Title as="h1" className="text-[32px]">
                Sobre Mim
              </Title>
            </BorderTitle>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
