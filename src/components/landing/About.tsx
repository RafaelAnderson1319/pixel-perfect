import lawyerAbout from "@/assets/lawyer-about.png";
import bust from "@/assets/bust.png";
import { useReveal } from "@/hooks/use-reveal";

const paragraphs = [
  "Beatriz Caetano lidera a Caetano Advocacia. Profissional altamente experiente e especializada em Direito Civil, atuando na assessoria, contencioso e advocacia preventiva.",
  "Também atua nas áreas de Direito Penal, Direito de Família e Direito Digital, com mais de 10 anos de experiência na área jurídica.",
  "Possui amplo conhecimento e experiência nessas áreas, oferecendo soluções completas e personalizadas para as necessidades jurídicas de seus clientes.",
  "Além disso, mantém-se sempre atualizada sobre novas tendências e mudanças legislativas, garantindo um atendimento de qualidade e eficiente aos seus clientes.",
];

export function About() {
  const media = useReveal();
  const text = useReveal(150);

  return (
    <section id="about" className="marble-bg relative overflow-hidden py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div ref={media.ref} className={media.className} style={media.style}>
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-x-0 bottom-0 h-40 rounded-t-3xl bg-olive/70" />
            <img
              src={bust}
              alt=""
              aria-hidden="true"
              loading="lazy"
              width={768}
              height={1024}
              className="absolute bottom-0 left-0 w-1/2 object-contain"
            />
            <img
              src={lawyerAbout}
              alt="Beatriz Caetano com os braços cruzados"
              loading="lazy"
              width={1024}
              height={1280}
              className="relative ml-auto w-[78%] object-contain"
            />
          </div>
        </div>

        <div ref={text.ref} className={text.className} style={text.style}>
          <h2 className="font-serif text-2xl uppercase tracking-[0.12em] text-gold sm:text-3xl">
            Quem é Beatriz Caetano?
          </h2>
          <div className="mt-7 space-y-5">
            {paragraphs.map((p) => (
              <p key={p} className="text-sm leading-relaxed text-foreground/75">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
