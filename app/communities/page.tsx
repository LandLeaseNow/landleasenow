import Link from "next/link";
import CommunityCard from "@/components/CommunityCard";
import { communities, getOperator } from "@/lib/data";
import { STATE_LABELS, CommunityType } from "@/lib/types";

export const metadata = {
  title: "Browse land lease communities | Landlease Now"
};

const TYPE_FILTERS: { label: string; value?: CommunityType }[] = [
  { label: "All types", value: undefined },
  { label: "Over-50s", value: "Over-50s" },
  { label: "All ages", value: "All Ages" },
  { label: "Affordable / rental", value: "Affordable / Rental" }
];

function buildTypeHref(current: { q?: string; status?: string; state?: string }, type?: string) {
  const params = new URLSearchParams();
  if (current.q) params.set("q", current.q);
  if (current.status) params.set("status", current.status);
  if (current.state) params.set("state", current.state);
  if (type) params.set("type", type);
  const qs = params.toString();
  return qs ? `/communities?${qs}` : "/communities";
}

export default function CommunitiesPage({
  searchParams
}: {
  searchParams: { q?: string; type?: string; status?: string; state?: string };
}) {
  const query = searchParams.q?.trim().toLowerCase();

  const filtered = communities.filter((c) => {
    if (searchParams.type && c.type !== searchParams.type) return false;
    if (searchParams.status && c.status !== searchParams.status.replace("+", " ")) return false;
    if (searchParams.state && c.state !== searchParams.state) return false;
    if (query) {
      const operator = getOperator(c.operatorSlug);
      const haystack = [
        c.name,
        c.suburb,
        c.state,
        STATE_LABELS[c.state],
        operator?.name ?? ""
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    return true;
  });

  return (
    <div className="container-page py-12">
      <h1 className="font-serif text-3xl text-eucalypt">All communities</h1>
      <p className="mt-2 text-ink/60 text-sm">
        {filtered.length} of {communities.length} communities shown
        {searchParams.q ? ` · matching "${searchParams.q}"` : ""}
        {searchParams.type ? ` · ${searchParams.type}` : ""}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {TYPE_FILTERS.map((filter) => {
          const isActive = (searchParams.type ?? "") === (filter.value ?? "");
          return (
            <Link
              key={filter.label}
              href={buildTypeHref(searchParams, filter.value)}
              className={
                isActive
                  ? "rounded-sm bg-black px-4 py-2 text-sm font-medium text-white"
                  : "rounded-sm border border-eucalypt/15 px-4 py-2 text-sm text-ink/70 hover:border-eucalypt/40 hover:text-ink"
              }
            >
              {filter.label}
            </Link>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {filtered.map((c) => (
          <CommunityCard key={c.slug} community={c} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-ink/60">No communities match those filters yet.</p>
      )}
    </div>
  );
}
