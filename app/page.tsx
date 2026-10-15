
import Navbar from "@/components/layout/Navbar";
import FeaturedStories from "@/components/home/FeaturedStories";
import LatestStories from "@/components/home/LatestStories";
import MostRead from "@/components/home/MostRead";
import CategorySection from "@/components/home/CategorySection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Featured Stories */}
        <FeaturedStories />

        {/* Latest Stories + Most Read */}
        <section className="border-t border-zinc-800">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-6 md:py-16 lg:grid-cols-[1fr_340px] lg:gap-14">
            <LatestStories />

            {/* Sticky on desktop */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <MostRead />
            </aside>
          </div>
        </section>

        {/* Investigation Pieces */}
        <section className="border-t border-zinc-800 bg-zinc-900/30">
          <div className="mx-auto max-w-7xl px-5 py-14 md:px-6 md:py-16">
            <CategorySection title="Investigation Pieces" />
          </div>
        </section>

        {/* Case Files */}
        <section className="border-t border-zinc-800">
          <div className="mx-auto max-w-7xl px-5 py-14 md:px-6 md:py-16">
            <CategorySection title="Case Files" />
          </div>
        </section>
      </main>
    </>
  );
}