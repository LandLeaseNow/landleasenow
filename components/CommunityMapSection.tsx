"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Community } from "@/lib/types";

// Leaflet reads `window` at import time, so it can only render on the
// client — loading it with ssr disabled avoids a build-time crash.
const CommunityMap = dynamic(() => import("./CommunityMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[600px] w-full items-center justify-center rounded-sm border border-eucalypt/10 bg-sand-light text-sm text-ink/50">
      Loading map…
    </div>
  )
});

type StatusFilter = "All" | "Under Development" | "Selling Now";

const FILTERS: StatusFilter[] = ["All", "Under Development", "Selling Now"];

export default function CommunityMapSection({ communities }: { communities: Community[] }) {
  const [filter, setFilter] = useState<StatusFilter>("All");

  const filtered = useMemo(
    () => (filter === "All" ? communities : communities.filter((c) => c.status === filter)),
    [communities, filter]
  );

  const locatedCount = filtered.filter((c) => c.lat && c.lng).length;

  return (
    <section className="container-page pb-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-serif text-3xl text-ink">See where communities are located</h2>
        <Link href="/map" className="text-sm text-eucalypt hover:underline">
          Open full map →
        </Link>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-ink/60">{locatedCount} communities plotted across Australia.</p>

        <div className="inline-flex rounded-sm border border-eucalypt/15 bg-card p-1 text-xs font-medium">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={
                f === filter
                  ? "whitespace-nowrap rounded-sm bg-black px-3 py-1.5 text-white"
                  : "whitespace-nowrap rounded-sm px-3 py-1.5 text-ink/60 hover:text-ink"
              }
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <CommunityMap communities={filtered} heightClassName="h-[600px]" />
      </div>
    </section>
  );
}
