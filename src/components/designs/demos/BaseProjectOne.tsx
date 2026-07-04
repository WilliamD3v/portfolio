"use client";

export default function BaseProjectOne() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <h1 className="text-lg font-black sm:text-xl">Studio Base</h1>

          <nav className="flex flex-wrap gap-4 text-sm font-semibold text-slate-600 sm:gap-6 lg:gap-8">
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <section
        id="inicio"
        className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-16"
      >
        <div className="flex flex-col justify-center">
          <span className="w-fit rounded-full bg-slate-100 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-700 sm:text-xs">
            Design base
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-6xl">
            Presença profissional com simplicidade e clareza
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Um projeto pensado para negócios que precisam se apresentar bem, com
            visual limpo, leitura fácil e navegação objetiva.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-2xl bg-slate-950 px-6 py-4 text-sm font-black text-white">
              Solicitar orçamento
            </button>
            <button className="rounded-2xl border border-slate-300 px-6 py-4 text-sm font-black">
              Ver serviços
            </button>
          </div>
        </div>

        <div className="rounded-[24px] bg-slate-100 p-4 sm:rounded-[28px] sm:p-6 lg:rounded-[34px] lg:p-8">
          <div className="grid gap-4">
            <div className="rounded-[20px] bg-white p-5 shadow-sm sm:rounded-[24px] sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
                Projeto
              </p>
              <h3 className="mt-4 text-2xl font-black sm:text-3xl">
                Estrutura elegante e funcional
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Ideal para quem quer começar com um site bonito e profissional.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-[20px] bg-white p-5 shadow-sm sm:rounded-[24px] sm:p-6">
                <p className="text-2xl font-black sm:text-3xl">100%</p>
                <p className="mt-2 text-sm text-slate-600">Responsivo</p>
              </div>
              <div className="rounded-[20px] bg-white p-5 shadow-sm sm:rounded-[24px] sm:p-6">
                <p className="text-2xl font-black sm:text-3xl">+Clareza</p>
                <p className="mt-2 text-sm text-slate-600">Boa navegação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-slate-50 py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-black sm:text-4xl">Serviços</h3>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {["Landing Page", "Site Institucional", "Página Comercial"].map(
              (item) => (
                <div key={item} className="rounded-[24px] bg-white p-6 shadow-sm sm:rounded-[28px]">
                  <div className="h-14 w-14 rounded-2xl bg-slate-950" />
                  <h4 className="mt-5 text-xl font-black">{item}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Estrutura limpa e profissional para apresentar melhor o seu
                    negócio.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-16">
        <div>
          <h3 className="text-3xl font-black sm:text-4xl">Sobre o projeto</h3>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Esse design foi criado para transmitir confiança, organização e
            presença digital profissional sem excesso visual.
          </p>
        </div>

        <div className="mt-8 rounded-[24px] border border-slate-200 p-6 sm:rounded-[30px] sm:p-8 lg:mt-0">
          <h4 className="text-2xl font-black">Diferenciais</h4>
          <ul className="mt-5 space-y-4 text-slate-600">
            <li>• Layout limpo</li>
            <li>• Navegação objetiva</li>
            <li>• Excelente leitura</li>
            <li>• Boa experiência em desktop e mobile</li>
          </ul>
        </div>
      </section>

      <footer id="contato" className="bg-slate-950 py-10 text-white sm:py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h4 className="text-2xl font-black">Pronto para começar?</h4>
            <p className="mt-2 text-slate-300">
              Solicite esse modelo para o seu projeto.
            </p>
          </div>

          <button className="rounded-2xl bg-white px-6 py-4 text-sm font-black text-slate-950">
            Quero este modelo
          </button>
        </div>
      </footer>
    </div>
  );
}