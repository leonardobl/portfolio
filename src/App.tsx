import React from "react";

export function App() {
  return (
    <div className="bg-dark w-full py-2 px-1.5">
      <div className="container m-auto">
        <div className="flex w-fit m-auto gap-1 mb-2.5 md:hidden">
          <img
            className="hover:cursor-pointer"
            src="/assets/svg/linkedin.svg"
            alt="icone linkedin"
          />
          <img
            className="hover:cursor-pointer"
            src="/assets/svg/github.svg"
            alt="icone githun"
          />
        </div>

        <div className="hidden md:flex container m-auto bg-purple-5 h-4 rounded-lg px-1.5 items-center justify-between mb-6">
          <img
            src="/assets/svg/logo.svg"
            alt="logo"
            className="w-2.5 max-h-2.5 block hf"
          />
          <div className="flex w-fit gap-x-1.5">
            <button className="btn-menu active">Home</button>
            <button className="btn-menu">Sobre mim</button>
            <button className="btn-menu">Portfólio</button>
            <button className="btn-menu">Skills</button>
            <button className="btn-menu">Carreira</button>
            <button className="btn-menu">Recomendações</button>
            <button className="btn-menu">Contato</button>
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <div className="relative">
            <img
              className="absolute "
              src="/assets/svg/figma.svg"
              alt="figma"
            />
            <img className="absolute" src="/assets/svg/react.svg" alt="react" />
            <img
              className="absolute"
              src="/assets/svg/typescript.svg"
              alt="typescript"
            />
            <img
              src="/assets/svg/logo.svg"
              alt="logo"
              className="w-2.5 max-h-2.5 block hf"
            />
            <img src="/assets/img/avatar.png" alt="avatar" />
          </div>

          <div>
            <p className="px-10px py-6px rounded-md bg-purple-10 w-fit mb-1 font-bold text-purple-100">
              👋 Saudações!
            </p>
            <h1 className="font-extrabold text-5xl tracking-wide mb-1 ">
              Leonardo <br />
              Lima
            </h1>
            <p className="text-lg text-withe-50">Front-end developer</p>
          </div>

          <div className="flex items-center gap-1 h-fit">
            <button className="flex align-middle gap-6px text-purple-50 h-fit ">
              Baixar CV{" "}
              <img src="/assets/svg/arrowLineDown.svg" alt="icone seta" />
            </button>
            <button className="flex align-middle gap-6px text-purple-50 border border-purple-50 px-10px py-12px rounded-md h-fit">
              <img src="/assets/svg/whatsapp.svg" alt="icone whatsapp" /> Vamos
              conversar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
