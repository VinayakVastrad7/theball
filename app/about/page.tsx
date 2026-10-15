
import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Theball, an independent football publication exploring fictional stories, satire, investigations, ideas, and the strange side of the beautiful game.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About | Theball",
    description:
      "Discover Theball's fictional football stories, satirical investigations, commentary, and the strange side of the beautiful game.",
    url: "https://theball.lol/about",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About | Theball",
    description:
      "Discover Theball's fictional football stories, satirical investigations, commentary, and the strange side of the beautiful game.",
  },
};

const readingLinks = [
  { href: "/latest", label: "Latest" },
  { href: "/features", label: "Features" },
  { href: "/investigation-pieces", label: "Investigation Pieces" },
  { href: "/case-files", label: "Case Files" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-zinc-950 text-white">
        {/* Hero */}
        <section className="border-b border-zinc-800">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-28">
            <div className="max-w-5xl">
              <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
                <span className="h-px w-8 bg-red-500" />
                About Theball
              </p>

              <h1 className="font-serif text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-8xl">
                Stories worth
                <br />
                <span className="text-zinc-500">
                  looking twice at<span className="text-red-500">.</span>
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
                Theball is an independent football publication exploring
                fictional stories, unusual ideas, satirical investigations,
                observations, and the occasional complete absurdity.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
              <span className="h-px w-12 bg-zinc-700" />
              <span>Independent</span>
              <span className="h-1 w-1 rounded-full bg-red-500" />
              <span>Experimental</span>
              <span className="h-1 w-1 rounded-full bg-red-500" />
              <span>Satirical</span>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
                01
              </p>

              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight md:text-5xl">
                What is Theball?
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-zinc-400 md:text-lg md:leading-9">
              <p>
                Theball is an independent football publication created to
                experiment with storytelling, satire, parody, and commentary
                about the world surrounding the beautiful game.
              </p>

              <p>
                Our stories explore football culture, clubs, players, money,
                power, politics, media, and the many strange things that happen
                around the sport. Some ideas are inspired by real-world
                conversations and circumstances; others begin with an entirely
                imaginary premise.
              </p>

              <p>
                The common thread is simple: we want to make things that are
                interesting enough to stop you scrolling, make you think, or
                make you laugh.
              </p>
            </div>
          </div>
        </section>

        {/* Fiction and satire notice */}
        <section className="border-y border-red-900/50 bg-red-950/20">
          <div className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-16">
            <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-8">
              <div className="flex h-12 w-12 items-center justify-center border border-red-800 text-red-500">
                <span className="font-serif text-2xl font-bold">!</span>
              </div>

              <div className="max-w-4xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
                  A note on our stories
                </p>

                <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight text-white md:text-4xl">
                  Fiction inspired by the real world.
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-zinc-300 md:text-base md:leading-8">
                  <p>
                    All fictional stories, characters, scenarios, and
                    investigations published by Theball are works of
                    imagination created for entertainment, satire, parody, or
                    commentary. They should not be interpreted as factual
                    reporting or evidence that an alleged event actually
                    occurred.
                  </p>

                  <p>
                    Our fiction may draw inspiration from real-world football
                    clubs, players, managers, public figures, organisations,
                    events, controversies, statements, and broader social or
                    political circumstances. Such references may be
                    exaggerated, reimagined, combined with invented details,
                    or used to make a satirical point.
                  </p>

                  <p>
                    A recognisable name, resemblance, setting, or real-world
                    reference does not mean that a fictional scenario is
                    accurate or that the people or organisations mentioned
                    participated in the events described. Any invented
                    dialogue, allegations, evidence, documents, or
                    investigative narratives are part of the fictional work
                    unless explicitly identified and substantiated as factual.
                  </p>

                  <p>
                    Any resemblance to actual events or circumstances beyond
                    the specific references intended for satire or commentary
                    may be coincidental. Readers should consider the article's
                    context and any accompanying satire or fiction notice
                    before drawing conclusions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="border-b border-zinc-800 bg-zinc-900/30">
          <div className="mx-auto max-w-5xl px-5 py-16 text-center md:px-6 md:py-28">
            <span
              aria-hidden="true"
              className="block font-serif text-7xl leading-none text-red-500 md:text-8xl"
            >
              &ldquo;
            </span>

            <p className="mt-2 font-serif text-3xl font-bold leading-tight text-zinc-100 md:text-5xl md:leading-tight">
              Not everything needs to be important.
              <br />
              It just needs to be worth reading.
            </p>
          </div>
        </section>

        {/* Sections */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-24">
          <div className="grid gap-px overflow-hidden border border-zinc-800 bg-zinc-800 md:grid-cols-2">
            {/* Investigation Pieces */}
            <div className="group bg-zinc-950 p-7 transition-colors hover:bg-zinc-900/60 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
                02
              </p>

              <h2 className="mt-4 font-serif text-2xl font-bold tracking-tight md:text-3xl">
                Investigation Pieces
              </h2>

              <p className="mt-5 text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
                Fictional investigations written in the style of serious
                journalism. They may explore strange events, suspicious
                circumstances, invented evidence, questionable motives, or
                scenarios that sound almost believable.
              </p>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                These are creative works, not reports of actual investigations.
                Real-world references may be used for satire, parody, or
                commentary.
              </p>

              <Link
                href="/investigation-pieces"
                className="mt-6 inline-block text-xs font-semibold uppercase tracking-widest text-zinc-400 transition-colors group-hover:text-red-500"
              >
                Read Investigation Pieces &rarr;
              </Link>
            </div>

            {/* Case Files */}
            <div className="group bg-zinc-950 p-7 transition-colors hover:bg-zinc-900/60 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
                03
              </p>

              <h2 className="mt-4 font-serif text-2xl font-bold tracking-tight md:text-3xl">
                Case Files
              </h2>

              <p className="mt-5 text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
                Ongoing fictional investigations told across multiple
                articles. Each case develops over time, introducing new
                characters, invented evidence, unexpected twists, and
                occasionally more questions than answers.
              </p>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                Case Files form part of Theball's fictional storytelling
                universe. They should not be treated as real investigations,
                verified allegations, or factual accounts.
              </p>

              <Link
                href="/case-files"
                className="mt-6 inline-block text-xs font-semibold uppercase tracking-widest text-zinc-400 transition-colors group-hover:text-red-500"
              >
                Open the Case Files &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Editorial approach */}
        <section className="border-t border-zinc-800">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-24">
            <div className="max-w-3xl">
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
                <span className="h-px w-8 bg-red-500" />
                04 · Editorial approach
              </p>

              <h2 className="mt-5 font-serif text-3xl font-bold tracking-tight md:text-5xl md:leading-[1.1]">
                Serious when it needs to be.
                <br />
                <span className="text-zinc-500">
                  Ridiculous when it should be.
                </span>
              </h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-zinc-400 md:text-lg md:leading-9">
                <p>
                  Theball explores the space between football commentary,
                  cultural observation, fictional storytelling, and satire.
                  We use humour, exaggeration, and imaginary scenarios to
                  examine the sport and the world around it.
                </p>

                <p>
                  Our work may reference real-world events and public figures,
                  but a real-world reference does not make the surrounding
                  fictional narrative factual. Invented dialogue, scenarios,
                  characters, and investigative details should be understood
                  in that context.
                </p>

                <p>
                  We aim to make the nature of our fictional and satirical
                  content clear to readers. Where a piece is presented as
                  factual commentary or reporting, readers should distinguish
                  verifiable claims from opinion, interpretation, and humour.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final note */}
        <section className="border-t border-zinc-800 bg-zinc-900/30">
          <div className="mx-auto max-w-7xl px-5 py-14 md:px-6 md:py-20">
            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <div>
                <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
                  <span className="h-px w-8 bg-red-500" />
                  Theball
                </p>

                <p className="mt-4 font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Keep reading.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {readingLinks.map((link) => (
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

              <p className="max-w-md text-sm leading-6 text-zinc-500 md:text-right">
                An independent football publication for stories, ideas,
                fictional investigations, satire, and things that probably
                should not have happened.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
