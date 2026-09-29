import Link from "next/link";
import { notFound } from "next/navigation";
import { communities, getCommunity, getOperator } from "@/lib/data";
import { STATUS_COLOR } from "@/lib/types";

export function generateStaticParams() {
  return communities.map((c) => ({ slug: c.slug }));
}

export default function CommunityDetailPage({ params }: { params: { slug: string } }) {
  const community = getCommunity(params.slug);
  if (!community) notFound();

  const operator = getOperator(community.operatorSlug);

  return (
    <div className="container-page py-12">
      <Link href="/communities" className="text-sm text-eucalypt hover:underline">
        ← All communities
      </Link>

      <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl text-eucalypt">{community.name}</h1>
          <p className="mt-1 text-ink/60">{community.suburb}, {community.state}</p>
        </div>
        <span className={`rounded-sm px-3 py-1 text-sm font-medium ${STATUS_COLOR[community.status]}`}>
          {community.status}
        </span>
      </div>

      <div className="mt-8 grid gap-10 md:grid-cols-[2fr_1fr]">
        <div>
          <p className="text-ink/80 leading-relaxed">{community.summary}</p>

          <h2 className="mt-8 font-serif text-xl text-eucalypt">Amenities</h2>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-ink/80">
            {community.amenities.map((a) => (
              <li key={a} className="border-b border-eucalypt/10 pb-2">{a}</li>
            ))}
          </ul>
        </div>

        <aside className="h-fit rounded-sm border border-eucalypt/10 bg-card p-6">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-ink/50">Home type</dt>
              <dd className="font-medium">{community.type}</dd>
            </div>
            <div>
              <dt className="text-ink/50">Homes</dt>
              <dd className="font-medium">{community.homeCount}</dd>
            </div>
            {community.priceFrom && (
              <div>
                <dt className="text-ink/50">Price from</dt>
                <dd className="font-medium">{community.priceFrom}</dd>
              </div>
            )}
            {operator && (
              <div>
                <dt className="text-ink/50">Operator</dt>
                <dd className="font-medium">
                  <Link href={`/operators/${operator.slug}`} className="text-eucalypt hover:underline">
                    {operator.name}
                  </Link>
                </dd>
              </div>
            )}
          </dl>
        </aside>
      </div>
    </div>
  );
}
