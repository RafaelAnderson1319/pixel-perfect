import { Scale, Gavel, Users, Globe2 } from "lucide-react";
import chess from "@/assets/chess.png";
import { useReveal } from "@/hooks/use-reveal";

const areas = [
  {
    icon: Scale,
    title: "Civil Law",
    text: "Legal counsel to resolve disputes involving contracts, property rights, inheritance and civil liability, among others.",
  },
  {
    icon: Gavel,
    title: "Criminal Law",
    text: "Legal consulting for property crimes, crimes against life, liberty and honor, among other criminal matters.",
  },
  {
    icon: Users,
    title: "Family Law",
    text: "Legal guidance for family matters such as marriage, divorce, child custody and alimony, among others.",
  },
  {
    icon: Globe2,
    title: "Digital Law",
    text: "Focused on personal data protection, misuse of image, and other issues related to the digital world.",
  },
];

export function PracticeAreas() {
  const title = useReveal();

  return (
    <section id="areas" className="marble-bg relative overflow-hidden py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-6 select-none space-y-1 overflow-hidden"
      >
        {[0, 1, 2, 3].map((i) => (
          <p
            key={i}
            className="outline-word whitespace-nowrap font-serif text-6xl tracking-[0.1em] sm:text-8xl"
            style={{ transform: `translateX(${-14 + i * 9}%)` }}
          >
            PRACTICE PRACTICE
          </p>
        ))}
      </div>

      <img
        src={chess}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1024}
        height={1024}
        className="pointer-events-none absolute -right-20 top-1/2 hidden w-[420px] -translate-y-1/2 lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={title.ref} className={title.className} style={title.style}>
          <h2 className="text-center font-serif text-3xl text-gold sm:text-4xl">Practice Areas</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mr-56 lg:grid-cols-4 xl:mr-72">
          {areas.map((area, i) => (
            <AreaCard key={area.title} area={area} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AreaCard({ area, delay }: { area: (typeof areas)[number]; delay: number }) {
  const reveal = useReveal(delay);
  const Icon = area.icon;

  return (
    <div ref={reveal.ref} className={reveal.className} style={reveal.style}>
      <article className="h-full rounded-3xl border-r-2 border-b-2 border-gold-light bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
        <span className="grid size-12 place-items-center rounded-2xl bg-accent text-gold-dark">
          <Icon className="size-5" />
        </span>
        <h3 className="mt-5 font-serif text-xl text-foreground">{area.title}</h3>
        <p className="mt-3 text-xs leading-relaxed text-foreground/70">{area.text}</p>
      </article>
    </div>
  );
}
