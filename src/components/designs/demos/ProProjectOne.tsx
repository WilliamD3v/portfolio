"use client";

export default function ProProjectOne() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <h1 className="text-lg font-black sm:text-xl">Blue Vision</h1>

          <nav className="flex flex-wrap gap-4 text-sm font-semibold text-slate-300 sm:gap-6 lg:gap-8">
            <a href="#inicio">Início</a>
            <a href="#beneficios">Benefícios</a>
            <a href="#cases">Cases</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="overflow-hidden rounded-[28px] bg-gradient-to-r from-cyan-500 to-blue-700 p-5 sm:rounded-[34px] sm:p-8 lg:rounded-[40px] lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <span className="rounded-full bg-white/15 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white sm:text-xs">
                Design profissional
              </span>

              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-6xl">
                Um projeto mais forte, visual e comercial
              </h2>

              <p className="mt-5 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                Ideal para empresas que querem mais impacto, mais presença e
                maior percepção de valor no digital.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-2xl bg-slate-950 px-6 py-4 text-sm font-black text-white">
                  Solicitar agora
                </button>
                <button className="rounded-2xl border border-white/30 px-6 py-4 text-sm font-black text-white">
                  Explorar projeto
                </button>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[24px] bg-white/10 p-5 backdrop-blur-md sm:rounded-[30px] sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100 sm:text-sm">
                  Resultado
                </p>
                <h3 className="mt-4 text-2xl font-black sm:text-3xl">
                  Mais impacto visual e mais presença comercial
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] bg-white/10 p-5 backdrop-blur-md sm:rounded-[28px] sm:p-6">
                  <p className="text-3xl font-black sm:text-4xl">+89%</p>
                  <p className="mt-2 text-sm text-slate-200">Retenção visual</p>
                </div>
                <div className="rounded-[24px] bg-white/10 p-5 backdrop-blur-md sm:rounded-[28px] sm:p-6">
                  <p className="text-3xl font-black sm:text-4xl">+Valor</p>
                  <p className="mt-2 text-sm text-slate-200">Mais autoridade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Blocos estratégicos",
            "Visual mais impactante",
            "Chamadas mais fortes",
          ].map((item) => (
            <div key={item} className="rounded-[24px] border border-white/10 bg-white/5 p-6 sm:rounded-[30px]">
              <div className="h-12 w-12 rounded-2xl bg-cyan-400" />
              <h3 className="mt-5 text-xl font-black">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Estrutura comercial para apresentar melhor os diferenciais e
                aumentar a confiança do cliente.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="cases" className="bg-white/5 py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-black sm:text-4xl">Cases e apresentação</h3>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-slate-900 p-6 sm:rounded-[32px] sm:p-8">
              <h4 className="text-2xl font-black">Projeto estratégico</h4>
              <p className="mt-4 text-slate-300">
                Demonstração de uma estrutura que conduz o cliente pelo conteúdo
                com mais força visual e melhor hierarquia.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-slate-900 p-6 sm:rounded-[32px] sm:p-8">
              <h4 className="text-2xl font-black">Mais conversão visual</h4>
              <p className="mt-4 text-slate-300">
                Melhor para quem quer vender mais profissionalismo logo no
                primeiro contato.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contato" className="py-10 sm:py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h4 className="text-2xl font-black">Gostou desse projeto?</h4>
            <p className="mt-2 text-slate-300">
              Escolha este modelo ou peça uma versão parecida.
            </p>
          </div>

          <button className="rounded-2xl bg-cyan-400 px-6 py-4 text-sm font-black text-slate-950">
            Quero este modelo
          </button>
        </div>
      </footer>
    </div>
  );
}