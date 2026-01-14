import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/hero"; // Сейчас создадим эту папку
import { ValueProposition } from "@/components/sections/value-proposition"; // Next.js сам найдет index.tsx
import { Services } from "@/components/sections/services"; // И здесь тоже
import { EcosystemSection } from "@/components/sections/ecosystem";
import { ProcessSection } from "@/components/sections/process";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-accent/30">
      <Header />
      <Hero />
      <ValueProposition />
      <Services />
      <EcosystemSection />
      <ProcessSection />
      
    </main>
  );
}