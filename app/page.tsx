import Link from "next/link";
import dynamic from "next/dynamic";
import CommunityCard from "@/components/CommunityCard";
import HeroSection from "@/components/HeroSection";
import { communities, operators, getStateCounts } from "@/lib/data";
import { STATE_LABELS } from "@/lib/types";

// Leaflet reads `window` at import time, so it can only render on the
// client — loading it with ssr disabled avoids a build-time crash.
const CommunityMap = dynamic(() => import("@/components/CommunityMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[600px] w-full items-center justify-center rounded-sm border border-eucalypt/10 bg-sand-light text-sm text-ink/50">
      Loading map…
    </div>
  )
});

export default function HomePage() {
  const featured = communities.slice(0, 3);
  const stateCounts = getStateCounts().sort((a, b) => b.count - a.count);
  const topOperators = [...operators].sort((a, b) => b.communityCount - a.communityCount);

  return (
    <>
      <section className="bg-sand-light">
        <div className="container-page py-16 md:py-24">
          <HeroSection
            operatorsCount={operators.length}
            communitiesCount={communities.length}
            statesCount={stateCounts.length}
            underDevelopmentCount={communities.filter((c) => c.status === "Under Development").length}
          />
        </div>
      </section>

      <section className="container-page py-16">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-3xl text-eucalypt">Featured communities</h2>
          <Link href="/communities" className="text-sm text-eucalypt hover:underline">
            View all →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {featured.map((c) => (
            <CommunityCard key={c.slug} community={c} />
          ))}
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-3xl text-ink">Where are our communities?</h2>
          <Link href="/map" className="text-sm text-eucalypt hover:underline">
            Open full map →
          </Link>
        </div>
        <p className="mt-2 max-w-2xl text-sm text-ink/60">
          {communities.filter((c) => c.lat && c.lng).length} communities plotted across Australia.
        </p>

        <div className="mt-6">
          <CommunityMap communities={communities} heightClassName="h-[600px]" />
        </div>
      </section>

      <section className="bg-sand-light py-16">
        <div className="container-page grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-ink">Browse by state</h2>
            <ul className="mt-5 space-y-3">
              {stateCounts.map(({ state, count }) => (
                <li key={state} className="flex justify-between border-b border-eucalypt/10 pb-2 text-sm">
                  <Link href={`/regions/${state}`} className="text-ink/80 hover:text-ink">
                    {STATE_LABELS[state as keyof typeof STATE_LABELS]}
                  </Link>
                  <span className="text-ink/50">{count}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink">Operators</h2>
            <ul className="mt-5 space-y-3">
              {topOperators.map((op) => (
                <li key={op.slug} className="flex justify-between border-b border-eucalypt/10 pb-2 text-sm">
                  <Link href={`/operators/${op.slug}`} className="text-ink/80 hover:text-ink">
                    {op.name}
                  </Link>
                  <span className="text-ink/50">{op.communityCount}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="rounded-sm bg-black px-8 py-10 text-center md:px-16">
          <h2 className="font-serif text-2xl text-white">New communities, straight to your inbox.</h2>
          <p className="mt-2 text-white/60 text-sm">
            One short email when a new community launches or an existing one starts selling.
          </p>
          <form className="mx-auto mt-6 flex max-w-sm gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-sm border-0 px-4 py-2 text-sm text-ink"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-sm bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
