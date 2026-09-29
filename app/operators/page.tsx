import Link from "next/link";
import { operators } from "@/lib/data";

export const metadata = {
  title: "Land lease operators | Landlease Now"
};

export default function OperatorsPage() {
  return (
    <div className="container-page py-12">
      <h1 className="font-serif text-3xl text-eucalypt">Operators</h1>
      <p className="mt-2 text-ink/60 text-sm">
        The companies developing and managing land lease communities.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {operators.map((op) => (
          <Link
            key={op.slug}
            href={`/operators/${op.slug}`}
            className="rounded-sm bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="font-serif text-lg text-eucalypt">{op.name}</h2>
            <p className="mt-2 text-sm text-ink/70">{op.description}</p>
            <p className="mt-3 text-xs text-ink/50">{op.communityCount} communities tracked</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
