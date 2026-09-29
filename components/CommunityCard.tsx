import Link from "next/link";
import { Community, STATUS_COLOR } from "@/lib/types";
import { getOperator } from "@/lib/data";

const TYPE_COLOR: Record<Community["type"], string> = {
  "Over-50s": "bg-brass",
  "All Ages": "bg-sky",
  "Affordable / Rental": "bg-eucalypt-light"
};

export default function CommunityCard({ community }: { community: Community }) {
  const operator = getOperator(community.operatorSlug);

  return (
    <Link
      href={`/communities/${community.slug}`}
      className="group flex overflow-hidden rounded-sm bg-card shadow-sm hover:shadow-md transition-shadow"
    >
      <span className={`type-bar ${TYPE_COLOR[community.type]}`} aria-hidden />
      <div className="flex-1 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-serif text-lg text-eucalypt group-hover:underline">
              {community.name}
            </h3>
            <p className="text-sm text-ink/60">{community.suburb}, {community.state}</p>
          </div>
          <span
            className={`whitespace-nowrap rounded-sm px-2 py-1 text-xs font-medium ${STATUS_COLOR[community.status]}`}
          >
            {community.status}
          </span>
        </div>

        <p className="mt-3 text-sm text-ink/80">{community.summary}</p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink/60">
          {community.homeCount > 0 && <span>{community.homeCount} homes</span>}
          <span>{community.type}</span>
          {operator && <span>{operator.name}</span>}
          {community.priceFrom && <span>From {community.priceFrom}</span>}
        </div>
      </div>
    </Link>
  );
}
