import Link from "next/link";
import { notFound } from "next/navigation";
import { operators, getOperator, getCommunitiesByOperator } from "@/lib/data";
import CommunityCard from "@/components/CommunityCard";

export function generateStaticParams() {
  return operators.map((op) => ({ slug: op.slug }));
}

export default function OperatorDetailPage({ params }: { params: { slug: string } }) {
  const operator = getOperator(params.slug);
  if (!operator) notFound();

  const operatorCommunities = getCommunitiesByOperator(operator.slug);

  return (
    <div className="container-page py-12">
      <Link href="/operators" className="text-sm text-eucalypt hover:underline">
        ← All operators
      </Link>

      <h1 className="mt-4 font-serif text-3xl text-eucalypt">{operator.name}</h1>
      <p className="mt-2 max-w-2xl text-ink/70">{operator.description}</p>

      <h2 className="mt-10 font-serif text-xl text-eucalypt">
        Communities by {operator.name}
      </h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {operatorCommunities.map((c) => (
          <CommunityCard key={c.slug} community={c} />
        ))}
      </div>
    </div>
  );
}
