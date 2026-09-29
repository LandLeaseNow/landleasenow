"use client";

import { useEffect, useRef, useState } from "react";

type Mode = "purchaser" | "industry";

type Option = { value: string; label: string };

function CenteredSelect({
  id,
  name,
  placeholder,
  options,
  className = ""
}: {
  id: string;
  name: string;
  placeholder: string;
  options: Option[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = options.find((o) => o.value === value)?.label ?? placeholder;

  return (
    <div ref={rootRef} className={`relative shrink-0 ${className}`}>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        id={id}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center justify-center gap-2 rounded-sm border border-eucalypt/10 bg-card px-4 py-3 text-center text-sm text-ink shadow-sm"
      >
        <span className="truncate">{selectedLabel}</span>
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          className={`h-4 w-4 shrink-0 text-ink/50 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M5 7.5 10 12.5 15 7.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-10 mt-1 w-full overflow-hidden rounded-sm border border-eucalypt/10 bg-card shadow-md"
        >
          {options.map((option) => (
            <li key={option.value} role="option" aria-selected={option.value === value}>
              <button
                type="button"
                onClick={() => {
                  setValue(option.value);
                  setOpen(false);
                }}
                className={
                  option.value === value
                    ? "w-full bg-sand-light px-4 py-2 text-center text-sm font-medium text-ink"
                    : "w-full px-4 py-2 text-center text-sm text-ink/80 hover:bg-sand-light hover:text-ink"
                }
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const TYPE_OPTIONS: Option[] = [
  { value: "", label: "All types" },
  { value: "Over-50s", label: "Over-50s" },
  { value: "All Ages", label: "All ages" },
  { value: "Affordable / Rental", label: "Affordable / rental" }
];

const STATUS_OPTIONS: Option[] = [
  { value: "", label: "All statuses" },
  { value: "Under Development", label: "Under development" },
  { value: "Selling Now", label: "Selling now" },
  { value: "Established", label: "Established" }
];

export default function HeroSearch({ mode }: { mode: Mode }) {
  const isPurchaser = mode === "purchaser";

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
        {isPurchaser ? "Looking for a community?" : "Researching the sector?"}
      </p>

      <form
        action="/communities"
        method="GET"
        className="mt-2 flex flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="hero-search" className="sr-only">
          {isPurchaser ? "Search by suburb, town or region" : "Search by operator, suburb or state"}
        </label>
        <input
          id="hero-search"
          name="q"
          type="text"
          placeholder={isPurchaser ? "Search by suburb, town or region" : "Search by operator, suburb or state"}
          className="w-full min-w-0 flex-1 rounded-sm border border-eucalypt/10 bg-card px-4 py-3 text-sm text-ink shadow-sm placeholder:text-ink/40 focus:outline-none focus:ring-1 focus:ring-ink/30 sm:min-w-[260px]"
        />

        {isPurchaser ? (
          <CenteredSelect
            id="hero-type"
            name="type"
            placeholder="All types"
            options={TYPE_OPTIONS}
            className="sm:w-40"
          />
        ) : (
          <CenteredSelect
            id="hero-status"
            name="status"
            placeholder="All statuses"
            options={STATUS_OPTIONS}
            className="sm:w-40"
          />
        )}

        <button
          type="submit"
          className="shrink-0 whitespace-nowrap rounded-sm bg-black px-8 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-neutral-800"
        >
          {isPurchaser ? "Search" : "Search coverage"}
        </button>
      </form>
    </div>
  );
}
