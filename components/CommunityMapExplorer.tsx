"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Community, CommunityStatus, Operator, STATE_LABELS, STATUS_MARKER_COLOR } from "@/lib/types";

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

const STATUS_FILTERS: StatusFilter[] = ["All", "Under Development", "Selling Now", "Established"];

const ALL_STATES = "All";
const ALL_OPERATORS = "All";

type SizeFilter = "All" | "0-100" | "101-200" | "201-300" | "301-400" | "400+";

const SIZE_FILTERS: { value: SizeFilter; label: string }[] = [
  { value: "All", label: "Any size" },
  { value: "0-100", label: "0–100 homes" },
  { value: "101-200", label: "101–200 homes" },
  { value: "201-300", label: "201–300 homes" },
  { value: "301-400", label: "301–400 homes" },
  { value: "400+", label: "400+ homes" }
];

// "All" stays neutral black/white; the other three pick up the same hex
// color used for their map marker, so the toggle reads as a legend for
// the pins below it.
function colorForStatus(f: StatusFilter): string | undefined {
  return f === "All" ? undefined : STATUS_MARKER_COLOR[f];
}

function matchesSize(homeCount: number, size: SizeFilter) {
  if (size === "All") return true;
  if (size === "0-100") return homeCount <= 100;
  if (size === "101-200") return homeCount > 100 && homeCount <= 200;
  if (size === "201-300") return homeCount > 200 && homeCount <= 300;
  if (size === "301-400") return homeCount > 300 && homeCount <= 400;
  return homeCount > 400;
}

export default function CommunityMapExplorer({
  communities,
  operators,
  heightClassName = "h-[600px]",
  showCount = false
}: {
  communities: Community[];
  operators: Operator[];
  heightClassName?: string;
  showCount?: boolean;
}) {
  const [status, setStatus] = useState<StatusFilter>("All");
  const [state, setState] = useState<string>(ALL_STATES);
  const [operatorSlug, setOperatorSlug] = useState<string>(ALL_OPERATORS);
  const [size, setSize] = useState<SizeFilter>("All");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the filter panel on an outside click, same pattern as any other
  // dropdown on the site.
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setPanelOpen(false);
      }
    }
    if (panelOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [panelOpen]);

  const sortedOperators = useMemo(
    () => [...operators].sort((a, b) => a.name.localeCompare(b.name)),
    [operators]
  );

  const states = useMemo(
    () =>
      Array.from(new Set(communities.map((c) => c.state))).sort((a, b) =>
        STATE_LABELS[a].localeCompare(STATE_LABELS[b])
      ),
    [communities]
  );

  const filtered = useMemo(
    () =>
      communities
        .filter((c) => status === "All" || c.status === status)
        .filter((c) => state === ALL_STATES || c.state === state)
        .filter((c) => operatorSlug === ALL_OPERATORS || c.operatorSlug === operatorSlug)
        .filter((c) => matchesSize(c.homeCount, size)),
    [communities, status, state, operatorSlug, size]
  );

  const advancedFilterCount = [state !== ALL_STATES, operatorSlug !== ALL_OPERATORS, size !== "All"].filter(
    Boolean
  ).length;

  function clearAdvancedFilters() {
    setState(ALL_STATES);
    setOperatorSlug(ALL_OPERATORS);
    setSize("All");
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-sm border border-eucalypt/15 bg-card p-1 text-sm font-medium">
          {STATUS_FILTERS.map((f) => {
            const color = colorForStatus(f);
            const active = f === status;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setStatus(f)}
                style={{
                  backgroundColor: active ? (color ?? "#000000") : undefined,
                  color: active ? "#ffffff" : color
                }}
                className={`whitespace-nowrap rounded-sm px-3 py-2 transition-colors hover:opacity-80 ${
                  !color && !active ? "text-ink/60 hover:text-ink hover:opacity-100" : ""
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="relative" ref={panelRef}>
          <button
            type="button"
            onClick={() => setPanelOpen((open) => !open)}
            aria-expanded={panelOpen}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-black px-12 text-base font-medium text-white shadow-sm transition-colors hover:bg-neutral-800"
          >
            Filter
            {advancedFilterCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-semibold text-black">
                {advancedFilterCount}
              </span>
            )}
          </button>

          {panelOpen && (
            <div className="absolute right-0 z-[1100] mt-2 w-72 rounded-sm bg-black p-4 text-white shadow-lg">
              <div>
                <label htmlFor="map-filter-state" className="block text-xs uppercase tracking-wide text-white/60">
                  State
                </label>
                <select
                  id="map-filter-state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="mt-1 w-full rounded-sm border border-white/25 bg-black px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/50"
                >
                  <option value={ALL_STATES}>All states</option>
                  {states.map((s) => (
                    <option key={s} value={s}>
                      {STATE_LABELS[s]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-4">
                <label htmlFor="map-filter-operator" className="block text-xs uppercase tracking-wide text-white/60">
                  Operator
                </label>
                <select
                  id="map-filter-operator"
                  value={operatorSlug}
                  onChange={(e) => setOperatorSlug(e.target.value)}
                  className="mt-1 w-full rounded-sm border border-white/25 bg-black px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/50"
                >
                  <option value={ALL_OPERATORS}>All operators</option>
                  {sortedOperators.map((op) => (
                    <option key={op.slug} value={op.slug}>
                      {op.name} ({op.communityCount})
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-4">
                <span className="block text-xs uppercase tracking-wide text-white/60">Community size</span>
                <div className="mt-2 space-y-2">
                  {SIZE_FILTERS.map((opt) => (
                    <label key={opt.value} className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="map-filter-size"
                        value={opt.value}
                        checked={size === opt.value}
                        onChange={() => setSize(opt.value)}
                        style={{ accentColor: "#ffffff" }}
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              {advancedFilterCount > 0 && (
                <button
                  type="button"
                  onClick={clearAdvancedFilters}
                  className="mt-4 text-sm text-white/70 underline underline-offset-2 hover:text-white"
                >
                  Clear filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {showCount && (
        <p className="mt-3 text-sm text-ink/60">
          {filtered.length} of {communities.length} communities shown
        </p>
      )}

      <div className="mt-4">
        <CommunityMap communities={filtered} heightClassName={heightClassName} />
      </div>
    </div>
  );
}
