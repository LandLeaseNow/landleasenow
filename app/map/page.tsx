import { communities, operators } from "@/lib/data";
import CommunityMapExplorer from "@/components/CommunityMapExplorer";

export const metadata = {
  title: "Map of land lease communities | Landlease Now"
};

export default function MapPage() {
  return (
    <div className="container-page py-12">
      <p className="text-xs uppercase tracking-wide text-brass-dark">Search by location</p>
      <h1 className="mt-2 font-serif text-3xl text-ink">See where communities are located</h1>
      <p className="mt-3 max-w-2xl text-sm text-ink/70">
        Communities are plotted below using approximate town-centre coordinates. Click a marker
        for details, or use the filter button to narrow the map down by state, operator or
        community size.
      </p>

      <div className="mt-6">
        <CommunityMapExplorer
          communities={communities}
          operators={operators}
          heightClassName="h-[70vh]"
          showCount
        />
      </div>
    </div>
  );
}
