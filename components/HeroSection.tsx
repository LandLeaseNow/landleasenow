"use client";

import Link from "next/link";
import { useState } from "react";
import HeroSearch from "./HeroSearch";

type Mode = "purchaser" | "industry";

const ICONS = {
  operators: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5 text-eucalypt">
      <rect x="4" y="10" width="6" height="10" />
      <rect x="14" y="5" width="6" height="15" />
    </svg>
  ),
  underDevelopment: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5 text-eucalypt">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  ),
  communities: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5 text-eucalypt">
      <path d="M12 21s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  states: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5 text-eucalypt">
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" strokeLinejoin="round" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  )
};

export default function HeroSection({
  operatorsCount,
  communitiesCount,
  statesCount,
  underDevelopmentCount
}: {
  operatorsCount: number;
  communitiesCount: number;
  statesCount: number;
  underDevelopmentCount: number;
}) {
  const [mode, setMode] = useState<Mode>("purchaser");
  const isPurchaser = mode === "purchaser";

  const stats = [
    { icon: ICONS.operators, value: `${operatorsCount}`, label: "Operators" },
    { icon: ICONS.communities, value: `${communitiesCount}`, label: "Communities" },
    { icon: ICONS.states, value: `${statesCount}`, label: "States covered" },
    { icon: ICONS.underDevelopment, value: `${underDevelopmentCount}`, label: "Under development" }
  ];

  return (
    <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:gap-16 md:items-stretch">
      <div className="max-w-2xl">
        <h1 className="font-serif font-bold text-4xl leading-tight text-ink md:text-5xl">
          The directory for Australia's land lease sector.
        </h1>
        <p className="mt-5 max-w-lg text-ink/70">
          Search communities as a home buyer, or track operators,
          coverage and new developments as an industry professional.
        </p>

        <div className="mt-8">
          <div className="inline-flex rounded-sm border border-eucalypt/15 bg-card p-1 text-xs font-medium">
            <button
              type="button"
              onClick={() => setMode("purchaser")}
              className={
                isPurchaser
                  ? "whitespace-nowrap rounded-sm bg-black px-3 py-1.5 text-white"
                  : "whitespace-nowrap rounded-sm px-3 py-1.5 text-ink/60 hover:text-ink"
              }
            >
              I'm a purchaser
            </button>
            <button
              type="button"
              onClick={() => setMode("industry")}
              className={
                !isPurchaser
                  ? "whitespace-nowrap rounded-sm bg-black px-3 py-1.5 text-white"
                  : "whitespace-nowrap rounded-sm px-3 py-1.5 text-ink/60 hover:text-ink"
              }
            >
              I'm an industry professional
            </button>
          </div>

          <div className="mt-4">
            <HeroSearch mode={mode} />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <Link href="/communities" className="text-ink/70 underline underline-offset-2 hover:text-ink">
            Browse all communities
          </Link>
          <span className="text-ink/30">·</span>
          <Link href="/operators" className="text-ink/70 underline underline-offset-2 hover:text-ink">
            See all operators
          </Link>
        </div>
      </div>

      <ul className="mt-6 grid grid-cols-2 gap-3 md:mt-0 md:flex md:h-full md:w-fit md:flex-col md:justify-between md:justify-self-end">
        {stats.map((stat) => (
          <li
            key={stat.label}
            className="flex items-center gap-3 rounded-sm border border-eucalypt/10 bg-card p-4 shadow-sm"
          >
            <span className="[&_svg]:h-8 [&_svg]:w-8">{stat.icon}</span>
            <span>
              <span className="block font-serif text-3xl leading-none text-ink">{stat.value}</span>
              <span className="block mt-1 text-sm uppercase tracking-wide text-ink/70">{stat.label}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
