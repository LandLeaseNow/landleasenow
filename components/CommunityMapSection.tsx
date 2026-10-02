"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Community, CommunityStatus, Operator, STATUS_MARKER_COLOR } from "@/lib/types";

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

type StatusFilter = "All" | CommunityStatus;

const FILTERS: StatusFilter[] = ["All", "Under Development", "Selling Now", "Established"];

const ALL_OPERATORS = "All";

// "All" stays neutral black/white; the other three pick up the same hex
// color used for their map marker, so the toggle reads as a legend for
// the pins below it.
function colorFor(f: StatusFilter): string | undefined {
  return f === "All" ? undefined : STATUS_MARKER_COLOR[f];
}

export default function CommunityMapSection({
  communities,
  operators
}: {
  communities: Community[];
  operators: Operator[];
}) {
  const [filter, setFilter] = useState<StatusFilter>("All");
  const [operatorSlug, setOperatorSlug] = useState<string>(ALL_OPERATORS);

  const sortedOperators = useMemo(
    () => [...operators].sort((a, b) => a.name.localeCompare(b.name)),
    [operators]
  );

  const filtered = useMemo(
    () =>
      communities
        .filter((c) => filter === "All" || c.status === filter)
        .filter((c) => operatorSlug === ALL_OPERATORS || c.operatorSlug === operatorSlug),
    [communities, filter, operatorSlug]
  );

  return (
    <section className="container-page pb-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-serif text-3xl text-ink">See where communities are located</h2>
        <Link href="/map" className="text-sm text-eucalypt hover:underline">
          Open full map →
        </Link>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <div className="inline-flex rounded-sm border border-eucalypt/15 bg-card p-1 text-xs font-medium">
          {FILTERS.map((f) => {
            const color = colorFor(f);
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                style={{
                  backgroundColor: active ? (color ?? "#000000") : undefined,
                  color: active ? "#ffffff" : color
                }}
                className={`whitespace-nowrap rounded-sm px-3 py-1.5 transition-colors hover:opacity-80 ${
                  !color && !active ? "text-ink/60 hover:text-ink hover:opacity-100" : ""
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <label className="sr-only" htmlFor="map-operator-filter">
          Filter by operator
        </label>
        <select
          id="map-operator-filter"
          value={operatorSlug}
          onChange={(e) => setOperatorSlug(e.target.value)}
          className="rounded-sm border border-eucalypt/15 bg-card px-3 py-2 text-xs font-medium text-ink/80 hover:text-ink"
        >
          <option value={ALL_OPERATORS}>All Operators</option>
          {sortedOperators.map((op) => (
            <option key={op.slug} value={op.slug}>
              {op.name} ({op.communityCount})
            </option>
          ))}
        </select>

        {operatorSlug !== ALL_OPERATORS && (
          <button
            type="button"
            onClick={() => setOperatorSlug(ALL_OPERATORS)}
            className="text-xs text-ink/50 underline underline-offset-2 hover:text-ink"
          >
            Clear operator
          </button>
        )}
      </div>

      <div className="mt-6">
        <CommunityMap communities={filtered} heightClassName="h-[600px]" />
      </div>
    </section>
  );
}
