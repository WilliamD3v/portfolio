"use client";

export default function PremiumProjectOne() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.28),transparent_30%),radial-gradient(circle_at_right,rgba(34,211,238,0.22),transparent_26%)]" />

        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h1 className="text-lg font-black sm:text-xl">Luxury Interface</h1>

            <nav className="flex flex-wrap gap-4 text-sm font-semibold text-slate-300 sm:gap-6 lg:gap-8">
              <a href="#inicio">Home</a>
              <a href="#experiencia">Experiência</a>
              <a href="#destaques">Destaques</a>
              <a href="#contato">Contato</a>
            </nav>
          </header>

          <div id="inicio" className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <div>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-fuchsia-200 sm:text-xs">
                Premium experience
              </span>

              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-7xl lg:leading-[1.05]">
                Design sofisticado para marcas que querem impressionar
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Um projeto premium com estética refinada, maior presença de marca
                e uma navegação pensada para encantar visualmente.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-2xl bg-fuchsia-500 px-6 py-4 text-sm font-black text-white">
                  Solicitar projeto
                </button>
                <button className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-black text-white">
                  Explorar modelo
                </button>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-md sm:rounded-[34px] sm:p-6">
                <div className="h-32 rounded-[22px] bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/20 sm:h-40 sm:rounded-[28px]" />
                <h3 className="mt-5 text-2xl font-black">
                  Estrutura premium e memorável
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Para marcas que querem se posicionar acima da média.
                </p>
              </div>
            </div>
          </div>

          <div id="experiencia" className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:mt-12">
            {[
              "Apresentação forte",
              "Blocos refinados",
              "Maior autoridade visual",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:rounded-[30px]"
              >
                <div className="h-12 w-12 rounded-2xl bg-fuchsia-500/70" />
                <h3 className="mt-5 text-xl font-black">{item}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Um componente real de um projeto premium, pensado para
                  impressionar o cliente logo no primeiro contato.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="destaques" className="border-y border-white/10 bg-white/5 py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="rounded-[24px] border border-white/10 bg-slate-950/50 p-6 sm:rounded-[32px] sm:p-8">
              <h3 className="text-2xl font-black sm:text-3xl">Experiência visual</h3>
              <p className="mt-4 text-slate-300">
                Um design premium não entrega apenas beleza. Ele entrega
                posicionamento, percepção e autoridade.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-slate-950/50 p-6 sm:rounded-[32px] sm:p-8">
              <h3 className="text-2xl font-black sm:text-3xl">Nível de entrega</h3>
              <p className="mt-4 text-slate-300">
                Ideal para marcas, empresas e profissionais que querem um visual
                mais sofisticado e memorável.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contato" className="py-10 sm:py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h4 className="text-2xl font-black">Quer esse padrão no seu projeto?</h4>
            <p className="mt-2 text-slate-300">
              Solicite esse design ou peça uma versão exclusiva.
            </p>
          </div>

          <button className="rounded-2xl bg-fuchsia-500 px-6 py-4 text-sm font-black text-white">
            Quero este modelo
          </button>
        </div>
      </footer>
    </div>
  );
}