import { useState } from "react";
import { toast } from "sonner";
import { useReveal } from "@/hooks/use-reveal";

export function Contact() {
  const heading = useReveal();
  const panel = useReveal(120);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      toast.error("Please fill in your name, phone and email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success("Message sent. We will get back to you shortly.");
    setForm({ name: "", phone: "", email: "" });
  }

  return (
    <section
      id="contact"
      className="topo-bg relative overflow-hidden rounded-t-[60px] pt-16 pb-20 sm:pt-24"
    >
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div ref={heading.ref} className={heading.className} style={heading.style}>
          <div className="relative text-center">
            <span
              aria-hidden="true"
              className="outline-word pointer-events-none absolute inset-x-0 -top-6 select-none font-serif text-6xl tracking-[0.08em] sm:text-8xl"
            >
              Contact
            </span>
            <h2 className="relative font-serif text-4xl text-gold sm:text-5xl">Get in touch</h2>
          </div>
        </div>

        <div ref={panel.ref} className={panel.className} style={panel.style}>
          <div className="mt-12 grid gap-8 rounded-[32px] bg-card p-6 shadow-soft sm:p-10 lg:grid-cols-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Field
                label="Name"
                type="text"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
              />
              <Field
                label="Phone"
                type="tel"
                value={form.phone}
                onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
              />
              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-gradient-gold py-3.5 text-sm text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
              >
                Send message
              </button>
            </form>

            <div className="rounded-3xl border-x-2 border-b-2 border-gold-light bg-card p-6 sm:p-8">
              <dl className="space-y-6">
                <div>
                  <dt className="font-serif text-lg text-gold">Business hours</dt>
                  <dd className="mt-1 text-sm text-foreground">Monday to Friday: 09:00–18:00</dd>
                </div>
                <div>
                  <dt className="font-serif text-lg text-gold">Email</dt>
                  <dd className="mt-1 break-all text-sm">
                    <a
                      href="mailto:atendimento@escritoriocaetanoadvocacia.com"
                      className="text-foreground underline decoration-gold-light underline-offset-4 transition-colors hover:text-gold-dark"
                    >
                      atendimento@escritoriocaetanoadvocacia.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-serif text-lg text-gold">WhatsApp</dt>
                  <dd className="mt-1 text-sm">
                    <a
                      href="https://wa.me/5511998804921"
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground underline decoration-gold-light underline-offset-4 transition-colors hover:text-gold-dark"
                    >
                      (11) 99880-4921
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type,
  value,
  onChange,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`${label}:`}
        className="w-full rounded-xl bg-input px-4 py-3.5 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-gold-light"
      />
    </label>
  );
}
