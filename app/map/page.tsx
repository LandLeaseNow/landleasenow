import dynamic from "next/dynamic";
import { communities } from "@/lib/data";

// Leaflet reads `window` at import time, so the map can only render on the
// client. Loading it with ssr disabled avoids a build-time crash.
const CommunityMap = dynamic(() => import("@/components/CommunityMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[70vh] w-full items-center justify-center rounded-sm border border-eucalypt/10 bg-sand-light text-sm text-ink/50">
      Loading map…
    </div>
  )
});

export default function MapPage() {
  const locatedCount = communities.filter((c) => c.lat && c.lng).length;

  return (
    <div className="container-page py-12">
      <p className="text-xs uppercase tracking-wide text-brass-dark">Search by location</p>
      <h1 className="mt-2 font-serif text-3xl text-ink">See where communities are located</h1>
      <p className="mt-3 max-w-2xl text-sm text-ink/70">
        {locatedCount} of {communities.length} communities are plotted below using approximate
        town-centre coordinates. Click a marker for details, or use the directory pages for
        full filtering.
      </p>
      <div className="mt-6">
        <CommunityMap communities={communities} />
      </div>
    </div>
  );
}
