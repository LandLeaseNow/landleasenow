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
      {/* Title on the left, arrows centred, "View all" on the right. The arrows are hidden on
          phones, where the row is swiped instead. */}
      <div className="grid grid-cols-[1fr_auto] items-end gap-4 md:grid-cols-[1fr_auto_1fr]">
        <h2 className="font-serif text-3xl text-eucalypt">{title}</h2>
        <div className="hidden gap-2 md:flex">
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
        <Link href={viewAllHref} className="justify-self-end text-sm text-eucalypt hover:underline md:pb-3">
          View all →
        </Link>
      </div>

      {/* Padding + negative margin leave room for the card shadow and hover lift,
          which would otherwise be clipped by the scroll container. */}
      <div
        ref={scroller}
        className="-mx-2 -mb-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-2 py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Children.map(children, (child) => (
          <div className="flex w-full shrink-0 snap-start md:w-[calc((100%-3rem)/3)] [&>*]:min-w-0 [&>*]:flex-1">{child}</div>
        ))}
      </div>
    </div>
  );
}
