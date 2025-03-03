import { Button } from "../Button";
import { Icons } from "../Icons";
import { Tag } from "../Tag";
import { Text } from "../Typography/Text";
import { Title } from "../Typography/Title";

export const CardAbout = () => {
  return (
    <div className="w-full max-w-80 border-4 rounded-tl-[160px] rounded-br-[160px] border-white card-about py-14 px-6 flex flex-col gap-8 items-center">
      <div>
        <div className="w-fit mx-auto mb-4">
          <img
            src="/assets/img/avatar.jpeg"
            alt="avatar"
            className="rounded-full block h-24 border-2 border-custom-brand-100"
          />
        </div>
        <Title as="h2" variant="h2-ibm" className="text-center">
          Leonardo Lima
        </Title>
        <Text as="p" variant="code" className="text-center">
          Desenvolvedor Front-End
        </Text>
      </div>

      <div className="flex flex-col item gap-4">
        <Text
          as="p"
          variant="p-ibm"
          className="w-fit flex items-center gap-3 text-[14px]"
        >
          <Icons.Mail className="text-custom-brand-100" />
          leonardo.b.lima1@gmail.com
        </Text>
        <Text
          as="p"
          variant="p-ibm"
          className="flex gap-3 items-center text-[14px]"
        >
          <Icons.Pin className="text-custom-brand-100" />
          Teresina-PI
        </Text>
        <Text
          as="p"
          variant="p-ibm"
          className="flex gap-3 items-center text-[14px]"
        >
          <Icons.Briefcase className="text-custom-brand-100" />
          Front-End / Freelancer
        </Text>
        <Text
          as="p"
          variant="p-ibm"
          className="flex gap-3 items-center text-[14px]"
        >
          <Icons.Link className="text-custom-brand-100" />
          www.leonardolima.dev.br
        </Text>

        <div className="flex gap-4 flex-wrap justify-center ">
          <Tag text="HTML" />
          <Tag text="CSS" />
          <Tag text="JS" />
          <Tag text="TYPESCRIPT" />
          <Tag text="REACT" />
          <Tag text="NEXT.JS" />
          <Tag text="TAILWINDCSS" />
          <Tag text="STYLED-COMPONENTS" />
          <Tag text="NODEJS" />
          <Tag text="DOCKER" />
          <Tag text="JEST" />
          <Tag text="CYPRESS" />
          <Tag text="REACT NATIVE" />
          <Tag text="SQL" />
          <Tag text="NOSQL" />
          <Tag text="REACT TESTING LIBRARY" />
          <Tag text="GRAPHQL" />
        </div>
      </div>

      <div>
        <Button variant="bg-white" icon={<Icons.Download />}>
          Download CV
        </Button>
      </div>
    </div>
  );
};
