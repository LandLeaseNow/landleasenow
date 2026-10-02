import Link from "next/link";
import ClaimForm from "@/components/ClaimForm";
import { getCommunity, getOperator } from "@/lib/data";

export const metadata = {
  title: "Claim your community | Landlease Now"
};

export default function ClaimPage({
  searchParams
}: {
  searchParams: { community?: string };
}) {
  const community = searchParams.community ? getCommunity(searchParams.community) : undefined;
  const operator = community ? getOperator(community.operatorSlug) : undefined;

  return (
    <div className="container-page py-12">
      {community && (
        <Link href={`/communities/${community.slug}`} className="text-sm text-eucalypt hover:underline">
          ← Back to {community.name}
        </Link>
      )}

      <div className="mx-auto mt-4 max-w-2xl">
        <h1 className="font-serif text-3xl text-eucalypt">
          {community ? `Claim ${community.name}` : "Claim your community"}
        </h1>
        <p className="mt-3 text-ink/70">
          Operate this community? Claim the listing to keep its details accurate
          and have it marked as verified by the operator. We'll check your details
          before approving any changes.
        </p>

        <div className="mt-8">
          <ClaimForm
            communityName={community?.name}
            communitySlug={community?.slug}
            operatorName={operator?.name}
          />
        </div>
      </div>
    </div>
  );
}
