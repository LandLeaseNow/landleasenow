"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {direction === "left" ? (
        <path d="M19 12H5M11 6l-6 6 6 6" />
      ) : (
        <path d="M5 12h14M13 6l6 6-6 6" />
      )}
    </svg>
  );
}

const arrowClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-ink/70 text-ink/80 transition-colors hover:bg-ink hover:text-white disabled:cursor-default disabled:border-ink/20 disabled:text-ink/25 disabled:hover:bg-transparent disabled:hover:text-ink/25";

// Server-rendered cards are passed in as children, so this client component only
// handles scrolling and arrow state and doesn't pull community data into the browser bundle.
export default function FeaturedCarousel({
  title,
  viewAllHref,
  children
}: {
  title: string;
  viewAllHref: string;
  children: React.ReactNode;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = scroller.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  function scrollByPage(direction: 1 | -1) {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
  }

  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-serif text-3xl text-eucalypt">{title}</h2>
        <div className="flex items-center gap-4">
          <Link href={viewAllHref} className="text-sm text-eucalypt hover:underline">
            View all →
          </Link>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByPage(-1)}
              disabled={!canPrev}
              aria-label="Previous communities"
              className={arrowClass}
            >
              <Arrow direction="left" />
            </button>
            <button
              type="button"
              onClick={() => scrollByPage(1)}
              disabled={!canNext}
              aria-label="Next communities"
              className={arrowClass}
            >
              <Arrow direction="right" />
            </button>
          </div>
        </div>
      </div>

      {/* Padding + negative margin leave room for the card shadow and hover lift,
          which would otherwise be clipped by the scroll container. */}
      <div
        ref={scroller}
        className="-mx-2 -mb-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-2 py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Children.map(children, (child) => (
          <div className="w-full shrink-0 snap-start md:w-[calc((100%-3rem)/3)]">{child}</div>
        ))}
      </div>
    </div>
  );
}
