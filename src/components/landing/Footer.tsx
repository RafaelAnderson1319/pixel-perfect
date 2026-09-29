export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-5 text-center sm:px-8">
        <p className="font-serif text-sm tracking-[0.35em] text-gold">BEATRIZ CAETANO</p>
        <p className="text-xs text-muted-foreground">
          Caetano Advocacia — Direito Civil, Penal, de Família e Digital.
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Caetano Advocacia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
