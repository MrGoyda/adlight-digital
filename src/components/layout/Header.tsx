"use client"; // Добавим, так как мы используем хуки или интерактив (в будущем)
import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation.data";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-background/60 backdrop-blur-md transition-all" id="main-header">
      <div className="container-width flex h-20 items-center justify-between">
        
        {/* 1. Логотип */}
        <Link 
          href="/" 
          className="font-heading text-2xl font-bold tracking-tight text-primary transition-opacity hover:opacity-80"
        >
          ADLight <span className="text-slate-100">Digital</span>
        </Link>

        {/* 2. Навигация (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 3. Кнопка CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
          >
            Обсудить проект
          </Link>
          
          <button className="md:hidden text-slate-300 hover:text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>

      </div>
    </header>
  );
}