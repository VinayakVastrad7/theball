import Link from "next/link";
 
const exploreLinks = [
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
  {href:"/contact",label:"Contact"},
];
 
function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-red-500">
        <span className="h-px w-6 bg-red-500" />
        {title}
      </p>
 
      <nav className="mt-5 flex flex-col gap-3.5">
        {items.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="w-fit text-sm text-zinc-400 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
 
export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-14 md:px-6 md:pt-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-serif text-3xl font-bold tracking-tight text-white transition-opacity hover:opacity-80 md:text-4xl"
            >
              theball<span className="text-red-500">.</span>
            </Link>
 
            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400 md:text-base">
              Football, tactics, analysis, satire and stories from the strange
              side of the beautiful game.
            </p>
          </div>
 
          <FooterColumn title="Explore" items={exploreLinks} />
          <FooterColumn title="Information" items={infoLinks} />
        </div>
 
        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-zinc-900 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Theball. All rights reserved.
          </p>
 
          <a
            href="#top"
            className="w-fit text-xs font-semibold uppercase tracking-widest text-zinc-500 transition-colors hover:text-red-500"
          >
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
 