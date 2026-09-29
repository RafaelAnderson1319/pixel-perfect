import { ArrowRight, Scale, HeartHandshake } from "lucide-react";
import lawyerHero from "@/assets/lawyer-hero.png";
import columns from "@/assets/columns.png";
import { useReveal } from "@/hooks/use-reveal";

export function Hero() {
  const left = useReveal();
  const right = useReveal(150);

  return (
    <section id="top" className="marble-bg relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <img
        src={columns}
        alt=""
        aria-hidden="true"
        width={768}
        height={1024}
        className="pointer-events-none absolute left-0 top-1/2 z-0 hidden w-[360px] -translate-y-1/2 opacity-40 lg:block"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
        <div ref={left.ref} className={left.className} style={left.style}>
          <div className="lg:pl-16">
            <div className="flex items-center gap-4">
              <span className="h-px flex-1 max-w-14 bg-gold-light" />
              <div className="text-center">
                <h1 className="font-serif text-2xl tracking-[0.28em] text-foreground sm:text-4xl">
                  BEATRIZ CAETANO
                </h1>
                <p className="mt-2 text-[0.6rem] tracking-[0.4em] text-muted-foreground sm:text-xs">
                  ADVOGADA
                </p>
              </div>
              <span className="h-px flex-1 max-w-14 bg-gold-light" />
            </div>

            <h2 className="mt-10 font-serif text-4xl leading-[1.1] text-gold sm:text-5xl xl:text-6xl">
              Um novo caso,
              <br />
              um novo começo.
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-foreground/80 sm:text-base">
              Resolva seus problemas jurídicos com facilidade e eficiência.
            </p>

            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-4 rounded-full bg-gradient-gold py-2 pl-7 pr-2 text-sm text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
            >
              Entre em contato
              <span className="grid size-9 place-items-center rounded-full bg-card text-gold-dark transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="size-4" />
              </span>
            </a>
          </div>
        </div>

        <div ref={right.ref} className={right.className} style={right.style}>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute inset-x-6 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
            <img
              src={lawyerHero}
              alt="Beatriz Caetano, advogada"
              width={1024}
              height={1280}
              className="relative mx-auto w-full max-w-md object-contain [mask-image:linear-gradient(to_bottom,black_78%,transparent)]"
            />

            <div className="absolute bottom-24 -left-2 w-56 animate-float rounded-2xl border-b-2 border-gold-light bg-card/75 p-3 shadow-card backdrop-blur-md sm:-left-6">
              <div className="flex items-center justify-between gap-3">
                <p className="min-w-0 text-[0.68rem] leading-snug text-foreground/80">
                  Resolvendo <span className="font-medium text-foreground">Direito Civil</span>
                </p>
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-accent text-gold-dark">
                  <Scale className="size-4" />
                </span>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 w-56 animate-float-delayed rounded-2xl border-b-2 border-gold-light bg-card/75 p-3 shadow-card backdrop-blur-md sm:left-2">
              <div className="flex items-center justify-between gap-3">
                <p className="min-w-0 text-[0.68rem] leading-snug text-foreground/80">
                  Atuando em casos de <span className="font-medium text-foreground">Direito de Família</span>
                </p>
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-accent text-gold-dark">
                  <HeartHandshake className="size-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
