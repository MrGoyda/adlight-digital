import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/hero"; // Сейчас создадим эту папку
import { ValueProposition } from "@/components/sections/value-proposition"; // Next.js сам найдет index.tsx
import { Services } from "@/components/sections/services"; // И здесь тоже

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-accent/30">
      <Header />
      <Hero />
      <ValueProposition />
      <Services />
      
      {/* Временные плейсхолдеры для будущих секций */}
      <div id="cases" className="h-screen flex items-center justify-center border-t border-white/5">
        <h2 className="text-3xl text-slate-500 font-heading">Cases Section (Coming Soon)</h2>
      </div>
    </main>
  );
}