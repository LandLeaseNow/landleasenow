import Link from "next/link";
import { notFound } from "next/navigation";
import { getCommunitiesByState } from "@/lib/data";
import { STATE_LABELS } from "@/lib/types";
import CommunityCard from "@/components/CommunityCard";

export function generateStaticParams() {
  return Object.keys(STATE_LABELS).map((state) => ({ state }));
}

export default function RegionDetailPage({ params }: { params: { state: string } }) {
  const stateCode = params.state.toUpperCase() as keyof typeof STATE_LABELS;
  const label = STATE_LABELS[stateCode];
  if (!label) notFound();

  const stateCommunities = getCommunitiesByState(stateCode);

  return (
    <div className="container-page py-12">
      <Link href="/regions" className="text-sm text-eucalypt hover:underline">
        ← All regions
      </Link>

      <h1 className="mt-4 font-serif text-3xl text-eucalypt">{label}</h1>
      <p className="mt-2 text-ink/60 text-sm">{stateCommunities.length} communities tracked</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {stateCommunities.map((c) => (
          <CommunityCard key={c.slug} community={c} />
        ))}
      </div>

      {stateCommunities.length === 0 && (
        <p className="mt-10 text-ink/60">No communities recorded in this region yet.</p>
      )}
    </div>
  );
}
