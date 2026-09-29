import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { MissionValues } from "@/components/landing/MissionValues";
import { PracticeAreas } from "@/components/landing/PracticeAreas";
import { About } from "@/components/landing/About";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

const title = "Beatriz Caetano | Attorney at Law";
const description =
  "Legal counsel of excellence in Civil, Criminal, Family and Digital Law. Advisory, litigation and preventive practice with over 10 years of experience.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <MissionValues />
        <PracticeAreas />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
