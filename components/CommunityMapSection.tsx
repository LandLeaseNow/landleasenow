"use client";

import Link from "next/link";
import { Community, Operator } from "@/lib/types";
import CommunityMapExplorer from "./CommunityMapExplorer";

export default function CommunityMapSection({
  communities,
  operators
}: {
  communities: Community[];
  operators: Operator[];
}) {
  return (
    <section className="container-page pb-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-serif text-3xl text-ink">See where communities are located</h2>
        <Link href="/map" className="text-sm text-eucalypt hover:underline">
          Open full map →
        </Link>
      </div>

      <div className="mt-6">
        <CommunityMapExplorer communities={communities} operators={operators} heightClassName="h-[600px]" />
      </div>
    </section>
  );
}
