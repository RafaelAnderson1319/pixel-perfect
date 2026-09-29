import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Sobre", href: "#about" },
  { label: "Áreas de atuação", href: "#areas" },
  { label: "Missão e valores", href: "#mission" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-card/70 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="truncate font-serif text-sm tracking-[0.35em] text-gold sm:text-base"
        >
          BEATRIZ CAETANO
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gold transition-colors hover:text-gold-dark"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-gradient-gold px-6 py-2.5 text-sm text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 rounded-full border border-gold-light p-2 text-gold md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/60 bg-card/95 px-5 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-sm text-gold transition-colors hover:bg-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-gradient-gold px-6 py-3 text-center text-sm text-primary-foreground"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
