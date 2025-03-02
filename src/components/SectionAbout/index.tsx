import { CardAbout } from "../CardAbout";
import { Title } from "../Typography/Title";
import { Wrapper } from "../Wrapper";

export const SectionAbout = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex items-center flex-col">
          <CardAbout />
          <div>
            <Title as="h1">Hey</Title>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
