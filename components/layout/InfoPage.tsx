import type { ReactNode } from "react";
import Link from "next/link";
 
import Navbar from "@/components/layout/Navbar";
 
export type InfoSection = {
  /** Used for the #anchor link, e.g. "external-links" */
  id: string;
  title: string;
  content: ReactNode;
};
 
type InfoPageProps = {
  title: string;
  description: string;
  lastUpdated?: string;
  sections: InfoSection[];
  finalNote?: {
    title: string;
    text: string;
  };
  /** Path of the current page, so it is left out of the "More from Theball" row */
  currentPath?: string;
};
 
const infoLinks = [
  { href: "/about", label: "About" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];
 
const pad = (n: number) => String(n).padStart(2, "0");
 
/*
 * Reading styles for the text inside each section.
 * Every class is a single token (no variants split across lines).
 */
const sectionText = [
  "space-y-5 text-base leading-8 text-zinc-400 md:text-lg md:leading-9",
  "marker:text-red-500",
  "[&_strong]:font-semibold [&_strong]:text-white",
  "[&_a]:text-white [&_a]:underline [&_a]:decoration-red-500/60 [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:decoration-red-500",
  "[&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6",
  "[&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6",
].join(" ");
 
export default function InfoPage({
  title,
  description,
  lastUpdated,
  sections,
  finalNote,
  currentPath,
}: InfoPageProps) {
  const otherLinks = infoLinks.filter((link) => link.href !== currentPath);
 
  return (
    <>
      <Navbar />
 
      <main className="bg-zinc-950 text-white">
        {/* Header */}
        <section className="border-b border-zinc-800">
          <div className="mx-auto max-w-7xl px-5 py-14 md:px-6 md:py-24">
            <div className="max-w-4xl">
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
                <span className="h-px w-8 bg-red-500" />
                Theball
              </p>
 
              <h1 className="mt-5 font-serif text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                {title}
              </h1>
 
              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
                {description}
              </p>
 
              {lastUpdated && (
                <p className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-zinc-500">
                  <span className="h-1 w-1 rounded-full bg-red-500" />
                  Last updated: {lastUpdated}
                </p>
              )}
            </div>
          </div>
        </section>
 
        {/* Body */}
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-6 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[230px_1fr] lg:gap-20">
            {/* Table of contents (desktop only) */}
            <aside className="hidden lg:block">
              <nav
                aria-label="On this page"
                className="sticky top-28 border-l border-zinc-800 pl-5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  On this page
                </p>
 
                <ol className="mt-5 space-y-3.5">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="group flex gap-3 text-sm leading-5 text-zinc-400 transition-colors hover:text-white"
                      >
                        <span className="font-semibold text-zinc-600 transition-colors group-hover:text-red-500">
                          {pad(index + 1)}
                        </span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
 
            {/* Content */}
            <div className="min-w-0 max-w-3xl">
              <div className="space-y-14 md:space-y-16">
                {sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 border-t border-zinc-800 pt-10 first:border-t-0 first:pt-0"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
                      {pad(index + 1)}
                    </p>
 
                    <h2 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                      {section.title}
                    </h2>
 
                    <div className={`mt-6 ${sectionText}`}>
                      {section.content}
                    </div>
                  </section>
                ))}
              </div>
 
              {/* Final note */}
              {finalNote && (
                <div className="mt-16 border border-zinc-800 border-l-red-500 bg-zinc-900/40 p-6 md:mt-20 md:border-l-2 md:p-8">
                  <h2 className="font-serif text-xl font-bold text-white md:text-2xl">
                    {finalNote.title}
                  </h2>
 
                  <p className="mt-4 text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
                    {finalNote.text}
                  </p>
                </div>
              )}
 
              {/* Other info pages */}
              <div className="mt-16 border-t border-zinc-800 pt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  More from Theball
                </p>
 
                <div className="mt-4 flex flex-wrap gap-3">
                  {otherLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="border border-zinc-700 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-zinc-300 transition-colors hover:border-red-500 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
 