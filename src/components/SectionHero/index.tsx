import { BiLogoWhatsapp } from "react-icons/bi";
import { CardAbout } from "../CardAbout";
import { Text } from "../Typography/Text";
import { Title } from "../Typography/Title";
import { Wrapper } from "../Wrapper";
import { TechProfile } from "../TechProfile";

export const SectionHero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex items-center flex-col gap-16 xl:grid xl:grid-cols-2 xl:gap-16 lg:py-16">
          <div>
            <CardAbout className="xl:mx-auto" />
          </div>

          <div className="flex items-center flex-col gap-16">
            <div>
              <Title
                as="h1"
                className="text-[32px] md:text-5xl  sm:leading-tight xl:text-[64px]"
              >
                <pre className="font-ibm text-[14px] text-custom-brand-100">
                  &lt;h1&gt;
                </pre>
                Olá, <br />
                Sou <span className="text-custom-brand-100">Leonardo Lima</span>
                ,
                <br />
                Desenvolvo interfaces que transformam experiências digitais.
                <pre className="font-ibm text-[14px] text-custom-brand-100">
                  &lt;/h1&gt;
                </pre>
              </Title>
            </div>

            <div>
              <Text as="p" variant="p-ibm">
                <pre className="font-ibm text-[14px] text-custom-brand-100">
                  &lt;p&gt;
                </pre>
                Sou desenvolvedor frontend e ajudo empresas a crescer criando
                experiências web incríveis. Se você busca um profissional focado
                em entregar soluções eficientes, estou pronto para transformar
                suas ideias em interfaces modernas, responsivas e de alto
                desempenho.
                <pre className="font-ibm text-[14px] text-custom-brand-100">
                  &lt;/p&gt;
                </pre>
              </Text>
            </div>
            <div className="md:w-full">
              <Title as="h2" variant="h2-ibm" className="text-[30px]">
                <a
                  href="https://wa.me/5586995233237"
                  target="_black"
                  className="flex items-center gap-2 text-custom-brand-100"
                >
                  Vamos conversar?{" "}
                  <BiLogoWhatsapp className="w-9 h-9 text-custom-brand-100" />
                </a>
              </Title>
            </div>
          </div>
          <div className="xl:col-span-2">
            <TechProfile />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
