import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sayan Das | Portfolio",
  description: "Full Stack Developer | Backend Engineer | Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 antialiased"
        )}
      >
        {/* Navbar */}
        <header className="sticky top-0 z-50 backdrop-blur bg-zinc-50/60 dark:bg-zinc-950/60 border-b border-zinc-200 dark:border-zinc-800">
          <nav className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
            <a href="#home" className="font-semibold text-lg">
              Sayan Das
            </a>
            <div className="hidden md:flex gap-6 text-sm font-medium">
              <a href="#about" className="hover:text-indigo-500">
                About
              </a>
              <a href="#experience" className="hover:text-indigo-500">
                Experience
              </a>
              <a href="#projects" className="hover:text-indigo-500">
                Projects
              </a>
              <a href="#skills" className="hover:text-indigo-500">
                Skills
              </a>
              <a href="#contact" className="hover:text-indigo-500">
                Contact
              </a>
            </div>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-12">{children}</main>

        <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-800 text-center py-8 text-sm text-zinc-500">
          © {new Date().getFullYear()} Sayan Das. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
