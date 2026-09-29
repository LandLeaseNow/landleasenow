import Link from "next/link";
import { getStateCounts } from "@/lib/data";
import { STATE_LABELS } from "@/lib/types";

export const metadata = {
  title: "Browse by region | Landlease Now"
};

export default function RegionsPage() {
  const counts = getStateCounts();

  return (
    <div className="container-page py-12">
      <h1 className="font-serif text-3xl text-eucalypt">Browse by region</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {Object.entries(STATE_LABELS).map(([code, label]) => {
          const count = counts.find((c) => c.state === code)?.count ?? 0;
          return (
            <Link
              key={code}
              href={`/regions/${code}`}
              className="rounded-sm bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="font-serif text-lg text-eucalypt">{label}</h2>
              <p className="mt-2 text-sm text-ink/60">{count} communities</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
