export type CommunityType = "Over-50s" | "All Ages" | "Affordable / Rental";

export type CommunityStatus = "Established" | "Under Development" | "Selling Now";

// Badge colors for each status, shared by every place a status badge is rendered
// (community cards and the community detail page).
export const STATUS_COLOR: Record<CommunityStatus, string> = {
  "Under Development": "bg-orange-100 text-orange-800",
  "Selling Now": "bg-green-100 text-green-800",
  Established: "bg-sand text-ink/70"
};

export interface Operator {
  slug: string;
  name: string;
  description: string;
  communityCount: number;
  website?: string;
}

export interface Community {
  slug: string;
  name: string;
  suburb: string;
  state: "NSW" | "QLD" | "VIC" | "WA" | "SA" | "TAS" | "ACT" | "NT";
  type: CommunityType;
  status: CommunityStatus;
  homeCount: number;
  operatorSlug: string;
  amenities: string[];
  priceFrom?: string;
  summary: string;
  lat?: number;
  lng?: number;
}

export const STATE_LABELS: Record<Community["state"], string> = {
  NSW: "New South Wales",
  QLD: "Queensland",
  VIC: "Victoria",
  WA: "Western Australia",
  SA: "South Australia",
  TAS: "Tasmania",
  ACT: "Australian Capital Territory",
  NT: "Northern Territory"
};
