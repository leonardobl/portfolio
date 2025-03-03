import { Text } from "../Typography/Text";
import { Title } from "../Typography/Title";

export const TechProfile = () => {
  return (
    <div className="bg-custom-gray-100 w-full max-w-[400px] flex flex-col px-10 py-14 gap-4 rounded-[120px]">
      <div className="flex gap-3 items-center">
        <Title as="h2" className="text-custom-brand-100 text-5xl">
          4
        </Title>
        <Text as="p">Linguagens de Programação e Tecnologias Web</Text>
      </div>
      <div className="flex gap-3 items-center">
        <Title as="h2" className="text-custom-brand-100 text-5xl">
          4
        </Title>
        <Text as="p">Bibliotecas e Frameworks Frontend </Text>
      </div>
      <div className="flex gap-3 items-center">
        <Title as="h2" className="text-custom-brand-100 text-5xl">
          4
        </Title>
        <Text as="p">Backend e Infraestrutura</Text>
      </div>{" "}
      <div className="flex gap-3 items-center">
        <Title as="h2" className="text-custom-brand-100 text-5xl">
          3
        </Title>
        <Text as="p">Testes e Qualidade de Código</Text>
      </div>{" "}
      <div className="flex gap-3 items-center">
        <Title as="h2" className="text-custom-brand-100 text-5xl">
          1
        </Title>
        <Text as="p">Desenvolvimento Mobile</Text>
      </div>
      <div className="flex gap-3 items-center">
        <Title as="h2" className="text-custom-brand-100 text-5xl">
          4
        </Title>
        <Text as="p">Anos de experiência</Text>
      </div>
    </div>
  );
};
