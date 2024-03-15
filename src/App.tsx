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

        <div className="hidden md:flex container m-auto bg-purple-5 h-4 rounded-lg px-1.5 items-center justify-between">
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
      </div>
    </div>
  );
}
