import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "ADLight Digital | Веб-разработка и Реклама",
  description: "Создание сайтов на Next.js и настройка Google Ads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-background font-sans text-slate-100 antialiased",
        inter.variable, 
        outfit.variable
      )}>
        {children}
      </body>
    </html>
  );
}