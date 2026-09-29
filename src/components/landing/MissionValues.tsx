import { FileBadge, BookOpenCheck } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  {
    icon: FileBadge,
    title: "Mission",
    text: "To provide legal counsel of excellence to our clients.",
  },
  {
    icon: BookOpenCheck,
    title: "Values",
    text: "Commitment, ethics, innovation, transparency and social responsibility.",
  },
];

export function MissionValues() {
  return (
    <section id="mission" className="marble-bg py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl gap-6 px-5 sm:grid-cols-2 sm:px-8">
        {items.map((item, i) => (
          <Card key={item.title} item={item} delay={i * 120} />
        ))}
      </div>
    </section>
  );
}

function Card({
  item,
  delay,
}: {
  item: (typeof items)[number];
  delay: number;
}) {
  const reveal = useReveal(delay);
  const Icon = item.icon;

  return (
    <div ref={reveal.ref} className={reveal.className} style={reveal.style}>
      <div className="flex h-full items-center gap-5 rounded-3xl border-b-2 border-gold-light bg-card p-6 shadow-card sm:p-7">
        <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-accent text-gold-dark">
          <Icon className="size-6" />
        </span>
        <div className="min-w-0">
          <h3 className="font-serif text-2xl text-gold">{item.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-foreground/75">{item.text}</p>
        </div>
      </div>
    </div>
  );
}
