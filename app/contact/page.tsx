
import Navbar from "@/components/layout/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-zinc-950 text-white">
        {/* Hero */}
        <section className="border-b border-zinc-800">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-24">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
                Contact Theball
              </p>

              <h1 className="mt-4 font-serif text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-8xl">
                Have something
                <br />
                <span className="text-zinc-500">to say?</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
                Questions, corrections, story ideas, feedback, or something
                that you think we should investigate? Get in touch.
              </p>
            </div>
          </div>
        </section>

        {/* Contact cards */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-20">
          <div className="grid gap-px overflow-hidden border border-zinc-800 bg-zinc-800 md:grid-cols-2">
            {/* Email */}
            <div className="bg-zinc-950 p-8 md:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-600">
                General enquiries
              </p>

              <h2 className="mt-4 font-serif text-2xl font-bold md:text-3xl">
                Email us
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
                For general questions, feedback, corrections, story ideas,
                collaborations, or anything else related to Theball.
              </p>

              <a
                href="mailto:vinayakmarx@gmail.com"
                className="mt-8 inline-block border-b border-zinc-600 pb-1 font-serif text-lg text-zinc-200 transition-colors hover:border-white hover:text-white"
              >
vinayakmarx@gmail.com              </a>
            </div>

            {/* Corrections */}
            <div className="bg-zinc-950 p-8 md:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-600">
                Corrections
              </p>

              <h2 className="mt-4 font-serif text-2xl font-bold md:text-3xl">
                Spotted something?
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
                If you notice an error, broken link, incorrect information, or
                anything that needs clarification, let us know.
              </p>

              <a
                href="mailto:vinayakmarx@gmail.com?subject=Theball%20Correction"
                className="mt-8 inline-block text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                Send a correction →
              </a>
            </div>

            {/* Advertising */}
            <div className="bg-zinc-950 p-8 md:col-span-2 md:p-12">
              <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-600">
                    Advertising & Sponsorship
                  </p>

                  <h2 className="mt-4 font-serif text-2xl font-bold md:text-3xl">
                    Want to advertise with Theball?
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
                    Theball uses advertising to support the publication and
                    keep our stories accessible to readers. We also work with
                    brands and organisations interested in sponsoring
                    editorial projects or reaching our audience.
                  </p>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500">
                    If you are interested in advertising, sponsorships, or
                    working with Theball, get in touch and tell us a little
                    about what you have in mind.
                  </p>
                </div>

                <div className="md:text-right">
                  <a
                    href="mailto:vinayakmarx@gmail.com?subject=Theball%20Advertising%20%26%20Sponsorship"
                    className="inline-block border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-400 hover:text-white"
                  >
                    Discuss advertising →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before contacting */}
        <section className="border-t border-zinc-800">
          <div className="mx-auto max-w-7xl px-5 py-14 md:px-6 md:py-18">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-600">
                A quick note
              </p>

              <h2 className="mt-4 font-serif text-2xl font-bold md:text-3xl">
                About fictional content
              </h2>

              <p className="mt-4 text-sm leading-7 text-zinc-500 md:text-base md:leading-8">
                Some sections of Theball contain fictional or satirical
                material. If you are contacting us about something that appears
                in an Investigation Piece or Case File, please keep that
                context in mind.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-zinc-800">
          <div className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-16">
            <p className="font-serif text-xl font-bold text-zinc-300 md:text-2xl">
              We read everything.
            </p>

            <p className="mt-2 text-sm text-zinc-600">
              We may not reply to everything, but we do read it.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
