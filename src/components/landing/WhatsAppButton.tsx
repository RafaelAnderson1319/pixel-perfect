import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511998804921"
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid size-14 place-items-center rounded-full bg-gradient-gold text-primary-foreground shadow-card transition-transform hover:-translate-y-1"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
