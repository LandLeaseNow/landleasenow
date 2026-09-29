"use client";

import { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
import { Community } from "@/lib/types";
import { getOperator } from "@/lib/data";

// Leaflet's default marker icon references image files by a relative path
// that breaks under most bundlers (including Next.js). Point it at the
// same images served from the leaflet package via CDN-style absolute URLs
// so markers render correctly without extra asset copying.
const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Australia's approximate mainland + Tasmania bounding box. Using bounds
// (rather than a fixed center/zoom) lets Leaflet fit the whole country
// correctly regardless of the container's width-to-height ratio, so it
// doesn't crop the top or bottom on a wide, short box.
const AUSTRALIA_BOUNDS: [[number, number], [number, number]] = [
  [-44, 112],
  [-10, 154]
];

export default function CommunityMap({
  communities,
  heightClassName = "h-[70vh]"
}: {
  communities: Community[];
  heightClassName?: string;
}) {
  const located = useMemo(
    () => communities.filter((c): c is Community & { lat: number; lng: number } =>
      typeof c.lat === "number" && typeof c.lng === "number"
    ),
    [communities]
  );

  return (
    <div className={`${heightClassName} w-full overflow-hidden rounded-sm border border-eucalypt/10`}>
      <MapContainer
        bounds={AUSTRALIA_BOUNDS}
        boundsOptions={{ padding: [4, 4] }}
        zoomSnap={0.25}
        zoomDelta={0.25}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {located.map((community) => {
          const operator = getOperator(community.operatorSlug);
          return (
            <Marker key={community.slug} position={[community.lat, community.lng]} icon={markerIcon}>
              <Popup>
                <div className="text-sm">
                  <p className="font-semibold">{community.name}</p>
                  <p className="text-ink/60">{community.suburb}, {community.state}</p>
                  {operator && <p className="mt-1 text-ink/70">{operator.name}</p>}
                  <Link href={`/communities/${community.slug}`} className="mt-2 inline-block text-eucalypt hover:underline">
                    View community →
                  </Link>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
