"use client";
 
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
 
const links = [
  { href: "/", label: "Home" },
  { href: "/latest", label: "Latest" },
  { href: "/investigation-pieces", label: "Investigation Pieces" },
  { href: "/features", label: "Features" },
  { href: "/case-files", label: "Case Files" },
];
 
const infoLinks = [
  { href: "/about", label: "About" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];
 
function SearchIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.7}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
      />
    </svg>
  );
}
 
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
 
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
 
  return (
    <header className="sticky top-0 z-50 border-t-2 border-t-red-600 border-b border-b-zinc-800 bg-zinc-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-6">
        {/* Logo and publication label */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-2xl font-bold tracking-tight text-white transition-opacity hover:opacity-80 md:text-3xl"
          >
            theball<span className="text-red-500">.</span>
          </Link>

          <span className="border-l border-zinc-700 pl-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-500 sm:text-xs">
            Satire / Humor
          </span>
        </div>
 
        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active = isActive(link.href);
 
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-[13px] font-semibold uppercase tracking-widest transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-red-500 after:transition-transform after:duration-300 ${
                  active
                    ? "text-white after:scale-x-100"
                    : "text-zinc-400 after:scale-x-0 hover:text-white hover:after:scale-x-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
 
        {/* Desktop right side */}
        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/about"
            className="text-[13px] font-semibold uppercase tracking-widest text-zinc-400 transition-colors hover:text-white"
          >
            About
          </Link>
 
          <div className="h-5 w-px bg-zinc-800" />
 
          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition-colors hover:border-red-500 hover:text-white"
          >
            <SearchIcon />
          </button>
        </div>
 
        {/* Mobile / tablet controls */}
        <div className="flex items-center gap-1 lg:hidden">
          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
          >
            <SearchIcon />
          </button>
 
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.7}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={menuOpen ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"}
              />
            </svg>
          </button>
        </div>
      </div>
 
      {/* Mobile / tablet menu */}
      {menuOpen && (
        <nav className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-zinc-800 bg-zinc-950 lg:hidden">
          <div className="mx-auto max-w-7xl px-5 py-4">
            {links.map((link) => {
              const active = isActive(link.href);
 
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between border-b border-zinc-900 py-4 font-serif text-2xl font-bold tracking-tight transition-colors last:border-b-0 ${
                    active ? "text-red-500" : "text-white hover:text-zinc-300"
                  }`}
                >
                  {link.label}
                  <span className="text-base text-zinc-600">&rarr;</span>
                </Link>
              );
            })}
 
            {/* Information */}
            <div className="mt-4 border-t border-zinc-800 pt-4">
              <p className="pb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-600">
                Information
              </p>
 
              <div className="grid grid-cols-2 gap-x-4">
                {infoLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-3 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}