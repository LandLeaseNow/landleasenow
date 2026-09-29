"use client";

import { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
import { Community, CommunityStatus } from "@/lib/types";
import { getOperator } from "@/lib/data";

// One marker color per status, matching the same palette as the status
// badges elsewhere on the site (see STATUS_COLOR in lib/types.ts).
const STATUS_MARKER_COLOR: Record<CommunityStatus, string> = {
  "Under Development": "#F5923E",
  "Selling Now": "#3FA34D",
  Established: "#1F3A33"
};

// Leaflet's default marker image is a plain pin; drawing our own pin as an
// inline SVG lets each marker be colored per community status without
// needing a set of pre-rendered marker image files per color.
function createMarkerIcon(color: string) {
  const svg = `
    <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 0C5.6 0 0 5.6 0 12.5c0 9.4 12.5 28.5 12.5 28.5S25 21.9 25 12.5C25 5.6 19.4 0 12.5 0z" fill="${color}" stroke="rgba(0,0,0,0.25)" stroke-width="1"/>
      <circle cx="12.5" cy="12.5" r="5" fill="#ffffff"/>
    </svg>
  `.trim();

  return L.divIcon({
    html: svg,
    className: "",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
  });
}

const MARKER_ICONS: Record<CommunityStatus, L.DivIcon> = {
  "Under Development": createMarkerIcon(STATUS_MARKER_COLOR["Under Development"]),
  "Selling Now": createMarkerIcon(STATUS_MARKER_COLOR["Selling Now"]),
  Established: createMarkerIcon(STATUS_MARKER_COLOR.Established)
};

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
            <Marker
              key={community.slug}
              position={[community.lat, community.lng]}
              icon={MARKER_ICONS[community.status]}
            >
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
