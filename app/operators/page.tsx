import Link from "next/link";
import { operators } from "@/lib/data";

export const metadata = {
  title: "Land lease operators | Landlease Now"
};

type ListedFilter = "All" | "Listed" | "Unlisted";
const FILTERS: ListedFilter[] = ["All", "Listed", "Unlisted"];

function buildHref(filter: ListedFilter) {
  return filter === "All" ? "/operators" : `/operators?listed=${filter}`;
}

export default function OperatorsPage({
  searchParams
}: {
  searchParams: { listed?: string };
}) {
  const activeFilter: ListedFilter =
    searchParams.listed === "Listed" || searchParams.listed === "Unlisted"
      ? searchParams.listed
      : "All";

  const filtered = operators.filter((op) => {
    if (activeFilter === "Listed") return op.listed;
    if (activeFilter === "Unlisted") return !op.listed;
    return true;
  });

  return (
    <div className="container-page py-12">
      <h1 className="font-serif text-3xl text-eucalypt">Operators</h1>
      <p className="mt-2 text-ink/60 text-sm">
        The companies developing and managing land lease communities.
      </p>

      <div className="mt-6">
        <div className="inline-flex rounded-sm border border-eucalypt/15 bg-card p-1 text-xs font-medium">
          {FILTERS.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <Link
                key={filter}
                href={buildHref(filter)}
                className={
                  isActive
                    ? "whitespace-nowrap rounded-sm bg-black px-3 py-1.5 text-white"
                    : "whitespace-nowrap rounded-sm px-3 py-1.5 text-ink/60 hover:text-ink"
                }
              >
                {filter}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {filtered.map((op) => (
          <Link
            key={op.slug}
            href={`/operators/${op.slug}`}
            className="rounded-sm bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-serif text-lg text-eucalypt">{op.name}</h2>
              <span
                className={`whitespace-nowrap rounded-sm px-2 py-1 text-xs font-medium ${
                  op.listed ? "bg-sky text-ink" : "bg-sand text-ink/70"
                }`}
              >
                {op.listed ? "Listed" : "Unlisted"}
              </span>
            </div>
            <p className="mt-2 text-sm text-ink/70">{op.description}</p>
            <p className="mt-3 text-xs text-ink/50">{op.communityCount} communities tracked</p>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-ink/60">No operators match that filter.</p>
      )}
    </div>
  );
}
