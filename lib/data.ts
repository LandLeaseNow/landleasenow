import { Community, Operator } from "./types";

/**
 * REAL DATA — GROWING DATASET
 * -----------------------------------------------
 * Compiled from public news coverage and operator marketing sites (The
 * Weekly SOURCE, SmallCaps, operator media releases and websites, council
 * application coverage), current as of research done in September 2026.
 * Facts (locations, home counts, amenities, status) are summarised in
 * original wording — no text is copied from source articles or operator
 * marketing material, and no images are included.
 *
 * Coverage: 280 communities across 20 operators, spanning
 * NSW, VIC, QLD, WA, SA and ACT.
 *
 * lat/lng values (where present) are approximate town/suburb-centre
 * coordinates (not exact street addresses), added for the map view. Good
 * enough to place a marker in the right town, not for turn-by-turn
 * directions. Not every community has coordinates yet.
 *
 * The Australian land lease sector has several hundred communities
 * nationally — this file is still growing. Still missing: TAS and NT
 * entirely; many independent regional parks. Sale prices are only
 * included where a specific 'from' figure was published; otherwise
 * omitted, since a stale figure would mislead buyers.
 */

export const operators: Operator[] = [
  {
    slug: "ingenia-communities",
    name: "Ingenia Communities",
    description:
      "ASX-listed operator of land lease, rental and holiday communities across Australia, with active developments underway in New South Wales, Victoria and Queensland.",
    communityCount: 34,
    listed: true
  },
  {
    slug: "stockland-halcyon",
    name: "Stockland Halcyon",
    description:
      "Stockland's land lease communities brand for the over-50s market, built on the Halcyon business Stockland acquired in 2021, with communities across Queensland, New South Wales, Victoria and Western Australia.",
    communityCount: 30,
    website: "https://www.stockland.com.au/halcyon-communities",
    listed: true
  },
  {
    slug: "hampshire-villages",
    name: "Hampshire Villages",
    description:
      "Family-owned land lease operator running communities for over-50s across New South Wales, Victoria, South Australia and Western Australia, with some communities offering a shared-equity purchase option.",
    communityCount: 4,
    listed: false
  },
  {
    slug: "eureka-group",
    name: "Eureka Group",
    description:
      "ASX-listed provider of affordable rental communities for seniors, expanding into all-age rental parks in regional Queensland.",
    communityCount: 3,
    listed: true
  },
  {
    slug: "gemlife",
    name: "GemLife",
    description:
      "ASX-listed pureplay land lease developer and operator founded in 2015, delivering resort-style over-50s communities across Queensland, New South Wales and Victoria, with its portfolio expanding sharply after acquiring developer Aliria's projects in 2025.",
    communityCount: 23,
    listed: true
  },
  {
    slug: "lifestyle-communities",
    name: "Lifestyle Communities",
    description:
      "ASX-listed, Melbourne-based operator focused entirely on Victoria, running dozens of land lease communities for people aged over 50 under a standard 90-year land lease model.",
    communityCount: 3,
    listed: true
  },
  {
    slug: "hometown-australia",
    name: "Hometown Australia",
    description:
      "The Australian arm of US land lease operator Hometown America, running around 58-60 over-55s communities across New South Wales, Queensland and South Australia, built largely through acquisition of existing parks.",
    communityCount: 63,
    listed: false
  },
  {
    slug: "palm-lake-resort",
    name: "Palm Lake Resort",
    description:
      "Family-owned Australian developer operating since 1977, with around 38 land lease resorts for over-50s across Queensland, New South Wales and Victoria, home to more than 10,000 residents.",
    communityCount: 27,
    listed: false
  },
  {
    slug: "living-gems",
    name: "Living Gems",
    description:
      "Family-owned Gold Coast land lease developer founded in the 1980s, building over-50s resorts across South East Queensland with a pipeline extending into Townsville, Yeppoon and northern NSW.",
    communityCount: 3,
    listed: false
  },
  {
    slug: "serenitas",
    name: "Serenitas",
    description:
      "Land lease operator majority-owned by Mirvac, Pacific Equity Partners and Tasman Capital Partners, running around 34 communities across NSW, VIC, QLD and WA under brands including Thyme Lifestyle Resorts and National Lifestyle Villages.",
    communityCount: 30,
    listed: false
  },
  {
    slug: "aspen-group",
    name: "Aspen Group",
    description:
      "ASX-listed developer and manager of over-50s land lease lifestyle communities across Western Australia, South Australia, New South Wales and Victoria, offering home ownership on leased land with no exit fees or stamp duty.",
    communityCount: 10,
    website: "https://aspengroup.com.au/lifestyle",
    listed: true
  },
  {
    slug: "lincoln-place",
    name: "Lincoln Place",
    description:
      "Developer and operator of over-50s land lease lifestyle communities across NSW, VIC, QLD and the ACT, with homes offered on a no entry fee, no exit fee, no deferred management fee basis.",
    communityCount: 28,
    website: "https://www.lincolnplace.com.au/",
    listed: false
  },
  {
    slug: "liven-communities",
    name: "Liven Communities",
    description:
      "Developer of resort-style, architecturally designed over-50s land lease communities in regional Queensland.",
    communityCount: 4,
    website: "https://www.livencommunities.com.au/",
    listed: false
  },
  {
    slug: "springtree",
    name: "Springtree",
    description:
      "A new lifestyle resort brand dedicated to creating vibrant, welcoming communities for downsizers, with thoughtfully designed land lease communities in idyllic locations.",
    communityCount: 3,
    website: "https://springtree.com.au/welcome-to-springtree/",
    listed: false
  },
  {
    slug: "vivacity-property",
    name: "Vivacity Property",
    description:
      "A developer and operator of boutique retirement lifestyle communities, building thriving land lease communities in architecturally designed, lavish spaces for active, connected over-55s living.",
    communityCount: 5,
    website: "https://vivacityproperty.com.au/",
    listed: false
  },
  {
    slug: "ocean-club-resort",
    name: "Ocean Club Resort",
    description:
      "The original blueprint for over-50s resort-style living on the Mid-North Coast of NSW, offering resort-style facilities and a laid-back, friendly community.",
    communityCount: 1,
    website: "https://oceanclubresort.com.au/",
    listed: false
  },
  {
    slug: "solana-lifestyle-resorts",
    name: "Solana Lifestyle Resorts",
    description:
      "Stockwell's manufactured home park business, managing over-50s lifestyle resorts from inception through ongoing operations, offering freestanding homes with no traditional retirement fees.",
    communityCount: 5,
    website: "https://www.solana.com.au/",
    listed: false
  },
  {
    slug: "millbray",
    name: "Millbray",
    description:
      "An owner and operator of over-50s land lease living in Australia, focused on thoughtfully designed homes with resort-style amenities and connected neighbourhoods ('Millbray Made').",
    communityCount: 1,
    website: "https://millbray.com/",
    listed: false
  },
  {
    slug: "allam-property-group",
    name: "Allam Property Group",
    description:
      "An Australian-owned property developer and home builder of 35 years, delivering land lease communities for over-55s as an alternative to traditional retirement villages.",
    communityCount: 2,
    website: "https://www.allam.com.au/retirement",
    listed: false
  },
  {
    slug: "kingsley-properties",
    name: "Kingsley Properties",
    description:
      "A South Australian developer of master-planned communities, operating under the Kingsley Living brand, founded by industry veteran Kingsley Andrew.",
    communityCount: 1,
    website: "https://kingsleyliving.com.au/",
    listed: false
  },
];

export const communities: Community[] = [
  {
    slug: "ingenia-lifestyle-kokomo",
    name: "Ingenia Lifestyle Kokomo",
    suburb: "Blueys Beach",
    state: "NSW",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 133,
    operatorSlug: "ingenia-communities",
    amenities: ["Clubhouse with pool", "Gym and sauna", "Putting green", "Pickleball courts"],
    summary:
      "A boutique over-55s community under construction on the NSW Mid North Coast, planned for 133 homes with a resident clubhouse precinct.",
    lat: -32.362,
    lng: 152.542
  },
  {
    slug: "ingenia-lifestyle-springside",
    name: "Ingenia Lifestyle Springside",
    suburb: "Beveridge",
    state: "VIC",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 262,
    operatorSlug: "ingenia-communities",
    amenities: ["Heated indoor pool", "Gym and yoga studio", "Cinema", "Library"],
    summary:
      "A staged community around 37km north of Melbourne's CBD, with homes progressively completing and a clubhouse and wellness precinct under construction.",
    lat: -37.383,
    lng: 144.965
  },
  {
    slug: "archers-run",
    name: "Archers Run",
    suburb: "Morisset",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 600,
    operatorSlug: "ingenia-communities",
    amenities: ["Resort-style clubhouse", "Swimming pool", "Community facilities"],
    summary:
      "Ingenia's largest land lease community, developed in joint venture with Sun Communities on the NSW Central Coast, planned to exceed 600 homes.",
    lat: -33.098,
    lng: 151.478
  },
  {
    slug: "stockland-halcyon-gables",
    name: "Stockland Halcyon Gables",
    suburb: "The Gables",
    state: "NSW",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 231,
    operatorSlug: "stockland-halcyon",
    amenities: ["Heated mineral pool", "Gym and sauna", "Pickleball courts", "Bowling green"],
    summary:
      "Stockland Halcyon's first NSW community, under construction inside the broader Gables masterplanned area northwest of Sydney.",
    lat: -33.637653,
    lng: 150.9041924
  },
  {
    slug: "halcyon-coves",
    name: "Halcyon Coves",
    suburb: "Aura",
    state: "QLD",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 431,
    operatorSlug: "stockland-halcyon",
    amenities: ["Lagoon-style pool", "Community gardens", "Bowling green", "Recreation precinct"],
    summary:
      "A Sunshine Coast community within the Aura masterplan, released in stages from 2024 across six sub-neighbourhoods.",
    lat: -26.833,
    lng: 153.083
  },
  {
    slug: "halcyon-ridge",
    name: "Halcyon Ridge",
    suburb: "Toowoomba",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 200,
    operatorSlug: "stockland-halcyon",
    amenities: ["Country Club with ballroom", "Heated indoor pool and spa", "Gym", "Tennis courts"],
    summary:
      "An established community acquired by Stockland from Living Gems Group, combining a regional Queensland setting with resort-style facilities.",
    lat: -27.5598,
    lng: 151.9507
  },
  {
    slug: "acacia-ponds-village",
    name: "Acacia Ponds Village",
    suburb: "Pambula",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 98,
    operatorSlug: "hampshire-villages",
    amenities: ["Community facilities", "Landscaped grounds"],
    summary:
      "An established Hampshire Villages community on the NSW South Coast, near the site of Hampshire's proposed Merimbula Lake Village expansion.",
    lat: -36.9333,
    lng: 149.8833
  },
  {
    slug: "kin-kora",
    name: "Kin Kora",
    suburb: "Gladstone",
    state: "QLD",
    type: "Affordable / Rental",
    status: "Under Development",
    homeCount: 109,
    operatorSlug: "eureka-group",
    amenities: ["In-ground pool", "Central amenities block"],
    summary:
      "A mixed residential and caravan park in regional Queensland being refurbished by Eureka Group to add affordable rental villas.",
    lat: -23.8433,
    lng: 151.2564
  },
  {
    slug: "brassall-village",
    name: "Brassall Village",
    suburb: "Brassall",
    state: "QLD",
    type: "Affordable / Rental",
    status: "Under Development",
    homeCount: 106,
    operatorSlug: "eureka-group",
    amenities: ["Community facilities (being refurbished)"],
    summary:
      "An Ipswich rental community expanding from its existing rental and land lease homes to 106 residences as part of an $11 million upgrade.",
    lat: -27.6112,
    lng: 152.7469
  },
  {
    slug: "kingaroy-rental-village",
    name: "Kingaroy Rental Village",
    suburb: "Kingaroy",
    state: "QLD",
    type: "Affordable / Rental",
    status: "Under Development",
    homeCount: 110,
    operatorSlug: "eureka-group",
    amenities: ["Independent living units"],
    summary:
      "A proposed seniors' rental village in regional Queensland, subject to council development approval for 110 one-bedroom units.",
    lat: -26.5406,
    lng: 151.8339
  },
  {
    slug: "gemlife-bribie-island",
    name: "GemLife Bribie Island",
    suburb: "Bribie Island",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 404,
    operatorSlug: "gemlife",
    amenities: ["Country club", "Swimming pool", "Bowls green"],
    summary:
      "One of GemLife's original Queensland communities north of Brisbane, spanning almost 25 hectares with resort-style facilities for over-50s homeowners.",
    lat: -27.0667,
    lng: 153.15
  },
  {
    slug: "gemlife-on-dean",
    name: "GemLife on Dean",
    suburb: "Rockhampton",
    state: "QLD",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 57,
    operatorSlug: "gemlife",
    amenities: ["Clubhouse", "Community facilities"],
    summary:
      "A boutique regional Queensland community rebranded from Aliria after GemLife's 2025 acquisition, with first residents settling from September 2025.",
    lat: -23.3791,
    lng: 150.51
  },
  {
    slug: "gemlife-new-gisborne",
    name: "GemLife New Gisborne",
    suburb: "New Gisborne",
    state: "VIC",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 247,
    operatorSlug: "gemlife",
    amenities: ["Cinema", "Café and dining area", "Swimming pool", "Library"],
    summary:
      "A heritage-inspired community in Victoria's Macedon Ranges, GemLife's second in the area after GemLife Woodend, with construction underway.",
    lat: -37.4667,
    lng: 144.5833
  },
  {
    slug: "lifestyle-phillip-island",
    name: "Lifestyle Phillip Island",
    suburb: "Cowes",
    state: "VIC",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 260,
    operatorSlug: "lifestyle-communities",
    amenities: ["Clubhouse", "Shared boat access", "Beach proximity"],
    summary:
      "A Phillip Island community close to the Cowes town centre and beach, part of Lifestyle Communities' Club Lifestyle program offering shared recreational boats.",
    lat: -38.4478,
    lng: 145.2394
  },
  {
    slug: "lifestyle-st-leonards",
    name: "Lifestyle St Leonards",
    suburb: "St Leonards",
    state: "VIC",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 170,
    operatorSlug: "lifestyle-communities",
    amenities: ["Beachside location", "Community clubhouse"],
    summary:
      "An expansion of Lifestyle Communities' existing St Leonards community on the Bellarine Peninsula, adding a second site nearby.",
    lat: -38.1167,
    lng: 144.7667
  },
  {
    slug: "lifestyle-merrifield",
    name: "Lifestyle Merrifield",
    suburb: "Mickleham",
    state: "VIC",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 187,
    operatorSlug: "lifestyle-communities",
    amenities: ["Access to master-planned town centre"],
    summary:
      "A future community within the master-planned Merrifield precinct in Melbourne's north, extending Lifestyle Communities' presence in the growth corridor.",
    lat: -37.5667,
    lng: 144.9333
  },
  {
    slug: "oasis-redhead",
    name: "Oasis Redhead",
    suburb: "Redhead",
    state: "NSW",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 252,
    operatorSlug: "hometown-australia",
    amenities: ["Outdoor pool and spa", "Gym and sauna", "Clubhouse with cinema"],
    summary:
      "A Lake Macquarie community being completed in stages after Hometown Australia's acquisition from Oasis Communities, with most homes already occupied.",
    lat: -33.0167,
    lng: 151.6167
  },
  {
    slug: "green-wattle-villages",
    name: "Green Wattle Villages",
    suburb: "Burpengary",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 430,
    operatorSlug: "hometown-australia",
    amenities: ["Community facilities"],
    summary:
      "One of Hometown Australia's earliest Queensland acquisitions, an established Burpengary community north of Brisbane with 430 home sites.",
    lat: -27.1667,
    lng: 152.95
  },
  {
    slug: "saltwood-lake-munmorah",
    name: "Saltwood Lake Munmorah",
    suburb: "Lake Munmorah",
    state: "NSW",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 58,
    operatorSlug: "hometown-australia",
    amenities: ["Lake Macquarie region location"],
    summary:
      "A greenfield Central Coast community approved for 58 homes, acquired by Hometown Australia as part of the Oasis Communities portfolio.",
    lat: -33.2167,
    lng: 151.5667
  },
  {
    slug: "palm-lake-resort-pelican-waters",
    name: "Palm Lake Resort Pelican Waters",
    suburb: "Pelican Waters",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 322,
    operatorSlug: "palm-lake-resort",
    amenities: ["Country club with wellness centre", "Bowling green", "Pool deck", "Cinema"],
    summary:
      "A Sunshine Coast resort built around a large new country club precinct, with more than 70 homeowners already settled ahead of full completion.",
    lat: -26.8167,
    lng: 153.1167
  },
  {
    slug: "palm-lake-resort-bargara",
    name: "Palm Lake Resort Bargara",
    suburb: "Bargara",
    state: "QLD",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 600,
    operatorSlug: "palm-lake-resort",
    amenities: ["Heated indoor and outdoor pools", "Tenpin bowling", "Gym", "Sauna and spa"],
    summary:
      "Set for a further 116-home expansion that will make it Palm Lake Group's largest resort, on the Bundaberg region's Coral Coast.",
    lat: -24.8167,
    lng: 152.4667
  },
  {
    slug: "palm-lake-resort-forster-lakes",
    name: "Palm Lake Resort Forster Lakes",
    suburb: "Forster",
    state: "NSW",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 400,
    operatorSlug: "palm-lake-resort",
    amenities: ["Swimming pool", "Tennis courts", "Recreation clubhouse", "Waterfront setting"],
    summary:
      "A Mid North Coast waterfront community, still under construction, positioned near the Belleair Country Club precinct.",
    lat: -32.1833,
    lng: 152.5167
  },
  {
    slug: "living-gems-moreton-bay",
    name: "Living Gems Moreton Bay",
    suburb: "Burpengary East",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 186,
    operatorSlug: "living-gems",
    amenities: ["Country Club", "Swimming pool", "Cinema", "Pickleball court"],
    summary:
      "A boutique Moreton Bay community where first residents moved in six months after construction began, part of a local cluster of 16 land lease projects.",
    lat: -27.1833,
    lng: 152.9667
  },
  {
    slug: "living-gems-rockhampton",
    name: "Living Gems Rockhampton",
    suburb: "Rockhampton",
    state: "QLD",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 351,
    operatorSlug: "living-gems",
    amenities: ["Clubhouse with golf simulator", "Indoor bowling", "Pool and spa", "Pickleball and tennis"],
    summary:
      "A proposed Central Queensland resort awaiting council assessment, planned as Living Gems' most northern site to date.",
    lat: -23.365,
    lng: 150.495
  },
  {
    slug: "living-gems-cotswold-hills",
    name: "Living Gems Cotswold Hills",
    suburb: "Toowoomba",
    state: "QLD",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 266,
    operatorSlug: "living-gems",
    amenities: ["Proposed community clubhouse"],
    summary:
      "A proposed over-50s resort on a rural-residential site west of Brisbane, lodged with Toowoomba council.",
    lat: -27.57,
    lng: 151.96
  },
  {
    slug: "lake-joondalup-lifestyle-village",
    name: "Lake Joondalup Lifestyle Village",
    suburb: "Joondalup",
    state: "WA",
    type: "Over-50s",
    status: "Established",
    homeCount: 316,
    operatorSlug: "serenitas",
    amenities: ["Community facilities"],
    summary:
      "An established, fully occupied Perth community and one of Serenitas' original Western Australian lifestyle villages.",
    lat: -31.7433,
    lng: 115.7669
  },
  {
    slug: "the-vantage-lifestyle-resort",
    name: "The Vantage Lifestyle Resort",
    suburb: "Vasse",
    state: "WA",
    type: "Over-50s",
    status: "Established",
    homeCount: 208,
    operatorSlug: "serenitas",
    amenities: ["Community facilities"],
    summary:
      "An established South West WA community near Busselton, neighboured by a new Serenitas site acquired from Stockland Halcyon.",
    lat: -33.6667,
    lng: 115.3333
  },
  {
    slug: "thyme-lifestyle-resort-hervey-bay",
    name: "Thyme Lifestyle Resort Hervey Bay",
    suburb: "Eli Waters",
    state: "QLD",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 359,
    operatorSlug: "serenitas",
    amenities: ["Clubhouse (new, under construction)", "Coastal location"],
    summary:
      "Serenitas' first Queensland development under its Thyme Lifestyle brand, still adding homes and a new multimillion-dollar clubhouse.",
    lat: -25.29,
    lng: 152.7833
  },
  {
    slug: "meadowbrooke",
    name: "Meadowbrooke",
    suburb: "Boyanup",
    state: "WA",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "aspen-group",
    amenities: ["Clubhouse", "Gym", "Bowling green", "Library", "Community garden", "BBQ area", "Bar"],
    summary:
      "An over-50s land lease community on the Preston River in Boyanup, 18km from Bunbury, with homes currently selling in Stage 4.",
    lat: -33.5333,
    lng: 115.7333
  },
  {
    slug: "sierra",
    name: "Sierra",
    suburb: "Wundowie",
    state: "WA",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "aspen-group",
    amenities: ["Clubhouse", "Gym", "Games room", "Library", "Shared kitchen", "Gated entry"],
    summary:
      "A rural over-50s land lease community about an hour from Perth in the Avon Valley, with views across farmland and a neighbouring golf course; final homes in Stage 3 selling now.",
    lat: -31.75,
    lng: 116.3667
  },
  {
    slug: "mandurah-gardens",
    name: "Mandurah Gardens",
    suburb: "Coodanup",
    state: "WA",
    type: "Over-50s",
    status: "Established",
    homeCount: 158,
    operatorSlug: "aspen-group",
    amenities: ["Clubhouse", "Swimming pool", "Bowling green", "Library", "Gated entry"],
    summary:
      "An established over-50s land lease village near the Serpentine River at Mandurah, close to shopping, medical and public transport.",
    lat: -32.5333,
    lng: 115.7167
  },
  {
    slug: "strathalbyn",
    name: "Strathalbyn",
    suburb: "Strathalbyn",
    state: "SA",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 79,
    operatorSlug: "aspen-group",
    amenities: ["Clubhouse", "Pool room", "Gym", "Bocce court", "Library", "Gated entry"],
    summary:
      "An over-50s lifestyle village in the countryside town of Strathalbyn, with final homes selling now.",
    lat: -35.2667,
    lng: 138.8833
  },
  {
    slug: "paralowie",
    name: "Paralowie",
    suburb: "Paralowie",
    state: "SA",
    type: "Over-50s",
    status: "Established",
    homeCount: 113,
    operatorSlug: "aspen-group",
    amenities: ["Clubhouse", "Swimming pool", "Community garden", "BBQ area", "Caravan storage", "Gated entry"],
    summary:
      "An established over-50s land lease village in Adelaide's north, set among tropical landscaping close to shops, cafes and parks.",
    lat: -34.7667,
    lng: 138.6167
  },
  {
    slug: "normanville",
    name: "Normanville",
    suburb: "Normanville",
    state: "SA",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 181,
    operatorSlug: "aspen-group",
    amenities: [],
    summary:
      "A new over-50s lifestyle village coming soon to the Fleurieu Peninsula, near Links Lady Bay Golf Resort and the coast.",
    lat: -35.3833,
    lng: 138.2833
  },
  {
    slug: "alexandrina-cove",
    name: "Alexandrina Cove",
    suburb: "Hindmarsh Island",
    state: "SA",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "aspen-group",
    amenities: ["Clubhouse", "Tennis court", "Putting green", "Pool room", "Media room", "Library", "Gym", "Bocce court", "BBQ area", "Caravan storage"],
    summary:
      "A waterfront over-50s community within the Coorong Quays marina on Hindmarsh Island, currently selling.",
    lat: -35.5333,
    lng: 138.8833
  },
  {
    slug: "four-lanterns",
    name: "Four Lanterns",
    suburb: "Leppington",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 102,
    operatorSlug: "aspen-group",
    amenities: ["Clubhouse", "Community garden", "BBQ area", "Gated entry"],
    summary:
      "An established over-50s land lease community on 10 acres of landscaped grounds near Leppington, close to Liverpool Hospital and local shops.",
    lat: -33.95,
    lng: 150.8167
  },
  {
    slug: "sweetwater-grove",
    name: "Sweetwater Grove",
    suburb: "Tomago",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 50,
    operatorSlug: "aspen-group",
    amenities: ["Swimming pool", "Clubhouse", "Community garden", "Bowling green", "BBQ area", "Caravan storage", "Gated entry"],
    summary:
      "An over-50s lifestyle community near Port Stephens and Newcastle, built around a private pond, with Stage 6 homes selling now.",
    lat: -32.8167,
    lng: 151.7167
  },
  {
    slug: "wodonga-gardens",
    name: "Wodonga Gardens",
    suburb: "West Wodonga",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "aspen-group",
    amenities: ["Clubhouse", "Pool room", "Plunge pool", "Pickleball court", "Library", "Gym", "Bowling green", "Bar", "Sauna", "Putting green"],
    summary:
      "An over-50s land lease community in West Wodonga close to local services, dining and golf, with Stage 5 homes selling now.",
    lat: -36.1167,
    lng: 146.8667
  },
  {
    slug: "gemlife-gold-coast",
    name: "GemLife Gold Coast",
    suburb: "Pimpama",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 365,
    operatorSlug: "gemlife",
    amenities: ["Country Club", "Infinity pool", "Indoor heated pool", "Gym", "Lawn bowls", "Bowling alley", "Cinema", "Library", "Bar"],
    summary:
      "A flagship over-50s resort community in Pimpama with a three-storey Country Club, close to Gold Coast beaches and Surfers Paradise.",
    lat: -27.8167,
    lng: 153.3167
  },
  {
    slug: "gemlife-cotswold-hills",
    name: "GemLife Cotswold Hills",
    suburb: "Cotswold Hills",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 205,
    operatorSlug: "gemlife",
    amenities: ["Clubhouse", "Indoor heated pool", "Lounge"],
    summary:
      "An over-50s resort community in the Toowoomba highlands, close to shopping, dining and healthcare services.",
    lat: -27.55,
    lng: 151.9
  },
  {
    slug: "gemlife-highfields-heights",
    name: "GemLife Highfields Heights",
    suburb: "Highfields Heights",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 366,
    operatorSlug: "gemlife",
    amenities: ["Indoor heated pool", "Gym", "Country Club", "BBQ facilities", "Clubhouse"],
    summary:
      "An over-50s resort community near Toowoomba backing onto a scenic nature reserve in the Great Dividing Range.",
    lat: -27.4667,
    lng: 151.95
  },
  {
    slug: "gemlife-highfields",
    name: "GemLife Highfields",
    suburb: "Highfields",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 316,
    operatorSlug: "gemlife",
    amenities: ["Indoor heated pool", "Lawn bowls", "Bowling alley", "Tennis court", "Billiards room", "Country Club"],
    summary:
      "An over-50s resort community in Toowoomba's northern region, with access to regional parks, gardens and wineries.",
    lat: -27.4667,
    lng: 151.95
  },
  {
    slug: "gemlife-moreton-bay",
    name: "GemLife Moreton Bay",
    suburb: "Burpengary East",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 625,
    operatorSlug: "gemlife",
    amenities: ["Country Club", "Lounge bar", "Billiards room", "Tenpin bowling", "Outdoor pool", "Walking trails"],
    summary:
      "An over-50s resort community set around private lakes and parklands near Deception Bay Conservation Park, close to Redcliffe and Scarborough.",
    lat: -27.15,
    lng: 152.95
  },
  {
    slug: "gemlife-elimbah",
    name: "GemLife Elimbah",
    suburb: "Elimbah",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 404,
    operatorSlug: "gemlife",
    amenities: ["Country Club", "Indoor heated pool", "Bowling alley", "Cinema", "Gym", "Lounge areas"],
    summary:
      "An over-50s resort community in the Moreton Bay region between Bribie Island, Brisbane and the Sunshine Coast.",
    lat: -27.0333,
    lng: 152.9333
  },
  {
    slug: "gemlife-kilcoy-greens",
    name: "GemLife Kilcoy Greens",
    suburb: "Woolmar",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 276,
    operatorSlug: "gemlife",
    amenities: ["Country Club", "Indoor heated pool", "Cinema", "Bar and lounge"],
    summary:
      "An over-50s resort community between Brisbane and the Sunshine Coast, set around a central lake with mountain views.",
    lat: -26.95,
    lng: 152.5667
  },
  {
    slug: "gemlife-beachmere-waterfront",
    name: "GemLife Beachmere Waterfront",
    suburb: "Beachmere",
    state: "QLD",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 335,
    operatorSlug: "gemlife",
    amenities: ["Waterfront clubhouse", "Walking and cycling trails", "Country Club", "Private tidal lake"],
    summary:
      "A waterfront over-50s resort community under development in the Greater Moreton Bay region, close to Caboolture and Bribie Island.",
    lat: -27.1167,
    lng: 153.0333
  },
  {
    slug: "gemlife-lighthouse-bay",
    name: "GemLife Lighthouse Bay",
    suburb: "Burnett Heads",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 437,
    operatorSlug: "gemlife",
    amenities: ["Country Club", "Indoor heated pool", "Outdoor resort pool and spa", "Cinema", "Library", "Bar", "Marina access"],
    summary:
      "A coastal over-50s resort community in Bundaberg with marina access, close to Bargara and Mon Repos beaches.",
    lat: -24.7667,
    lng: 152.3833
  },
  {
    slug: "gemlife-logan-grove",
    name: "GemLife Logan Grove",
    suburb: "Logan",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 282,
    operatorSlug: "gemlife",
    amenities: ["Country Club", "Pet-friendly", "Gated entry", "Shared recreational spaces"],
    summary:
      "A secure, gated and pet-friendly over-50s resort community in southeast Queensland, close to Brisbane and the Gold Coast.",
    lat: -27.6333,
    lng: 153.1167
  },
  {
    slug: "gemlife-glass-house-mountains",
    name: "GemLife Glass House Mountains",
    suburb: "Glass House Mountains",
    state: "QLD",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 251,
    operatorSlug: "gemlife",
    amenities: ["Country Club", "Walking trails"],
    summary:
      "An over-50s resort community under development in the Sunshine Coast Hinterland, bordered by a macadamia plantation with mountain views.",
    lat: -26.8833,
    lng: 152.95
  },
  {
    slug: "gemlife-maroochy-quays",
    name: "GemLife Maroochy Quays",
    suburb: "Maroochydore",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 246,
    operatorSlug: "gemlife",
    amenities: ["Country Club", "Indoor heated pool", "Outdoor resort pool and spa", "Bowling alley", "Gym", "Bar"],
    summary:
      "A waterfront over-50s resort community between the Maroochy River and Eudlo Creek Nature Reserve on the Sunshine Coast.",
    lat: -26.65,
    lng: 153.1
  },
  {
    slug: "gemlife-pacific-paradise",
    name: "GemLife Pacific Paradise",
    suburb: "Pacific Paradise",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 96,
    operatorSlug: "gemlife",
    amenities: ["Country Club with rooftop bar", "Indoor heated and outdoor pools", "Lawn bowls", "Library", "BBQ facilities"],
    summary:
      "An over-50s resort community 6km from central Maroochydore, built around an $11.2 million Country Club.",
    lat: -26.6333,
    lng: 153.0833
  },
  {
    slug: "gemlife-palmwoods",
    name: "GemLife Palmwoods",
    suburb: "Palmwoods",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 204,
    operatorSlug: "gemlife",
    amenities: ["Country Club", "Indoor heated pool", "Lawn bowls", "Bowling alley", "Tennis court", "Golf simulator", "Sauna", "Bar"],
    summary:
      "An over-50s resort community in the Sunshine Coast hinterland surrounded by rainforest views and the Blackall Range.",
    lat: -26.6833,
    lng: 152.95
  },
  {
    slug: "gemlife-currumbin-waters",
    name: "GemLife Currumbin Waters",
    suburb: "Currumbin Waters",
    state: "QLD",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 205,
    operatorSlug: "gemlife",
    amenities: ["Country Club", "205 apartments planned"],
    summary:
      "A planned over-50s resort on the southern Gold Coast featuring land lease apartments, close to beaches and Gold Coast Airport.",
    lat: -28.1667,
    lng: 153.4667
  },
  {
    slug: "gemlife-shoal-point",
    name: "GemLife Shoal Point",
    suburb: "Shoal Point",
    state: "QLD",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 232,
    operatorSlug: "gemlife",
    amenities: ["Country Club"],
    summary:
      "A planned over-50s resort community in Mackay's Northern Beaches, 1km from Bucasia Beach.",
    lat: -21.0166,
    lng: 149.1422
  },
  {
    slug: "gemlife-tweed-waters",
    name: "GemLife Tweed Waters",
    suburb: "Tweed Heads South",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 96,
    operatorSlug: "gemlife",
    amenities: ["Country Club", "Rooftop pool", "Tenpin bowling", "Cinema", "Gym", "Library", "Lawn bowls", "Golf simulator"],
    summary:
      "A waterfront over-50s resort community on the Tweed River, between the Gold Coast and Northern NSW.",
    lat: -28.1959882,
    lng: 153.524148
  },
  {
    slug: "gemlife-rainbow-beach",
    name: "GemLife Rainbow Beach",
    suburb: "Lake Cathie",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "gemlife",
    amenities: ["Country Club", "Indoor heated pool", "Tenpin bowling", "Cinema", "Gym", "Library", "Lawn bowls", "Golf simulator"],
    summary:
      "An over-50s resort community in coastal Lake Cathie near Port Macquarie, close to beaches and wineries.",
    lat: -31.5667,
    lng: 152.85
  },
  {
    slug: "gemlife-woodend",
    name: "GemLife Woodend",
    suburb: "Woodend",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 245,
    operatorSlug: "gemlife",
    amenities: ["Country Club", "Indoor heated pool", "Cinema", "Gym", "Library", "Tenpin bowling", "BBQ facilities"],
    summary:
      "An over-50s resort community in Victoria's Macedon Ranges, balancing country living with access to Melbourne.",
    lat: -37.35,
    lng: 144.5333
  },
  {
    slug: "gemlife-strathalbyn",
    name: "GemLife Strathalbyn",
    suburb: "Strathalbyn",
    state: "SA",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 262,
    operatorSlug: "gemlife",
    amenities: ["Country Club planned", "262 homes planned"],
    summary:
      "GemLife's first planned South Australian resort, in the historic township of Strathalbyn near the Adelaide Hills and Fleurieu Peninsula.",
    lat: -35.2667,
    lng: 138.8833
  },
  {
    slug: "lakeside-forster",
    name: "Lakeside Forster",
    suburb: "Forster",
    state: "NSW",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 0,
    operatorSlug: "hampshire-villages",
    amenities: ["Community centre", "Alfresco deck", "Lounge and multipurpose spaces"],
    summary:
      "An over-50s land lease community in Forster on the NSW Mid North Coast, with a community centre and display homes soon completing.",
    lat: -32.1806,
    lng: 152.5083
  },
  {
    slug: "pelican-shores",
    name: "Pelican Shores",
    suburb: "Leopold",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "hampshire-villages",
    amenities: ["Waterfront location"],
    summary:
      "A waterfront over-50s land lease village near Geelong, with established homes currently for sale and a limited release of new 3-bedroom homes.",
    lat: -38.1833,
    lng: 144.4333
  },
  {
    slug: "bayway-village",
    name: "Bayway Village",
    suburb: "Fern Bay",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "hampshire-villages",
    amenities: ["Indoor swimming pool", "Community centre", "Cinema", "Bowls court", "Pickleball court"],
    summary:
      "An over-50s land lease community near Newcastle, with homes from $530K and no stamp duty, council rates or exit fees.",
    lat: -32.8627,
    lng: 151.7992
  },
  {
    slug: "banksia-waters",
    name: "Banksia Waters",
    suburb: "Tweed Heads West",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Clubhouse", "Swimming pool", "Croquet court", "Community bus"],
    summary:
      "A 110-acre over-50s resort-style community in Tweed Heads West with an active social calendar, close to subtropical rainforest and beaches.",
    lat: -28.1667,
    lng: 153.5167
  },
  {
    slug: "bayside",
    name: "Bayside",
    suburb: "Tingalpa",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Clubhouse", "Swimming pool", "Boat and caravan storage"],
    summary:
      "An over-50s land lease community in Brisbane's inner eastern suburbs, close to Moreton Bay.",
    lat: -27.4667,
    lng: 153.1167
  },
  {
    slug: "beachfront",
    name: "Beachfront",
    suburb: "Hallidays Point",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 3,
    operatorSlug: "hometown-australia",
    amenities: ["Clubhouse", "Swimming pool", "BBQ area"],
    summary:
      "A coastal over-50s community adjacent to Black Head Beach on the NSW Mid North Coast.",
    lat: -32.35,
    lng: 152.5333
  },
  {
    slug: "birubi-beach",
    name: "Birubi Beach",
    suburb: "Port Stephens",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "BBQ and community areas", "Beach access"],
    summary:
      "An over-50s coastal community near Port Stephens beaches.",
    lat: -32.7167,
    lng: 152.15
  },
  {
    slug: "boronia-range",
    name: "Boronia Range",
    suburb: "Springdale Heights",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Bowling green", "Community garden"],
    summary:
      "An over-55s lifestyle community in regional NSW near Albury.",
    lat: -36.05,
    lng: 146.9333
  },
  {
    slug: "bremer-waters",
    name: "Bremer Waters",
    suburb: "Moores Pocket",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 178,
    operatorSlug: "hometown-australia",
    amenities: ["Clubhouse", "Swimming pool", "Boat and caravan storage"],
    summary:
      "An over-55s land lease community on the Bremer River near Ipswich.",
    lat: -27.6167,
    lng: 152.7667
  },
  {
    slug: "bridge-street",
    name: "Bridge Street",
    suburb: "Wilsonton",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Bowling green", "Croquet court"],
    summary:
      "An established over-50s community in Toowoomba's Wilsonton area.",
    lat: -27.55,
    lng: 151.9333
  },
  {
    slug: "cobb-haven",
    name: "Cobb Haven",
    suburb: "Moama",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Heated indoor pool", "Tennis court", "Community bus"],
    summary:
      "An established over-50s lifestyle community on the shores of the Murray River in Moama.",
    lat: -36.1,
    lng: 144.75
  },
  {
    slug: "dune-rise",
    name: "Dune Rise",
    suburb: "Belmont",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Library", "BBQ area"],
    summary:
      "An established over-50s community in Belmont near Lake Macquarie and Nine Mile Beach.",
    lat: -33.0333,
    lng: 151.6667
  },
  {
    slug: "edgewater",
    name: "Edgewater",
    suburb: "Bli Bli",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Tennis court", "Lawn bowls", "Boat and caravan storage"],
    summary:
      "An over-50s community on the Maroochy River near Sunshine Coast beaches.",
    lat: -26.65,
    lng: 152.9667
  },
  {
    slug: "encounter-bay",
    name: "Encounter Bay",
    suburb: "Encounter Bay",
    state: "SA",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 265,
    operatorSlug: "hometown-australia",
    amenities: ["Clubhouse", "Indoor swimming pool", "Bowling green", "Pickleball court"],
    summary:
      "An approved over-55s land lease community in the Fleurieu Peninsula, planned for 265 homes with construction targeted from 2027.",
    lat: -35.5833,
    lng: 138.6167
  },
  {
    slug: "glenfern",
    name: "Glenfern",
    suburb: "Thrumster",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 151,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Bowling green", "Sports bar and cinema"],
    summary:
      "A master-planned over-50s community 10 minutes from Port Macquarie.",
    lat: -31.4667,
    lng: 152.85
  },
  {
    slug: "grevillea-waters",
    name: "Grevillea Waters",
    suburb: "Yamba",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Game room", "Library"],
    summary:
      "An over-50s lifestyle community in coastal Yamba.",
    lat: -29.4333,
    lng: 153.35
  },
  {
    slug: "hazelmere",
    name: "Hazelmere",
    suburb: "Eli Waters",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Clubhouse", "Swimming pool", "Bowling green"],
    summary:
      "An established lakefront over-50s community between the coast and Condor Lake in Hervey Bay.",
    lat: -25.3,
    lng: 152.8167
  },
  {
    slug: "heritage",
    name: "Heritage",
    suburb: "Toukley",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Gym and wellness centre", "BBQ area"],
    summary:
      "An established over-50s community bordered by Wyrrabalong National Park and Tuggerah Lake.",
    lat: -33.2833,
    lng: 151.5167
  },
  {
    slug: "homestead",
    name: "Homestead",
    suburb: "Salamander Bay",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 2,
    operatorSlug: "hometown-australia",
    amenities: ["Clubhouse", "Swimming pool", "Community bus"],
    summary:
      "An over-50s land lease community in Port Stephens with coastal and national park access.",
    lat: -32.7167,
    lng: 152.1167
  },
  {
    slug: "ironbark",
    name: "Ironbark",
    suburb: "Aspley",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Clubhouse", "Community bus"],
    summary:
      "An over-50s land lease community in Brisbane's northern suburbs near Little Cabbage Tree Creek.",
    lat: -27.3667,
    lng: 153.0167
  },
  {
    slug: "jacaranda-grove",
    name: "Jacaranda Grove",
    suburb: "Grafton",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 3,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Boat and caravan storage", "BBQ area"],
    summary:
      "An over-50s lifestyle community in rural Grafton with access to national parks and beaches.",
    lat: -29.6833,
    lng: 152.9333
  },
  {
    slug: "kingfisher-gardens",
    name: "Kingfisher Gardens",
    suburb: "Kearneys Spring",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 3,
    operatorSlug: "hometown-australia",
    amenities: ["Heated swimming pool", "Gym and wellness centre", "Bowling green"],
    summary:
      "An over-55s lifestyle community near Toowoomba's Garden City attractions.",
    lat: -27.6,
    lng: 151.9333
  },
  {
    slug: "lake-macquarie",
    name: "Lake Macquarie",
    suburb: "Morisset",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 1,
    operatorSlug: "hometown-australia",
    amenities: ["Solar heated swimming pool", "Clubhouse", "Boat and caravan storage"],
    summary:
      "An over-55s lifestyle community spanning 4+ hectares in Morisset.",
    lat: -33.1,
    lng: 151.4833
  },
  {
    slug: "lakeland",
    name: "Lakeland",
    suburb: "Buff Point",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 3,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Clubhouse", "Community bus"],
    summary:
      "A 12-acre lakefront over-50s community on Budgewoi Lake with over 10km of foreshore walkways.",
    lat: -33.35,
    lng: 151.5667
  },
  {
    slug: "lakeside",
    name: "Lakeside",
    suburb: "Chain Valley Bay",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Clubhouse", "Swimming pool", "Lakefront location"],
    summary:
      "A boutique over-55s lifestyle community on the shores of Lake Macquarie.",
    lat: -33.15,
    lng: 151.5833
  },
  {
    slug: "laurieton",
    name: "Laurieton",
    suburb: "Kew",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 3,
    operatorSlug: "hometown-australia",
    amenities: ["Wellness centre and indoor heated pool", "Clubhouse", "Lawn bowls"],
    summary:
      "An award-winning over-55s community on the Mid North Coast alongside Queens Lake.",
    lat: -31.65,
    lng: 152.7833
  },
  {
    slug: "lorikeet",
    name: "Lorikeet",
    suburb: "Arrawarra",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 52,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Tennis court", "Beach access"],
    summary:
      "An over-50s lifestyle community between the bush and the beach on the NSW North Coast.",
    lat: -30.05,
    lng: 153.1833
  },
  {
    slug: "lumora",
    name: "Lumora",
    suburb: "Merrifield",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 196,
    operatorSlug: "hometown-australia",
    amenities: ["Heated indoor pool", "Gym and wellness centre", "Cinema"],
    summary:
      "A boutique over-55s community in Melbourne's growing northern precinct.",
    lat: -37.55,
    lng: 144.9167
  },
  {
    slug: "macquarie-shores",
    name: "Macquarie Shores",
    suburb: "Doyalson North",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 3,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Tennis court", "Golf driving range"],
    summary:
      "An over-55 land lease community on the Central Coast near Lake Munmorah.",
    lat: -33.2,
    lng: 151.55
  },
  {
    slug: "maroochy-shores",
    name: "Maroochy Shores",
    suburb: "Maroochydore",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Clubhouse", "Swimming pool", "BBQ area"],
    summary:
      "An established over-50s community on Queensland's Sunshine Coast with beach and waterway access.",
    lat: -26.65,
    lng: 153.1
  },
  {
    slug: "myrtle-glen",
    name: "Myrtle Glen",
    suburb: "Stanhope Gardens",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Craft room", "Community garden and library"],
    summary:
      "An over-50s lifestyle community in northwest Sydney with active social clubs.",
    lat: -33.7167,
    lng: 150.9167
  },
  {
    slug: "nepean-shores",
    name: "Nepean Shores",
    suburb: "Penrith",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 3,
    operatorSlug: "hometown-australia",
    amenities: ["Clubhouse", "Swimming pool", "BBQ areas"],
    summary:
      "An over-55s community opposite the Nepean River in Penrith.",
    lat: -33.75,
    lng: 150.6833
  },
  {
    slug: "newport",
    name: "Newport",
    suburb: "Port Macquarie",
    state: "NSW",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Gym and pool facilities", "Community library and games room"],
    summary:
      "A planned residential community in Port Macquarie close to beaches and Sea Acres National Park.",
    lat: -31.4333,
    lng: 152.9167
  },
  {
    slug: "oaklands",
    name: "Oaklands",
    suburb: "Windang",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Waterfront location", "Clubhouse", "Heated swimming pool", "Boat and caravan storage"],
    summary:
      "A 17-acre waterfront over-50s community on Lake Illawarra near Shellharbour.",
    lat: -34.55,
    lng: 150.8667
  },
  {
    slug: "ocean-breeze",
    name: "Ocean Breeze",
    suburb: "Redhead",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Clubhouse", "Library"],
    summary:
      "An established over-50s beachside community on Nine Mile Beach in Redhead.",
    lat: -33.0,
    lng: 151.7167
  },
  {
    slug: "orianna",
    name: "Orianna",
    suburb: "Sandstone Point",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Heated swimming pool", "Clubhouse", "Community bus"],
    summary:
      "A master-planned over-50s lifestyle community in Moreton Bay.",
    lat: -27.05,
    lng: 153.05
  },
  {
    slug: "parkside",
    name: "Parkside",
    suburb: "Yamba",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 3,
    operatorSlug: "hometown-australia",
    amenities: ["Clubhouse", "Swimming pool", "Bowling green"],
    summary:
      "An exclusive master-planned over-55s land lease community in coastal Yamba.",
    lat: -29.4333,
    lng: 153.35
  },
  {
    slug: "red-gum",
    name: "Red Gum",
    suburb: "Coombabah",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 2,
    operatorSlug: "hometown-australia",
    amenities: ["Clubhouse", "Swimming pool", "Bowling green"],
    summary:
      "An over-55s lifestyle community on the Gold Coast near natural reserves and beaches.",
    lat: -27.9333,
    lng: 153.3833
  },
  {
    slug: "redbank-palms",
    name: "Redbank Palms",
    suburb: "Redbank",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Bowling green", "Community bus", "Boat and caravan storage"],
    summary:
      "An established over-55s lifestyle community near Brisbane.",
    lat: -27.6333,
    lng: 152.8667
  },
  {
    slug: "redlands",
    name: "Redlands",
    suburb: "Birkdale",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Lawn bowls green", "Vegetable garden"],
    summary:
      "An over-50s lifestyle community in bayside Birkdale, 30 minutes from Brisbane CBD.",
    lat: -27.5167,
    lng: 153.2333
  },
  {
    slug: "regal-waters",
    name: "Regal Waters",
    suburb: "Bethania",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Clubhouse", "Swimming pool", "Boat and caravan storage"],
    summary:
      "An established over-50s community on the Logan River.",
    lat: -27.6889489,
    lng: 153.1607535
  },
  {
    slug: "river-terraces",
    name: "River Terraces",
    suburb: "Goodna",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Clubhouse", "Boat and caravan storage"],
    summary:
      "A well-established over-55s community on the Brisbane River banks in Goodna.",
    lat: -27.6167,
    lng: 152.9
  },
  {
    slug: "riverside",
    name: "Riverside",
    suburb: "Evans Head",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 3,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Clubhouse", "Community bus", "BBQ area"],
    summary:
      "An over-50s lifestyle community on the Evans River in Northern NSW.",
    lat: -29.1167,
    lng: 153.4333
  },
  {
    slug: "rosetta",
    name: "Rosetta",
    suburb: "Victor Harbor",
    state: "SA",
    type: "Over-50s",
    status: "Established",
    homeCount: 3,
    operatorSlug: "hometown-australia",
    amenities: ["Clubhouse", "Boat and caravan storage", "Hair and beauty salon"],
    summary:
      "A 40-acre established over-50s community near Encounter Bay.",
    lat: -35.5667,
    lng: 138.6167
  },
  {
    slug: "sanctuary",
    name: "Sanctuary",
    suburb: "Lennox Head",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Two swimming pools", "Tennis court", "Indoor bowls room"],
    summary:
      "A seaside over-55s lifestyle community near Lennox Head's beaches.",
    lat: -28.7833,
    lng: 153.6
  },
  {
    slug: "sandy-shores",
    name: "Sandy Shores",
    suburb: "Salamander Bay",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Clubhouse", "Proximity to Birubi Beach and Nelson Bay"],
    summary:
      "A master-planned over-50s lifestyle community in Port Stephens.",
    lat: -32.7167,
    lng: 152.1167
  },
  {
    slug: "sea-winds",
    name: "Sea Winds",
    suburb: "Anna Bay",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Three swimming pools", "Clubhouse", "Tennis court"],
    summary:
      "A well-established over-50s community on the Tomaree Peninsula in Port Stephens.",
    lat: -32.7833,
    lng: 152.0833
  },
  {
    slug: "seachange",
    name: "Seachange",
    suburb: "Goolwa",
    state: "SA",
    type: "Over-50s",
    status: "Established",
    homeCount: 181,
    operatorSlug: "hometown-australia",
    amenities: ["Wellness centre with gym and pool", "Bowling green", "Community vegetable garden"],
    summary:
      "A coastal over-50s community on the Fleurieu Peninsula where the Murray River meets the Southern Ocean, about an hour from Adelaide.",
    lat: -35.5,
    lng: 138.7833
  },
  {
    slug: "snappy-gums",
    name: "Snappy Gums",
    suburb: "Sussex Inlet",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 1,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Clubhouse", "Boat and caravan storage"],
    summary:
      "An over-50s bushland community near Conjola National Park.",
    lat: -35.15,
    lng: 150.55
  },
  {
    slug: "suncoast",
    name: "Suncoast",
    suburb: "Ulladulla",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Clubhouse", "Swimming pool", "Community areas"],
    summary:
      "An over-50s coastal community combining beach access and bushland surroundings.",
    lat: -35.35,
    lng: 150.4667
  },
  {
    slug: "suncrest",
    name: "Suncrest",
    suburb: "Coombabah",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 219,
    operatorSlug: "hometown-australia",
    amenities: ["Indoor heated swimming pool", "Bowling green", "Clubhouse"],
    summary:
      "A well-established over-50s community in Coombabah on the Gold Coast.",
    lat: -27.9333,
    lng: 153.3833
  },
  {
    slug: "sunrise",
    name: "Sunrise",
    suburb: "Port Stephens",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Two swimming pools and wellness centre", "Clubhouse", "Boat and caravan storage"],
    summary:
      "A resort-style over-55s community in Port Stephens between beaches and countryside.",
    lat: -32.7167,
    lng: 152.15
  },
  {
    slug: "tamarind-place",
    name: "Tamarind Place",
    suburb: "Norman Gardens",
    state: "QLD",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Gym, pool and spa", "Cinema and library", "Lawn bowls"],
    summary:
      "A planned residential community on the Capricorn Coast near the Fitzroy River.",
    lat: -23.3667,
    lng: 150.5333
  },
  {
    slug: "taskers",
    name: "Taskers",
    suburb: "Port Macquarie",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Beach access", "Hastings River access", "BBQ areas"],
    summary:
      "An established over-50s coastal community at the mouth of the Hastings River.",
    lat: -31.4333,
    lng: 152.9167
  },
  {
    slug: "teraglin-lakeshore",
    name: "Teraglin Lakeshore",
    suburb: "Chain Valley Bay",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Clubhouse", "Swimming pool", "Bowling green"],
    summary:
      "A 23-acre over-50s lakefront community on Lake Macquarie with a new clubhouse under construction.",
    lat: -33.15,
    lng: 151.5833
  },
  {
    slug: "terrigal-sands",
    name: "Terrigal Sands",
    suburb: "Terrigal",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 1,
    operatorSlug: "hometown-australia",
    amenities: ["Beach access", "BBQ areas and community garden"],
    summary:
      "An established over-50s lifestyle community near Terrigal Beach on the Central Coast.",
    lat: -33.45,
    lng: 151.4333
  },
  {
    slug: "the-dunes",
    name: "The Dunes",
    suburb: "Sussex Inlet",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 2,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Clubhouse", "Tennis court"],
    summary:
      "A bushland-set over-50s community near Conjola National Park on the South Coast.",
    lat: -35.15,
    lng: 150.55
  },
  {
    slug: "the-pines",
    name: "The Pines",
    suburb: "Woolgoolga",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Clubhouse", "Community bus"],
    summary:
      "An established over-50s lifestyle village alongside Hearnes Lake, within walking distance of the beach.",
    lat: -30.1167,
    lng: 153.2
  },
  {
    slug: "the-retreat",
    name: "The Retreat",
    suburb: "Port Macquarie",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 3,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Bowling green", "Boat and caravan storage"],
    summary:
      "An established over-50s community in Port Macquarie among waterways and national parks.",
    lat: -31.4333,
    lng: 152.9167
  },
  {
    slug: "the-sanctuary",
    name: "The Sanctuary",
    suburb: "Redhead",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Two swimming pools", "Bowling green", "Tennis court"],
    summary:
      "A 15-acre over-55s lifestyle community in the Lake Macquarie region, within walking distance of Redhead Beach.",
    lat: -33.0,
    lng: 151.7167
  },
  {
    slug: "the-springs",
    name: "The Springs",
    suburb: "Greenbank",
    state: "QLD",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 2,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Bowling green", "Boat and caravan storage"],
    summary:
      "A master-planned over-50s community offering country-style living near Brisbane.",
    lat: -27.7109,
    lng: 153.0336
  },
  {
    slug: "twin-cedars",
    name: "Twin Cedars",
    suburb: "Beerburrum",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "hometown-australia",
    amenities: ["Heated community pool and spa", "Woodworking room", "Community vegetable garden"],
    summary:
      "An established over-50s community in the Sunshine Coast hinterland near the Australia Zoo.",
    lat: -26.9333,
    lng: 152.95
  },
  {
    slug: "valhalla",
    name: "Valhalla",
    suburb: "Chain Valley Bay",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 258,
    operatorSlug: "hometown-australia",
    amenities: ["Swimming pool", "Clubhouse", "Community bus", "Boat and caravan storage"],
    summary:
      "A 70-acre over-50s lifestyle community 450 metres from Lake Macquarie.",
    lat: -33.15,
    lng: 151.5833
  },
  {
    slug: "ingenia-lifestyle-ettalong-beach",
    name: "Ingenia Lifestyle Ettalong Beach",
    suburb: "Ettalong Beach",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 116,
    operatorSlug: "ingenia-communities",
    amenities: ["Swimming pool", "Lake waterfront access"],
    summary:
      "A coastal over-55s community on Lake Munmorah's shores, close to shopping, medical facilities and bowling clubs.",
    lat: -33.5167,
    lng: 151.35
  },
  {
    slug: "ingenia-lifestyle-sunnylake-shores",
    name: "Ingenia Lifestyle Sunnylake Shores",
    suburb: "Halekulani",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 127,
    operatorSlug: "ingenia-communities",
    amenities: ["Lakefront location", "Pet-friendly"],
    summary:
      "An over-55s lakeside community on Lake Munmorah with no exit fees and no stamp duty.",
    lat: -33.2,
    lng: 151.55
  },
  {
    slug: "ingenia-lifestyle-hunter-valley",
    name: "Ingenia Lifestyle Hunter Valley",
    suburb: "Cessnock",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 115,
    operatorSlug: "ingenia-communities",
    amenities: ["Resort-style facilities", "Community gathering spaces", "Landscaped gardens"],
    summary:
      "An over-55s lifestyle community in rural Cessnock in the Hunter Valley.",
    lat: -32.8333,
    lng: 151.35
  },
  {
    slug: "ingenia-lifestyle-plantations",
    name: "Ingenia Lifestyle Plantations",
    suburb: "Woolgoolga",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 191,
    operatorSlug: "ingenia-communities",
    amenities: ["Resort-style pool", "Bowling green", "Gym", "Clubhouse"],
    summary:
      "A beachside over-55s community near Coffs Harbour, with resort-style enhancements planned.",
    lat: -30.1167,
    lng: 153.2
  },
  {
    slug: "ingenia-lifestyle-south-west-rocks",
    name: "Ingenia Lifestyle South West Rocks",
    suburb: "South West Rocks",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 278,
    operatorSlug: "ingenia-communities",
    amenities: ["Resort-style facilities", "River views"],
    summary:
      "An established over-55s community on the NSW North Coast with river and scenic views.",
    lat: -30.8833,
    lng: 153.0333
  },
  {
    slug: "ingenia-lifestyle-anna-bay",
    name: "Ingenia Lifestyle Anna Bay",
    suburb: "Anna Bay",
    state: "NSW",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 0,
    operatorSlug: "ingenia-communities",
    amenities: ["Coastal surroundings", "Community spaces"],
    summary:
      "A new, smaller-scale over-55s coastal community coming to Anna Bay.",
    lat: -32.7833,
    lng: 152.0833
  },
  {
    slug: "ingenia-lifestyle-element",
    name: "Ingenia Lifestyle Element",
    suburb: "Fullerton Cove",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 54,
    operatorSlug: "ingenia-communities",
    amenities: ["Two clubhouses", "Outdoor pool", "Cinema", "Lawn bowls", "Golf putting green"],
    summary:
      "An over-55s community near Newcastle with two award-winning clubhouses; final 10 homes now selling.",
    lat: -32.8333,
    lng: 151.75
  },
  {
    slug: "ingenia-lifestyle-latitude-one",
    name: "Ingenia Lifestyle Latitude One",
    suburb: "Anna Bay",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 270,
    operatorSlug: "ingenia-communities",
    amenities: ["Clubhouse", "Indoor and outdoor pools", "Gym, spa and sauna", "Bowling green"],
    summary:
      "An award-winning over-55s community in Port Stephens, expanding with a second clubhouse due early 2027.",
    lat: -32.7833,
    lng: 152.0833
  },
  {
    slug: "ingenia-lifestyle-natura",
    name: "Ingenia Lifestyle Natura",
    suburb: "Bobs Farm",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 72,
    operatorSlug: "ingenia-communities",
    amenities: ["Infinity-edge lap pool", "Wellness club", "Lawn bowling green", "Lakeside clubhouse"],
    summary:
      "A lakeside over-55s community in Port Stephens, with final homes now selling.",
    lat: -32.75,
    lng: 152.05
  },
  {
    slug: "ingenia-lifestyle-lake-conjola",
    name: "Ingenia Lifestyle Lake Conjola",
    suburb: "Lake Conjola",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 3,
    operatorSlug: "ingenia-communities",
    amenities: ["Swimming pool", "Billiards room", "Fitness centre", "Dining facilities"],
    summary:
      "A waterfront over-55s lifestyle community on the NSW South Coast.",
    lat: -35.2667,
    lng: 150.4769
  },
  {
    slug: "ingenia-lifestyle-nepean-river",
    name: "Ingenia Lifestyle Nepean River",
    suburb: "Emu Plains",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 150,
    operatorSlug: "ingenia-communities",
    amenities: ["Riverside location", "Social engagement programs"],
    summary:
      "A 55+ lifestyle community on the Nepean River near the Blue Mountains foothills.",
    lat: -33.75,
    lng: 150.65
  },
  {
    slug: "ingenia-lifestyle-stoney-creek",
    name: "Ingenia Lifestyle Stoney Creek",
    suburb: "Marsden Park",
    state: "NSW",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 228,
    operatorSlug: "ingenia-communities",
    amenities: ["Community facilities (being renewed)"],
    summary:
      "An over-55s community in northwest Sydney, with facilities and housing being renewed.",
    lat: -33.7217461,
    lng: 150.8308865
  },
  {
    slug: "ingenia-lifestyle-seagrove",
    name: "Ingenia Lifestyle Seagrove",
    suburb: "Yeppoon",
    state: "QLD",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 322,
    operatorSlug: "ingenia-communities",
    amenities: ["Swimming pool", "Lawn bowls", "Community lounge and dining"],
    summary:
      "A resort-style over-55s community coming soon to Yeppoon.",
    lat: -23.15,
    lng: 150.75
  },
  {
    slug: "ingenia-lifestyle-darlingview",
    name: "Ingenia Lifestyle Darlingview",
    suburb: "Highfields",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 561,
    operatorSlug: "ingenia-communities",
    amenities: ["Community bar", "Bowling green", "Workshop", "Dog park"],
    summary:
      "A new over-55s resort-style community 17km north of Toowoomba, with its first home release now selling.",
    lat: -27.4667,
    lng: 151.95
  },
  {
    slug: "seachange-toowoomba",
    name: "Seachange Toowoomba",
    suburb: "Toowoomba",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 167,
    operatorSlug: "ingenia-communities",
    amenities: ["Indoor and outdoor pools", "Country Club", "Bowling greens", "Gym"],
    summary:
      "A premium over-55s lifestyle community in Toowoomba with 5-star Country Club facilities.",
    lat: -27.5667,
    lng: 151.95
  },
  {
    slug: "ingenia-lifestyle-millers-glen",
    name: "Ingenia Lifestyle Millers Glen",
    suburb: "Beaudesert",
    state: "QLD",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 91,
    operatorSlug: "ingenia-communities",
    amenities: ["Resort-style pool and spa", "Pickleball courts", "Bowling green"],
    summary:
      "An over-50s lifestyle community in rural Beaudesert, with off-the-plan homes available.",
    lat: -27.9833,
    lng: 152.9833
  },
  {
    slug: "seachange-arundel",
    name: "Seachange Arundel",
    suburb: "Arundel",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 440,
    operatorSlug: "ingenia-communities",
    amenities: ["Country Club", "Indoor and outdoor pools", "Lawn bowling green", "Tennis courts"],
    summary:
      "A gated over-55s resort-style community on the Gold Coast with a 5-star Country Club.",
    lat: -27.9333,
    lng: 153.3667
  },
  {
    slug: "seachange-emerald-lakes",
    name: "Seachange Emerald Lakes",
    suburb: "Carrara",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 126,
    operatorSlug: "ingenia-communities",
    amenities: ["Heated indoor pool", "Resort-style outdoor pool", "Clubhouse", "Library"],
    summary:
      "A waterfront community of 126 homes on a 37-hectare lake, with golf buggy access to Emerald Lakes Town Centre.",
    lat: -28.0,
    lng: 153.3667
  },
  {
    slug: "seachange-riverside-coomera",
    name: "Seachange Riverside Coomera",
    suburb: "Coomera",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 125,
    operatorSlug: "ingenia-communities",
    amenities: ["Country Club", "River House", "Two Country Club precincts"],
    summary:
      "A boutique over-50s community on the Gold Coast with a five-star Country Club.",
    lat: -27.85,
    lng: 153.3
  },
  {
    slug: "ingenia-lifestyle-bethania",
    name: "Ingenia Lifestyle Bethania",
    suburb: "Bethania",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 321,
    operatorSlug: "ingenia-communities",
    amenities: ["Two clubhouses", "Resort-style pool with spa", "River waterfront access"],
    summary:
      "An over-55s lifestyle community halfway between Brisbane and the Gold Coast, on the Logan River.",
    lat: -27.6794733,
    lng: 153.1559456
  },
  {
    slug: "ingenia-lifestyle-chambers-pines",
    name: "Ingenia Lifestyle Chambers Pines",
    suburb: "Chambers Flat",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 667,
    operatorSlug: "ingenia-communities",
    amenities: ["Resort-style pool", "Mini golf", "Games room", "Walking paths"],
    summary:
      "An over-55s lifestyle community between Brisbane and the Gold Coast.",
    lat: -27.7167,
    lng: 153.0833
  },
  {
    slug: "ingenia-lifestyle-freshwater",
    name: "Ingenia Lifestyle Freshwater",
    suburb: "Burpengary East",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 269,
    operatorSlug: "ingenia-communities",
    amenities: ["Magnesium pool with heated spa", "Clubhouse with bar", "Cinema and bowling green"],
    summary:
      "An over-55s community in Brisbane's north with resort-style facilities.",
    lat: -27.15,
    lng: 152.95
  },
  {
    slug: "ingenia-lifestyle-sanctuary",
    name: "Ingenia Lifestyle Sanctuary",
    suburb: "Victoria Point",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 225,
    operatorSlug: "ingenia-communities",
    amenities: ["Heated magnesium pool and spa", "Cinema", "Bowling green", "Golf simulator"],
    summary:
      "A bayside over-55s community near Brisbane, set in bushland.",
    lat: -27.5833,
    lng: 153.3
  },
  {
    slug: "ingenia-lifestyle-k",
    name: "Ingenia Lifestyle Kō",
    suburb: "Gordonvale",
    state: "QLD",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 372,
    operatorSlug: "ingenia-communities",
    amenities: ["Resort-style clubhouse", "Outdoor pool", "Gated entry"],
    summary:
      "An emerging over-50s community beneath Walsh's Pyramid in tropical North Queensland.",
    lat: -17.1,
    lng: 145.7833
  },
  {
    slug: "ingenia-lifestyle-nature-s-edge",
    name: "Ingenia Lifestyle Nature's Edge",
    suburb: "Buderim",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 300,
    operatorSlug: "ingenia-communities",
    amenities: ["Resort-style heated pool and spa", "Cinema", "Bowling green", "Tennis courts", "Gym"],
    summary:
      "A premium over-55s community in the Buderim foothills on the Sunshine Coast.",
    lat: -26.6833,
    lng: 153.05
  },
  {
    slug: "ingenia-lifestyle-drift",
    name: "Ingenia Lifestyle Drift",
    suburb: "Bargara",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 330,
    operatorSlug: "ingenia-communities",
    amenities: ["Heated magnesium lap pool", "Tennis and pickleball", "Lawn bowling green"],
    summary:
      "An oceanfront over-55s community on Queensland's Coral Coast, with its main clubhouse opening in 2027.",
    lat: -24.8333,
    lng: 152.35
  },
  {
    slug: "ingenia-lifestyle-hervey-bay",
    name: "Ingenia Lifestyle Hervey Bay",
    suburb: "Urangan",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 457,
    operatorSlug: "ingenia-communities",
    amenities: ["Two resort-style clubhouses", "Community boat", "Workshop with micro-brewery", "Bowling green"],
    summary:
      "A 457-home coastal over-55s community near the Urangan Pier.",
    lat: -25.3222049,
    lng: 152.8961797
  },
  {
    slug: "ingenia-lifestyle-parkside-lucas",
    name: "Ingenia Lifestyle Parkside Lucas",
    suburb: "Lucas",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 141,
    operatorSlug: "ingenia-communities",
    amenities: ["Heated indoor pool", "Cinema", "Library", "Clubhouse with yoga studio"],
    summary:
      "An over-55s community near Ballarat's city centre, with move-in-ready homes from $575,000.",
    lat: -37.5333,
    lng: 143.8333
  },
  {
    slug: "ingenia-lifestyle-lakeside-lara",
    name: "Ingenia Lifestyle Lakeside Lara",
    suburb: "Lara",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 363,
    operatorSlug: "ingenia-communities",
    amenities: ["Resort-style clubhouse", "Indoor lawn bowls", "Golf simulator", "Community garden"],
    summary:
      "An over-55s community in Greater Geelong, with final homes from $529,000.",
    lat: -38.0167,
    lng: 144.4
  },
  {
    slug: "ingenia-lifestyle-sunbury",
    name: "Ingenia Lifestyle Sunbury",
    suburb: "Sunbury",
    state: "VIC",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 166,
    operatorSlug: "ingenia-communities",
    amenities: ["Indoor heated pool (planned)", "Homestead-style clubhouse (planned)", "Pickleball court"],
    summary:
      "A newly launched over-55s community in Sunbury, with amenities under development.",
    lat: -37.5833,
    lng: 144.7167
  },
  {
    slug: "lincoln-lifestyle-tamworth",
    name: "Lincoln Lifestyle Tamworth",
    suburb: "Oxley Vale",
    state: "NSW",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 217,
    operatorSlug: "lincoln-place",
    amenities: ["Bowling green", "Gym", "Indoor pool", "Pickleball courts", "Clubhouse", "Theatrette"],
    summary:
      "A forthcoming over-50s community near Tamworth, planned for 217 single-level homes.",
    lat: -31.0667,
    lng: 150.9167
  },
  {
    slug: "lincoln-lifestyle-moama",
    name: "Lincoln Lifestyle Moama",
    suburb: "Moama",
    state: "NSW",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 197,
    operatorSlug: "lincoln-place",
    amenities: ["Heated indoor pool", "Bowling green", "Gym", "Theatrette"],
    summary:
      "A new riverside over-50s community adjacent to Rich River Golf Club, planned for 197 lots.",
    lat: -36.1,
    lng: 144.75
  },
  {
    slug: "lincoln-lifestyle-wangaratta",
    name: "Lincoln Lifestyle Wangaratta",
    suburb: "Wangandary",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 227,
    operatorSlug: "lincoln-place",
    amenities: ["Indoor pool", "Clubhouse and wellness centre", "Bowling green", "Community garden"],
    summary:
      "A new masterplanned over-50s land lease community in Northeast Victoria, planned for 227 homes.",
    lat: -36.3667,
    lng: 146.3833
  },
  {
    slug: "lincoln-lifestyle-yeppoon",
    name: "Lincoln Lifestyle Yeppoon",
    suburb: "Inverness",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 450,
    operatorSlug: "lincoln-place",
    amenities: ["Heated swimming pool", "Lawn bowls green", "Pickleball courts", "Clubhouse and wellness centre"],
    summary:
      "An over-50s land lease community on the Capricorn Coast, planned for 400-450 homes.",
    lat: -23.1333,
    lng: 150.7333
  },
  {
    slug: "lincoln-lifestyle-mackay",
    name: "Lincoln Lifestyle Mackay",
    suburb: "Greenmount",
    state: "QLD",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 325,
    operatorSlug: "lincoln-place",
    amenities: ["Bowling green", "Golf simulator", "Outdoor pool", "Wellness centre"],
    summary:
      "A forthcoming over-50s community in coastal Queensland.",
    lat: -21.2,
    lng: 149.0667
  },
  {
    slug: "lincoln-lifestyle-eagle-point",
    name: "Lincoln Lifestyle Eagle Point",
    suburb: "Eagle Point",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 209,
    operatorSlug: "lincoln-place",
    amenities: ["Heated indoor pool", "Bowling green", "Pickleball court", "Gym and wellness centre"],
    summary:
      "A new masterplanned over-50s community on the Gippsland Lakes.",
    lat: -37.8667,
    lng: 147.7167
  },
  {
    slug: "lincoln-lifestyle-northern-beaches",
    name: "Lincoln Lifestyle Northern Beaches",
    suburb: "Mount Low",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 350,
    operatorSlug: "lincoln-place",
    amenities: ["Clubhouse with library and bar", "Gym", "Swimming pool", "Pickleball courts", "Bowling green"],
    summary:
      "Townsville's first over-50s land lease community, planned for 350 homes.",
    lat: -19.1667,
    lng: 146.6833
  },
  {
    slug: "lincoln-lifestyle-mudgee-spring",
    name: "Lincoln Lifestyle Mudgee Spring",
    suburb: "Spring Flat",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 206,
    operatorSlug: "lincoln-place",
    amenities: ["Competition-sized bowls green", "Pickleball courts", "Outdoor dining pavilion"],
    summary:
      "A gated over-50s community in Mudgee, with Stage 1 over 60% sold.",
    lat: -32.6183,
    lng: 149.6069
  },
  {
    slug: "lincoln-lifestyle-griffith-hill",
    name: "Lincoln Lifestyle Griffith Hill",
    suburb: "Griffith",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 128,
    operatorSlug: "lincoln-place",
    amenities: ["Wellness centre with pool", "Bowling green", "Pickleball court", "Gym"],
    summary:
      "A master-planned over-50s estate in the Riverina, with 4 homes remaining in Stage 2.",
    lat: -34.2833,
    lng: 146.05
  },
  {
    slug: "lincoln-lifestyle-baranduda",
    name: "Lincoln Lifestyle Baranduda",
    suburb: "Baranduda",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 96,
    operatorSlug: "lincoln-place",
    amenities: ["Indoor heated pool", "Bowling green", "Clubhouse with games room", "Gym"],
    summary:
      "An over-50s community near Albury-Wodonga, with Stage 3 over 60% sold.",
    lat: -36.15,
    lng: 146.9833
  },
  {
    slug: "lincoln-lifestyle-northern-rivers",
    name: "Lincoln Lifestyle Northern Rivers",
    suburb: "Gulmarrad",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 250,
    operatorSlug: "lincoln-place",
    amenities: ["Competition-sized bowling green", "Pickleball courts", "Clubhouse and wellness centre"],
    summary:
      "A gated over-50s community on the NSW North Coast between Yamba and Maclean, planned for 250 homes.",
    lat: -29.45,
    lng: 153.2667
  },
  {
    slug: "lincoln-lifestyle-huntly",
    name: "Lincoln Lifestyle Huntly",
    suburb: "Huntly",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 232,
    operatorSlug: "lincoln-place",
    amenities: ["Heated indoor swimming pool", "Bowling green and pickleball courts", "Wellness centre"],
    summary:
      "An over-50s land lease community minutes from Bendigo.",
    lat: -36.65,
    lng: 144.2833
  },
  {
    slug: "lincoln-lifestyle-eden-gardens",
    name: "Lincoln Lifestyle Eden Gardens",
    suburb: "Eden",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 115,
    operatorSlug: "lincoln-place",
    amenities: ["Bowling green", "Golf buggy zone", "Clubhouse", "Beach access"],
    summary:
      "An over-50s coastal community on the Sapphire Coast.",
    lat: -37.0667,
    lng: 149.9
  },
  {
    slug: "campbell-lifestyle-estate",
    name: "Campbell Lifestyle Estate",
    suburb: "Cessnock",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 165,
    operatorSlug: "lincoln-place",
    amenities: ["Bowling green", "Outdoor pool", "Gym", "Community clubhouse"],
    summary:
      "A nearly sold-out over-50s community near Cessnock, with 3 homes remaining.",
    lat: -32.8333,
    lng: 151.35
  },
  {
    slug: "portland-lifestyle-estate",
    name: "Portland Lifestyle Estate",
    suburb: "Portland",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 119,
    operatorSlug: "lincoln-place",
    amenities: ["Covered swimming pool", "Bowling green", "Clubhouse with theatrette"],
    summary:
      "A coastal over-50s community in Portland, planned for 119 homes next to Portland Golf Club.",
    lat: -38.3333,
    lng: 141.6
  },
  {
    slug: "sundown-lifestyle-estate",
    name: "Sundown Lifestyle Estate",
    suburb: "Symonston",
    state: "ACT",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "lincoln-place",
    amenities: ["Outdoor pool", "BBQ area", "Pet-friendly"],
    summary:
      "A sold-out over-50s independent living community 10 minutes from Canberra CBD.",
    lat: -35.3667,
    lng: 149.15
  },
  {
    slug: "nambucca-river-lifestyle-estate",
    name: "Nambucca River Lifestyle Estate",
    suburb: "North Macksville",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "lincoln-place",
    amenities: ["Boat ramp", "Bowling green", "Outdoor pool", "Community room"],
    summary:
      "A riverside over-50s community 10 minutes from Nambucca Heads, with 1 home remaining.",
    lat: -30.7167,
    lng: 152.9167
  },
  {
    slug: "albury-gardens-lifestyle-estate",
    name: "Albury Gardens Lifestyle Estate",
    suburb: "Lavington",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 23,
    operatorSlug: "lincoln-place",
    amenities: ["Outdoor swimming pool", "Clubhouse with community kitchen", "Community garden"],
    summary:
      "An over-50s independent living community near Albury.",
    lat: -36.05,
    lng: 146.9333
  },
  {
    slug: "officer-lifestyle-estate",
    name: "Officer Lifestyle Estate",
    suburb: "Officer",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 158,
    operatorSlug: "lincoln-place",
    amenities: ["Bowling green and pickleball court", "Indoor pool and gym", "Community bus"],
    summary:
      "An over-50s community in Melbourne's south-east, with 3 homes remaining.",
    lat: -38.0833,
    lng: 145.4167
  },
  {
    slug: "lincoln-lifestyle-kangaroo-flat",
    name: "Lincoln Lifestyle Kangaroo Flat",
    suburb: "Kangaroo Flat",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 345,
    operatorSlug: "lincoln-place",
    amenities: ["Bowling green", "Gym", "Outdoor pool", "Clubhouse and community garden"],
    summary:
      "A masterplanned over-50s community in regional Victoria near Bendigo.",
    lat: -36.7833,
    lng: 144.2333
  },
  {
    slug: "blue-gum-lifestyle-estate",
    name: "Blue Gum Lifestyle Estate",
    suburb: "Beaconsfield",
    state: "VIC",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 96,
    operatorSlug: "lincoln-place",
    amenities: ["Clubhouse", "Community garden", "BBQ area", "Dog park"],
    summary:
      "An over-50s community in Melbourne's southeast, with a newly opened clubhouse.",
    lat: -38.05,
    lng: 145.35
  },
  {
    slug: "hunter-valley-lifestyle-estate",
    name: "Hunter Valley Lifestyle Estate",
    suburb: "Neath",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 223,
    operatorSlug: "lincoln-place",
    amenities: ["Bowling green and outdoor pool", "Pickleball and sports pavilion", "Community garden"],
    summary:
      "An over-50s community in the Hunter Valley, with fewer than 15 homes remaining.",
    lat: -32.75,
    lng: 151.4667
  },
  {
    slug: "chinderah-lakes-lifestyle-estate",
    name: "Chinderah Lakes Lifestyle Estate",
    suburb: "Chinderah",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "lincoln-place",
    amenities: ["Outdoor swimming pool", "BBQ area", "Caravan storage"],
    summary:
      "A sold-out over-50s riverside estate on the Tweed River, five minutes from Kingscliff.",
    lat: -28.3333,
    lng: 153.5167
  },
  {
    slug: "tweed-shores-lifestyle-estate",
    name: "Tweed Shores Lifestyle Estate",
    suburb: "Chinderah",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "lincoln-place",
    amenities: ["Outdoor swimming pool", "BBQ area", "Caravan storage"],
    summary:
      "A sold-out over-50s land lease community on the Tweed River, five minutes from Kingscliff.",
    lat: -28.3333,
    lng: 153.5167
  },
  {
    slug: "brookhaven-lifestyle-estate",
    name: "Brookhaven Lifestyle Estate",
    suburb: "Bonville",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "lincoln-place",
    amenities: ["Outdoor pool", "Community garden", "BBQ area", "Caravan storage"],
    summary:
      "A sold-out over-50s community 10 minutes south of Coffs Harbour.",
    lat: -30.35,
    lng: 153.0833
  },
  {
    slug: "nambucca-heads-lifestyle-estate",
    name: "Nambucca Heads Lifestyle Estate",
    suburb: "Nambucca Heads",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "lincoln-place",
    amenities: ["Clubhouse, firepit and games room", "BBQ area", "Beach access"],
    summary:
      "An over-50s community next to Nambucca Heads Island Golf Club, with beach access.",
    lat: -30.6333,
    lng: 153.0
  },
  {
    slug: "silver-shores-village",
    name: "Silver Shores Village",
    suburb: "Sandstone Point",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "lincoln-place",
    amenities: ["Waterfront location", "Boat access", "Caravan and home sites"],
    summary:
      "A sold-out (resales only) coastal over-50s community on Pumicestone Passage.",
    lat: -27.05,
    lng: 153.05
  },
  {
    slug: "rosevale-home-village",
    name: "Rosevale Home Village",
    suburb: "St Georges Basin",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "lincoln-place",
    amenities: ["Clubhouse and community kitchen", "Games room", "Walking tracks", "Caravan storage"],
    summary:
      "A sold-out coastal retirement community in the Shoalhaven region.",
    lat: -35.15,
    lng: 150.6
  },
  {
    slug: "liven-beach-road",
    name: "Liven Beach Road",
    suburb: "Urraween",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 132,
    operatorSlug: "liven-communities",
    amenities: ["Swimming pool", "Clubhouse", "Lawn bowls greens", "Cinema", "Gated community"],
    summary:
      "A masterplanned retirement community in Hervey Bay across nearly six hectares, planned for 132 homes.",
    lat: -25.2885842,
    lng: 152.8307763
  },
  {
    slug: "liven-willow-rise",
    name: "Liven Willow Rise",
    suburb: "Gympie",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 150,
    operatorSlug: "liven-communities",
    amenities: ["Swimming pool", "Clubhouse", "Bowling greens", "Cinema", "Golf simulator", "Dog park"],
    summary:
      "A resort-style retirement community in Gympie's hinterland across seven hectares, planned for 150 homes.",
    lat: -26.1833,
    lng: 152.6667
  },
  {
    slug: "liven-coastline",
    name: "Liven Coastline",
    suburb: "Elliott Heads",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 316,
    operatorSlug: "liven-communities",
    amenities: ["Swimming pool", "Cinema", "Lawn bowls", "Dog park", "Gated security"],
    summary:
      "A resort-style coastal retirement community near Bundaberg across nearly 15 hectares, planned for 316 homes.",
    lat: -24.8833,
    lng: 152.4
  },
  {
    slug: "liven-carabella",
    name: "Liven Carabella",
    suburb: "Gowrie Junction",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 422,
    operatorSlug: "liven-communities",
    amenities: ["Wellness club with heated pool and sauna", "Sports courts", "Grand pavilion"],
    summary:
      "A curated over-50s retirement community north of Toowoomba across 25 hectares of resort-style landscaping.",
    lat: -27.4667,
    lng: 151.9167
  },
  {
    slug: "thyme-canungra",
    name: "Thyme Canungra",
    suburb: "Canungra",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 167,
    operatorSlug: "serenitas",
    amenities: ["Clubhouse", "resort facilities", "pet-friendly grounds"],
    summary:
      "A resort-style over-50s community in the Scenic Rim hinterland managed by Serenitas."
  },
  {
    slug: "the-outlook-lifestyle-resort",
    name: "The Outlook Lifestyle Resort",
    suburb: "Bayonet Head",
    state: "WA",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "serenitas",
    amenities: ["Indoor heated pool", "bowling green", "tennis court", "gym", "clubhouse", "dance floor", "BBQ areas", "workshop", "caravan/boat parking", "vegetable garden"],
    summary:
      "A coastal retirement resort offering waterfront views and resort-style facilities for active retirees in Albany."
  },
  {
    slug: "thyme-evans-head",
    name: "Thyme Evans Head",
    suburb: "Evans Head",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 164,
    operatorSlug: "serenitas",
    amenities: ["Clubhouse", "health & wellness facilities", "art and craft studio", "community sporting spaces", "treatment room"],
    summary:
      "A boutique coastal community offering low-maintenance homes and resort-style living for active retirees on the NSW North Coast."
  },
  {
    slug: "thyme-mareeba",
    name: "Thyme Mareeba",
    suburb: "Mareeba",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "serenitas",
    amenities: ["Mineral pool and spa", "clubhouse with bar", "art and craft studio", "cinema", "hobby shed", "Banksia lounge"],
    summary:
      "A gated, pet-friendly resort community offering low-maintenance homes in the gateway to Far North Queensland."
  },
  {
    slug: "the-anchorage-lifestyle-resort",
    name: "The Anchorage Lifestyle Resort",
    suburb: "Urangan",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 95,
    operatorSlug: "serenitas",
    amenities: ["Resort clubhouse with pool and spa", "tennis court", "pickleball court", "bowls green", "gym", "library", "private bar"],
    summary:
      "A harbourside over-50s lifestyle community in Hervey Bay offering resort-style living with no entry or exit fees.",
    lat: -25.2966647,
    lng: 152.9037131
  },
  {
    slug: "lucas-lifestyle-estate",
    name: "Lucas Lifestyle Estate",
    suburb: "Lucas",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 200,
    operatorSlug: "serenitas",
    amenities: ["Heated indoor pool", "cinema", "sports bar", "coffee lounge", "hobby shed", "yoga studio", "bowling green", "community kitchen", "gym", "putting green", "bocce court", "community garden"],
    summary:
      "A pet-friendly, over-50s residential community in Ballarat offering low-maintenance homes with resort-style facilities and no entry or exit fees."
  },
  {
    slug: "thyme-palm-cove",
    name: "Thyme Palm Cove",
    suburb: "Kewarra Beach",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 360,
    operatorSlug: "serenitas",
    amenities: ["Future clubhouse with outdoor terraces and lounge spaces", "pet-friendly", "resort-style facilities"],
    summary:
      "An over-50s land lease lifestyle resort in tropical Far North Queensland offering modern homes with no entry or exit fees."
  },
  {
    slug: "thyme-rothwell",
    name: "Thyme Rothwell",
    suburb: "Rothwell",
    state: "QLD",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 192,
    operatorSlug: "serenitas",
    amenities: ["Future clubhouse with outdoor terraces", "pool", "gym", "game room", "cinema", "bowls facilities", "secure gated entry"],
    summary:
      "Resort-style over-50s living on the Redcliffe Peninsula offering a transparent land lease model with no entry/exit fees or council rates."
  },
  {
    slug: "thyme-lakeview-springs",
    name: "Thyme Lakeview Springs",
    suburb: "Nikenbah",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 359,
    operatorSlug: "serenitas",
    amenities: ["The Lakehouse clubhouse", "12-acre lake with 1.2km private paths", "pet-friendly", "secure gated entry"],
    summary:
      "Over-50s resort-style living in Hervey Bay featuring modern, low-maintenance homes surrounded by nature.",
    lat: -25.3162831,
    lng: 152.8299864
  },
  {
    slug: "tuart-lakes-lifestyle-resort",
    name: "Tuart Lakes Lifestyle Resort",
    suburb: "Baldivis",
    state: "WA",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 400,
    operatorSlug: "serenitas",
    amenities: ["35+ facilities including bowling green", "tennis", "indoor/outdoor heated pools", "spa", "sports bar", "cinema", "RV/caravan storage"],
    summary:
      "A luxury resort-style community in Perth's south offering world-class facilities and independent living for retirees."
  },
  {
    slug: "thyme-moreton-bay",
    name: "Thyme Moreton Bay",
    suburb: "Morayfield",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 183,
    operatorSlug: "serenitas",
    amenities: ["Country Club with outdoor terraces", "Blue Gum Pavilion", "games room", "cinema", "communal kitchen", "swimming pool", "pet-friendly grounds"],
    summary:
      "A resort-style over-50s community offering modern, low-maintenance homes with no entry or exit fees close to urban conveniences."
  },
  {
    slug: "vibe-baldivis-lifestyle-village",
    name: "Vibe Baldivis Lifestyle Village",
    suburb: "Baldivis",
    state: "WA",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "serenitas",
    amenities: ["Arts centre", "bowls green", "caravan & boat storage", "clubhouse", "gym", "golf driving nets", "library", "off-leash dog park", "outdoor pool", "tennis", "vegetable garden", "walking trails"],
    summary:
      "A gated lifestyle village offering extensive recreational facilities for residents seeking an active, community-focused retirement lifestyle."
  },
  {
    slug: "helena-valley-lifestyle-village",
    name: "Helena Valley Lifestyle Village",
    suburb: "Helena Valley",
    state: "WA",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 380,
    operatorSlug: "serenitas",
    amenities: ["Heated indoor pool", "gym and sauna", "bowls green", "arts centre and clubhouse", "caravan and boat storage", "village bus", "vegetable garden"],
    summary:
      "An affordable, gated community offering resort-style facilities for those over 50 seeking a lifestyle change in Perth's foothills."
  },
  {
    slug: "hillview-lifestyle-village",
    name: "Hillview Lifestyle Village",
    suburb: "High Wycombe",
    state: "WA",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "serenitas",
    amenities: ["Heated indoor and outdoor pools", "gym", "spa", "sauna", "bowls green", "tennis", "squash", "arts centre", "clubhouse", "library", "dog park"],
    summary:
      "A nature-focused lifestyle community 16km from Perth CBD balancing bush living with city conveniences."
  },
  {
    slug: "pineview-lifestyle-village",
    name: "Pineview Lifestyle Village",
    suburb: "Tapping",
    state: "WA",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "serenitas",
    amenities: ["Heated indoor and outdoor pools", "spa", "gym", "bowls green", "tennis", "squash", "billiard tables", "clubhouse", "village bus", "library", "vegetable gardens"],
    summary:
      "An over-50s, pet-friendly community in Perth's northern suburbs offering resort-style facilities."
  },
  {
    slug: "bridgewater-lifestyle-village",
    name: "Bridgewater Lifestyle Village",
    suburb: "Erskine",
    state: "WA",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "serenitas",
    amenities: ["Heated indoor and outdoor pools", "gym", "arts centre", "cinema", "clubhouse", "bowls green", "tennis", "squash", "sauna", "spa", "mini golf", "caravan & boat storage"],
    summary:
      "A secure, resort-style retirement community within walking distance of shopping, medical services, and the Peel Estuary."
  },
  {
    slug: "busselton-lifestyle-village",
    name: "Busselton Lifestyle Village",
    suburb: "West Busselton",
    state: "WA",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "serenitas",
    amenities: ["Heated indoor pool", "outdoor pool", "bowls green", "tennis", "squash", "gym", "sauna", "spa", "clubhouse", "walking trails", "caravan & boat storage", "dog park"],
    summary:
      "A coastal lifestyle community for active individuals aged 45+ located just 2km from the beach."
  },
  {
    slug: "golden-downs-lifestyle-community",
    name: "Golden Downs Lifestyle Community",
    suburb: "Fitzgibbon",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "serenitas",
    amenities: ["Pool & cabana", "tennis court", "8-rink bowling green", "clubhouse with licensed bar", "hairdresser", "library", "games room", "24-hour security"],
    summary:
      "An over-50s resort-style residential community offering a relaxed, secure lifestyle near shopping centres and hospitals in Brisbane's north."
  },
  {
    slug: "burleigh-town-lifestyle-community",
    name: "Burleigh Town Lifestyle Community",
    suburb: "Burleigh Heads",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "serenitas",
    amenities: ["Clubhouse", "swimming pool", "bowl greens", "darts", "bar", "BBQ area", "table tennis", "community workshop", "library", "dance floor", "community gardens"],
    summary:
      "An over-50s community offering resort-style living with independent housing and social activities on the Gold Coast."
  },
  {
    slug: "rv-homebase",
    name: "RV Homebase",
    suburb: "Tinana",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "serenitas",
    amenities: ["25m heated lap pool", "gymnasium", "four-rink bowling green", "wood/metal workshops", "arts and crafts building", "5-hole chip & putt golf", "tennis court", "dog wash station"],
    summary:
      "Australia's favourite RV lifestyle village offering spacious country living designed for over-50s travellers on the Fraser Coast."
  },
  {
    slug: "great-lakes-lifestyle-community",
    name: "Great Lakes Lifestyle Community",
    suburb: "Failford",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "serenitas",
    amenities: ["Community hall", "tennis court", "pool", "covered BBQ area", "table tennis", "darts", "boat ramp", "boat/caravan storage"],
    summary:
      "A riverside over-50s community offering affordable, low-maintenance homes three hours north of Sydney."
  },
  {
    slug: "latitude-25",
    name: "Latitude 25",
    suburb: "Nikenbah",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "serenitas",
    amenities: ["Gated secure community", "resort-style facilities", "Health Hub", "green open spaces", "walkways", "BBQ facilities", "scenic lakes", "RV garage with each home"],
    summary:
      "An over-50s luxury RV lifestyle community offering owner-occupied residences with the freedom to travel while maintaining a secure home base.",
    lat: -25.3155651,
    lng: 152.8220169
  },
  {
    slug: "thyme-bundaberg-springs",
    name: "Thyme Bundaberg Springs",
    suburb: "Avoca",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 204,
    operatorSlug: "serenitas",
    amenities: ["Nine-hole golf course", "Lake House with outdoor terraces and lounge spaces", "pet-friendly", "river and nature access"],
    summary:
      "An over-50s lifestyle resort offering modern, low-maintenance homes under a transparent land lease model with no entry/exit fees."
  },
  {
    slug: "thyme-sunbury",
    name: "Thyme Sunbury",
    suburb: "Sunbury",
    state: "VIC",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 0,
    operatorSlug: "serenitas",
    amenities: ["Details to be confirmed as the community progresses toward opening"],
    summary:
      "A Thyme-branded over-50s lifestyle resort in Melbourne's outer north, part of the Serenitas portfolio."
  },
  {
    slug: "thyme-ocean-grove",
    name: "Thyme Ocean Grove",
    suburb: "Ocean Grove",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 205,
    operatorSlug: "serenitas",
    amenities: ["Future clubhouse with outdoor terraces and lounge spaces", "pet-friendly gated community", "close to beach and golf club"],
    summary:
      "A boutique over-50s resort-style community on the Bellarine Peninsula featuring modern, low-maintenance homes with no entry/exit fees."
  },
  {
    slug: "ballina-pacific-palms-southern-cross-villages",
    name: "Ballina Pacific Palms & Southern Cross Villages",
    suburb: "Ballina",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "serenitas",
    amenities: ["Clubhouses", "swimming pools", "BBQ areas", "car wash", "library", "social club", "darts facilities", "coin-operated laundry"],
    summary:
      "A resort-style lifestyle community for over-50s residents offering independent living with no entry or exit fees."
  },
  {
    slug: "thyme-forster",
    name: "Thyme Forster",
    suburb: "Forster",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 160,
    operatorSlug: "serenitas",
    amenities: ["Future clubhouse with pool", "spa", "lounge", "and dining spaces", "pet-friendly", "secure gated entry"],
    summary:
      "Boutique over-50s resort-style living on the NSW Mid North Coast featuring modern, low-maintenance homes with no entry or exit fees."
  },
  {
    slug: "springtree-cobram",
    name: "Springtree Cobram",
    suburb: "Cobram",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "springtree",
    amenities: ["Gym", "swimming pool", "function space", "bar", "games room", "cinema", "BBQ area", "bowling green", "pickleball court", "putting green", "driving nets", "community gardens", "dog park"],
    summary:
      "An over-55s lifestyle resort offering countryside charm and modern conveniences on the Murray River, less than three hours from Melbourne."
  },
  {
    slug: "springtree-yarrawonga",
    name: "Springtree Yarrawonga",
    suburb: "Yarrawonga",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "springtree",
    amenities: ["Gym", "swimming pool", "function space", "bar", "kitchen", "lounge", "private dining", "BBQ area", "social bowling green", "pickleball court", "community gardens", "outdoor seating"],
    priceFrom: "$424,000",
    summary:
      "A brand-new lakeside lifestyle resort near water activities, wineries and golf courses, with homes from $424,000."
  },
  {
    slug: "springtree-warragul",
    name: "Springtree Warragul",
    suburb: "Warragul",
    state: "VIC",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 0,
    operatorSlug: "springtree",
    amenities: ["Gym", "swimming pool", "function space", "bar", "lounge", "cinema", "BBQ area", "bowling green", "pickleball court", "community gardens"],
    summary:
      "A new over-55s resort in Gippsland offering a relaxed, connected lifestyle with modern, low-maintenance homes coming soon."
  },
  {
    slug: "b-by-halcyon",
    name: "B by Halcyon",
    suburb: "Buderim",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 350,
    operatorSlug: "stockland-halcyon",
    amenities: ["Mineral salt pools and saunas", "wellness spaces", "cinema and bar", "pickleball courts", "bowling green", "creative arts courtyard"],
    summary:
      "A premium over-50s lifestyle community nestled in the Buderim rainforest foothills offering a serene, nature-inspired lifestyle with no stamp duty or exit fees."
  },
  {
    slug: "halcyon-bayside",
    name: "Halcyon Bayside",
    suburb: "Redland Bay",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 536,
    operatorSlug: "stockland-halcyon",
    amenities: ["Proximity to Stockland Shoreline", "cafes and dining", "Redland Bay Shopping Village", "medical centres", "and coastal parks"],
    summary:
      "Stockland's largest-ever land lease community, offering over-50s living in Redland Bay with new releases of homes now selling."
  },
  {
    slug: "halcyon-berwick",
    name: "Halcyon Berwick",
    suburb: "Berwick",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 175,
    operatorSlug: "stockland-halcyon",
    amenities: ["Resort-quality clubhouse", "mineral salt pools", "saunas", "wellness spaces", "cinema", "bar", "pickleball courts", "walking paths"],
    summary:
      "A gated, over-55s lifestyle community within Stockland's master-planned Minta community offering architecturally designed homes with no stamp duty or exit fees."
  },
  {
    slug: "halcyon-dales",
    name: "Halcyon Dales",
    suburb: "Beerwah",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 212,
    operatorSlug: "stockland-halcyon",
    amenities: ["Clubhouse with resort-style facilities", "pickleball courts", "lawn bowls", "dining and entertainment areas"],
    summary:
      "A nature-inspired over-50s lifestyle community in Beerwah with views of the Glasshouse Mountains."
  },
  {
    slug: "halcyon-edgebrook",
    name: "Halcyon Edgebrook",
    suburb: "Eagleby",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 318,
    operatorSlug: "stockland-halcyon",
    amenities: ["Future clubhouse overlooking green spine and lake", "weekly social activities", "central green spine", "secure gated environment"],
    priceFrom: "$805,900",
    summary:
      "A vibrant over-50s lifestyle community between Brisbane and the Gold Coast, with contemporary homes and expansive green spaces."
  },
  {
    slug: "halcyon-evergreen",
    name: "Halcyon Evergreen",
    suburb: "Clyde",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 295,
    operatorSlug: "stockland-halcyon",
    amenities: ["Gold class cinema", "dining facilities", "bowling greens", "pickleball courts", "Homestead and Stables precincts"],
    summary:
      "A vibrant lifestyle community for over-55s in Melbourne's south-east featuring a newly opened $14M clubhouse and resort-style facilities."
  },
  {
    slug: "halcyon-glades",
    name: "Halcyon Glades",
    suburb: "Caboolture",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 217,
    operatorSlug: "stockland-halcyon",
    amenities: ["Resort-inspired mineral salt pools", "saunas", "wellness spaces", "gym", "bowls green", "cinema and bar", "pickleball courts"],
    summary:
      "An over-50s lifestyle community in Northern Brisbane offering resort-quality facilities between Brisbane and the Sunshine Coast."
  },
  {
    slug: "halcyon-greenhaven",
    name: "Halcyon Greenhaven",
    suburb: "Armstrong Creek",
    state: "VIC",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 345,
    operatorSlug: "stockland-halcyon",
    amenities: ["Exclusive clubhouse with bowling green and pickleball courts", "swimming pool", "community cafe", "walking trails", "conservation areas"],
    summary:
      "A coming-soon over-55s gated community in Armstrong Creek featuring resort-style amenities and a nature-focused design."
  },
  {
    slug: "halcyon-greens",
    name: "Halcyon Greens",
    suburb: "Pimpama",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 500,
    operatorSlug: "stockland-halcyon",
    amenities: ["18-hole championship golf course access", "heated indoor pool", "tennis and pickleball courts", "resort-style leisure club", "library"],
    summary:
      "A country-club inspired over-50s community in Pimpama offering low-maintenance homes with golf course access and resort-style facilities."
  },
  {
    slug: "halcyon-highlands",
    name: "Halcyon Highlands",
    suburb: "Mickleham",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 240,
    operatorSlug: "stockland-halcyon",
    amenities: ["Mineral salt pools", "saunas", "wellness spaces", "cinemas", "bars", "pickleball courts", "clubhouse facilities"],
    priceFrom: "$599,000",
    summary:
      "An exclusive over-55s gated community in Melbourne's north offering architecturally designed homes with resort-inspired facilities."
  },
  {
    slug: "halcyon-horizon",
    name: "Halcyon Horizon",
    suburb: "Armstrong Creek",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 234,
    operatorSlug: "stockland-halcyon",
    amenities: ["$14.5M resort-quality clubhouse", "secure gated community", "proximity to shopping centres", "golf clubs", "and beaches"],
    summary:
      "An over-55s lifestyle village in Armstrong Creek, Geelong, featuring resort-quality living with a newly opened clubhouse."
  },
  {
    slug: "halcyon-illyarrie",
    name: "Halcyon Illyarrie",
    suburb: "Sinagra",
    state: "WA",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 153,
    operatorSlug: "stockland-halcyon",
    amenities: ["Resort-style facilities and social spaces", "pickleball courts", "community function rooms", "proximity to shopping and medical facilities"],
    summary:
      "A gated over-55s land lease community in Perth's north offering resort-style living with low-maintenance homes."
  },
  {
    slug: "halcyon-jardin",
    name: "Halcyon Jardin",
    suburb: "Clyde North",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "stockland-halcyon",
    amenities: ["$13M Clubhouse (The Pavilion) with mineral salt pools", "saunas", "wellness spaces", "cinema", "bar", "and tennis courts"],
    priceFrom: "$649,000",
    summary:
      "An over-55s lifestyle community in Clyde North offering peaceful, resort-style living with architecturally designed homes."
  },
  {
    slug: "halcyon-lakeside",
    name: "Halcyon Lakeside",
    suburb: "Bli Bli",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 231,
    operatorSlug: "stockland-halcyon",
    amenities: ["Resort-style pool", "mineral salt pools", "saunas", "wellness spaces", "cinema", "pickleball courts", "lawn bowls green", "6km of walking trails"],
    summary:
      "A Sunshine Coast community offering luxury lakeside over-50s living with panoramic views across two adjoining lakes."
  },
  {
    slug: "halcyon-landing",
    name: "Halcyon Landing",
    suburb: "Bli Bli",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 171,
    operatorSlug: "stockland-halcyon",
    amenities: ["Recreation centre with pool table", "community garden", "bowling green", "mineral salt pools and saunas", "wellness spaces", "cinema", "bar", "pickleball courts"],
    summary:
      "A picturesque, resort-style over-50s community on the Sunshine Coast nestled in peaceful surrounds near the Maroochy River."
  },
  {
    slug: "halcyon-nirimba",
    name: "Halcyon Nirimba",
    suburb: "Nirimba",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 370,
    operatorSlug: "stockland-halcyon",
    amenities: ["Central clubhouse with leisure and social spaces", "200+km of connected walking and cycling paths", "swimming pool", "pickleball courts"],
    summary:
      "An established over-50s lifestyle community within the larger Aura master-planned development on the Sunshine Coast."
  },
  {
    slug: "halcyon-parks",
    name: "Halcyon Parks",
    suburb: "Meridan Plains",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 171,
    operatorSlug: "stockland-halcyon",
    amenities: ["36-acre natural parklands with a flora and fauna-filled lake", "bowling green"],
    summary:
      "An established over-50s lifestyle community launched in 2004, surrounded by natural parklands near Caloundra's beaches."
  },
  {
    slug: "halcyon-peninsula",
    name: "Halcyon Peninsula",
    suburb: "Redland Bay",
    state: "QLD",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 0,
    operatorSlug: "stockland-halcyon",
    amenities: ["Details to be confirmed as the community progresses toward launch"],
    summary:
      "A planned over-50s lifestyle community in the Redland Bay area, part of Stockland's expanding Halcyon portfolio in south-east Queensland."
  },
  {
    slug: "halcyon-promenade",
    name: "Halcyon Promenade",
    suburb: "Burpengary East",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 410,
    operatorSlug: "stockland-halcyon",
    amenities: ["Resort-style social", "leisure and sporting precincts", "gated community with state-of-the-art design"],
    summary:
      "An over-50s lifestyle community in Moreton Bay offering nature-inspired living with modern turnkey homes and premium resort facilities."
  },
  {
    slug: "halcyon-providence",
    name: "Halcyon Providence",
    suburb: "White Rock",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 254,
    operatorSlug: "stockland-halcyon",
    amenities: ["Mineral salt pools and saunas", "wellness spaces", "cinema and bar facilities", "pickleball courts"],
    summary:
      "An over-50s land lease community near Ipswich offering architecturally designed homes with no stamp duty or exit fees."
  },
  {
    slug: "halcyon-rise",
    name: "Halcyon Rise",
    suburb: "Logan Reserve",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 333,
    operatorSlug: "stockland-halcyon",
    amenities: ["BBQ pavilion", "gold-class cinema", "pickleball courts", "riverfront parkland along Logan River", "clubhouse with dining area"],
    summary:
      "A resort-style over-50s community combining country living with city convenience, 32km from Brisbane's South Bank."
  },
  {
    slug: "halcyon-serrata",
    name: "Halcyon Serrata",
    suburb: "Burpengary East",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 250,
    operatorSlug: "stockland-halcyon",
    amenities: ["The Lodge", "clubhouse", "resort-quality facilities", "nature corridor", "gated community"],
    summary:
      "A picturesque and private over-50s community in Moreton Bay, surrounded by scenic landscapes with display homes now open."
  },
  {
    slug: "halcyon-vista",
    name: "Halcyon Vista",
    suburb: "Logan Village",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 161,
    operatorSlug: "stockland-halcyon",
    amenities: ["25-metre heated magnesium pool", "vibrant clubhouse with bar and dining", "elevated terrace homes", "conservation land access"],
    summary:
      "A boutique over-50s community offering low-maintenance living in a secure, gated community in Logan Village."
  },
  {
    slug: "halcyon-waters",
    name: "Halcyon Waters",
    suburb: "Hope Island",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 227,
    operatorSlug: "stockland-halcyon",
    amenities: ["Mineral salt pools", "saunas", "wellness spaces", "cinema and bar", "pickleball and tennis courts", "100 acres of lakefront parklands"],
    summary:
      "A gated over-50s community on the Gold Coast offering a modern lifestyle within a lush, waterfront setting."
  },
  {
    slug: "halcyon-wildflower",
    name: "Halcyon Wildflower",
    suburb: "Piara Waters",
    state: "WA",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 228,
    operatorSlug: "stockland-halcyon",
    amenities: ["Mineral salt pools", "saunas", "wellness spaces", "cinema and bar facilities", "pickleball courts", "Display Village with five styled homes"],
    summary:
      "Stockland's first WA land lease community, offering a serene, pristine lifestyle for over-55s in Perth's south."
  },
  {
    slug: "halcyon-yandina",
    name: "Halcyon Yandina",
    suburb: "Yandina",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 250,
    operatorSlug: "stockland-halcyon",
    amenities: ["Clubhouse with firepit", "proximity to Yandina Medical Clinic", "Yandina Markets", "and Yandina Bowls Club"],
    summary:
      "A Sunshine Coast community offering over-50s residents new home designs in a historic hinterland village."
  },
  {
    slug: "vision-by-halcyon",
    name: "Vision by Halcyon",
    suburb: "Hope Island",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 88,
    operatorSlug: "stockland-halcyon",
    amenities: ["Private marina and floating boathouse", "mineral salt pools", "saunas", "wellness spaces", "picnic boat and kayak access", "boardwalk"],
    summary:
      "An established boutique over-50s community offering pristine, resort-quality living with direct Broadwater access on the Gold Coast."
  },
  {
    slug: "natrium-coral-cove",
    name: "Natrium Coral Cove",
    suburb: "Coral Cove",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "vivacity-property",
    amenities: ["Country Club with theatre and bar", "wellness centre with gym", "sauna and plunge pool", "swimming pools", "art studio"],
    summary:
      "An exclusive over-55s coastal community offering refined living near the southern Great Barrier Reef."
  },
  {
    slug: "tallowood-medowie",
    name: "Tallowood Medowie",
    suburb: "Medowie",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "vivacity-property",
    amenities: ["Country Club with 20m indoor pool", "gym", "sauna", "cinema room", "library", "private dining room", "bar", "games room", "tennis and pickleball court", "covered bowling green", "outdoor pool"],
    summary:
      "An independent retirement community in Port Stephens offering world-class facilities in a natural landscape setting."
  },
  {
    slug: "stratford-gardens",
    name: "Stratford Gardens",
    suburb: "Tahmoor",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "vivacity-property",
    amenities: ["Historic Stratford House with gardens", "Country Club with dining", "bar", "games and cinema", "indoor swimming pool", "gym", "bowls facilities"],
    summary:
      "A lifestyle community blending rural charm with modern conveniences, centred on the historic Stratford House and its gardens."
  },
  {
    slug: "magnolia-resort",
    name: "Magnolia Resort",
    suburb: "Glenvale",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "vivacity-property",
    amenities: ["24/7 clubhouse with golf simulator, cinema, commercial kitchen, gym, library, art room", "heated 20m pool, spa, sauna, tennis court, lawn bowls, workshop, vegetable gardens, dog run, onsite hairdresser"],
    summary:
      "A vibrant over-55s community in Glenvale centred on freedom, friendship and everyday convenience with extensive recreational facilities."
  },
  {
    slug: "lakeside-goolwa",
    name: "Lakeside Goolwa",
    suburb: "Goolwa North",
    state: "SA",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "vivacity-property",
    amenities: ["Marina berths for sailing", "lawn bowls", "swimming pool", "leisure lounge for social gatherings", "workshop and hobby rooms", "secure boat/caravan/kayak storage", "walking and cycling paths"],
    summary:
      "A 55+ retirement community in coastal Goolwa offering resort-style living with marina access and a focus on connection."
  },
  {
    slug: "palm-lake-resort-beachmere-bay",
    name: "Palm Lake Resort Beachmere Bay",
    suburb: "Beachmere",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "palm-lake-resort",
    amenities: ["8-rink undercover bowling green", "9-hole Shorehaven Golf Course", "9-hole putt putt", "waterfront Beach House", "Hamptons Country Club", "tennis and pickleball", "bocce and croquet"],
    summary:
      "An over-50s luxury resort offering Hamptons-style living in a bayside setting with extensive recreational facilities."
  },
  {
    slug: "palm-lake-resort-beachmere-sands",
    name: "Palm Lake Resort Beachmere Sands",
    suburb: "Beachmere",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "palm-lake-resort",
    amenities: ["Country club", "outdoor pool", "4 & 9-hole golf courses", "music room", "gym", "library", "croquet courts", "bar", "tennis courts", "billiards room", "art & craft centre", "undercover bowls green"],
    summary:
      "The best in over-55s living, offering exclusive resort amenities near Moreton Bay about 65 minutes from Brisbane CBD."
  },
  {
    slug: "palm-lake-resort-bethania",
    name: "Palm Lake Resort Bethania",
    suburb: "Bethania",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "palm-lake-resort",
    amenities: ["Water aerobics", "tai chi", "line dancing", "gym", "bowling green", "library", "resort pool", "BBQ area", "caravan storage", "indoor pool"],
    summary:
      "A luxury resort-style community for over-50s featuring exclusive resort-style living among leafy walkways and tropical gardens near Brisbane.",
    lat: -27.6985967,
    lng: 153.1541369
  },
  {
    slug: "palm-lake-resort-caloundra-cay",
    name: "Palm Lake Resort Caloundra Cay",
    suburb: "Little Mountain",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "palm-lake-resort",
    amenities: ["Hemingway's Country Club", "The Cove recreational centre", "8-rink undercover bowls green", "tennis and pickleball precinct", "gymnasium", "wetlands walking tracks"],
    summary:
      "A luxury over-50s resort on the Sunshine Coast offering designer homes and a gated community environment for active retirees."
  },
  {
    slug: "palm-lake-resort-carindale",
    name: "Palm Lake Resort Carindale",
    suburb: "Carindale",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "palm-lake-resort",
    amenities: ["Indoor heated pool", "4-lane bowling green with night lights", "putt-putt", "boules", "movie theatre", "library", "snooker tables", "gym", "spa", "workshop"],
    summary:
      "A resort-style community for over-50s near Brisbane offering luxury homes with established gardens and extensive recreational facilities."
  },
  {
    slug: "palm-lake-resort-cooroy-noosa",
    name: "Palm Lake Resort Cooroy-Noosa",
    suburb: "Cooroy",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "palm-lake-resort",
    amenities: ["The Pavilion clubhouse", "8-rink undercover bowling green", "indoor and outdoor pools with spa", "tennis", "gymnasium", "tenpin bowling", "billiards", "virtual golf simulator"],
    summary:
      "A luxury retirement community near Noosa blending relaxed country style with coastal ambience through resort-style homes."
  },
  {
    slug: "palm-lake-resort-deception-bay",
    name: "Palm Lake Resort Deception Bay",
    suburb: "Deception Bay",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "palm-lake-resort",
    amenities: ["Resort pool", "indoor pool", "tennis court", "bowling green", "gymnasium", "library", "snooker tables", "BBQ area", "workshop", "caravan and boat storage"],
    summary:
      "A bayside resort ideally located on the waterfront in Moreton Bay, offering resort-style living between Brisbane and the Sunshine Coast."
  },
  {
    slug: "palm-lake-resort-eagleby-heights",
    name: "Palm Lake Resort Eagleby Heights",
    suburb: "Eagleby",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "palm-lake-resort",
    amenities: ["Two clubhouses (Grand Summer House and Lakeview)", "indoor and outdoor pools", "undercover bowling green", "tennis courts", "theatre", "gym", "craft room", "library"],
    summary:
      "A master planned lifestyle community offering architecturally designed homes between Brisbane and the Gold Coast."
  },
  {
    slug: "palm-lake-resort-hervey-bay",
    name: "Palm Lake Resort Hervey Bay",
    suburb: "Eli Waters",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "palm-lake-resort",
    amenities: ["Library", "art classes", "bowling green", "gym", "tennis court", "resort pool", "indoor pool and spa", "caravan and boat storage", "workshop", "dancefloor"],
    summary:
      "A luxury over-50s community offering waterfront homes, resort facilities, and a vibrant coastal lifestyle in Hervey Bay.",
    lat: -25.286529,
    lng: 152.8110304
  },
  {
    slug: "palm-lake-resort-mt-warren-park",
    name: "Palm Lake Resort Mt Warren Park",
    suburb: "Mount Warren Park",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 80,
    operatorSlug: "palm-lake-resort",
    amenities: ["Community hall with baby grand piano", "library", "bowling green", "indoor pool", "sauna", "gym", "craft room", "games room", "dance floor", "courtesy bus", "security gates"],
    summary:
      "A luxury over-50s resort-style community between Brisbane and the Gold Coast, featuring individually designed homes and a secure lifestyle environment."
  },
  {
    slug: "palm-lake-resort-toowoomba",
    name: "Palm Lake Resort Toowoomba",
    suburb: "Toowoomba",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 180,
    operatorSlug: "palm-lake-resort",
    amenities: ["Pinnacle Country Club", "8-rink undercover bowling green", "infinity edge pool", "indoor and outdoor pools", "tennis precinct", "9-hole putt putt", "gymnasium", "sauna"],
    summary:
      "A luxury resort-style community for over-50s offering modern, elegant, low-maintenance homes in Toowoomba's elevated Garden City location."
  },
  {
    slug: "palm-lake-resort-upper-coomera",
    name: "Palm Lake Resort Upper Coomera",
    suburb: "Upper Coomera",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "palm-lake-resort",
    amenities: ["Library", "gym", "tennis court", "bowling green", "resort pool", "dance floor", "games room", "bar", "BBQ area", "caravan storage"],
    summary:
      "A boutique community on the Coomera River between Brisbane and the Gold Coast, offering picturesque recreational facilities."
  },
  {
    slug: "palm-lake-resort-waterford",
    name: "Palm Lake Resort Waterford",
    suburb: "Waterford",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "palm-lake-resort",
    amenities: ["Country club with 1", "500+ sqm covered space", "movie theatre", "games room", "dining facilities", "championship 8-rink indoor bowling complex", "gymnasium", "sauna", "swimming pool"],
    summary:
      "A resort community designed for active over-50s seeking luxury resort living, 30 minutes south of Brisbane."
  },
  {
    slug: "palm-lake-resort-ballina",
    name: "Palm Lake Resort Ballina",
    suburb: "Ballina",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "palm-lake-resort",
    amenities: ["The Oasis Country Club with bowling green", "heated pool", "gym", "movie theatre", "tennis courts", "library", "arts room", "dance floor", "virtual golf simulator"],
    summary:
      "A vibrant over-55s lifestyle community with world-class resort facilities right on the doorstep."
  },
  {
    slug: "palm-lake-resort-banora-point",
    name: "Palm Lake Resort Banora Point",
    suburb: "Banora Point",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "palm-lake-resort",
    amenities: ["Clubhouse with dance floor", "piano", "and library", "4-rink bowling green", "snooker tables", "hair salon", "resort pool", "games room", "workshop", "croquet court"],
    summary:
      "A luxury over-50s community in the Tweed Valley offering resort-style living positioned between beaches and hinterland."
  },
  {
    slug: "palm-lake-resort-fern-bay",
    name: "Palm Lake Resort Fern Bay",
    suburb: "Fern Bay",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "palm-lake-resort",
    amenities: ["Country Club", "off-leash pet area", "outdoor and indoor heated pools", "bowling green", "workshop", "dance floor", "library", "tennis courts", "movie theatre", "gymnasium", "boat ramp"],
    summary:
      "Luxurious over-50s living near Newcastle offering a beachside lifestyle within 25 minutes of the city."
  },
  {
    slug: "palm-lake-resort-tea-gardens",
    name: "Palm Lake Resort Tea Gardens",
    suburb: "Tea Gardens",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "palm-lake-resort",
    amenities: ["Two country clubs (Water Lilies and Promenade)", "indoor and outdoor pools", "bowling green", "tenpin bowling", "virtual golf simulator", "gym", "spa", "saunas", "tennis precinct"],
    summary:
      "Luxury resort-style living across 23 hectares with access to the scenic Mid-Coast region's beaches, rivers, and golf courses."
  },
  {
    slug: "palm-lake-resort-tweed-river",
    name: "Palm Lake Resort Tweed River",
    suburb: "Banora Point",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "palm-lake-resort",
    amenities: ["Clubhouse with 180-degree river views", "swimming pool and spa", "fitness centre", "marina with boat storage and moorings", "boardwalk along riverfront"],
    summary:
      "A luxury over-50s community offering stunning river views, world-class amenities, and a pet-friendly atmosphere."
  },
  {
    slug: "palm-lake-resort-yamba",
    name: "Palm Lake Resort Yamba",
    suburb: "Yamba",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "palm-lake-resort",
    amenities: ["Library", "pet friendly", "bowling green", "lounge areas", "dance floor", "pool table", "darts", "BBQ area", "caravan storage", "boat storage", "bar"],
    summary:
      "A gated resort community on the scenic Clarence River offering resort-style living with no entry or exit fees."
  },
  {
    slug: "palm-lake-resort-yamba-cove",
    name: "Palm Lake Resort Yamba Cove",
    suburb: "Yamba",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 78,
    operatorSlug: "palm-lake-resort",
    amenities: ["Heated magnesium swimming pool and spa", "yoga studio", "gymnasium", "movie theatre", "golf simulator", "art studio", "gated secure living"],
    summary:
      "An award-winning, luxury over-50s lifestyle community offering architecturally designed homes with comprehensive recreational amenities."
  },
  {
    slug: "palm-lake-resort-paynesville",
    name: "Palm Lake Resort Paynesville",
    suburb: "Paynesville",
    state: "VIC",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 195,
    operatorSlug: "palm-lake-resort",
    amenities: ["Heated indoor swimming pool and spa", "3-lane ten-pin bowling alley", "8-rink undercover bowling green", "gymnasium", "luxury cinema", "yoga studio", "pickleball courts", "billiards room"],
    priceFrom: "$745,000",
    summary:
      "A luxury over-50s gated community in Victoria's Gippsland Lakes region offering new homes with extensive recreational facilities."
  },
  {
    slug: "palm-lake-resort-phillip-island",
    name: "Palm Lake Resort Phillip Island",
    suburb: "Cowes",
    state: "VIC",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "palm-lake-resort",
    amenities: ["Indoor heated pool (32°C)", "indoor bowls", "Grand Hall with movie theatre and dance floor", "games room", "gym", "library", "elegant dining room", "BBQ area"],
    summary:
      "Exclusive resort-style living in a prestigious Cowes location between the golf course and lawn bowls club."
  },
  {
    slug: "palm-lake-resort-truganina",
    name: "Palm Lake Resort Truganina",
    suburb: "Truganina",
    state: "VIC",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "palm-lake-resort",
    amenities: ["Paradise Palms Country Club", "indoor heated pool", "undercover bowling green", "gym", "licensed bar", "workshop", "dance floor", "movie theatre", "golf simulator", "sauna & spa"],
    summary:
      "A resort-style community offering high-quality Hebel homes and extensive recreational facilities for active retirees in metropolitan Melbourne."
  },
  {
    slug: "palm-lake-resort-willow-lodge",
    name: "Palm Lake Resort Willow Lodge",
    suburb: "Bangholme",
    state: "VIC",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "palm-lake-resort",
    amenities: ["Swimming pool", "bowling green", "onsite medical centre", "hairdresser", "cafe/coffee lounge", "craft shop", "workshop", "cinema", "gym", "bar", "library", "games room", "dance floor"],
    summary:
      "An over-50s resort-style living community offering 2 and 3 bedroom homes 55 minutes south of Melbourne."
  },
  {
    slug: "ocean-club-resort",
    name: "Ocean Club Resort",
    suburb: "Lake Cathie",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "ocean-club-resort",
    amenities: ["Heated swimming pool", "yoga classes", "lawn bowls", "architecturally-designed contemporary homes", "resort-style facilities"],
    summary:
      "Resort-style living in a seaside community on the Mid-North Coast of NSW for active over-50s, with no exit fees or stamp duty."
  },
  {
    slug: "solana-1770-agnes-water",
    name: "Solana 1770 Agnes Water",
    suburb: "Agnes Water",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "solana-lifestyle-resorts",
    amenities: ["Livewell Centre with indoor/outdoor pools", "tennis courts", "lawn bowls", "gymnasium", "cinema", "library", "craft rooms", "cafe"],
    summary:
      "Ground-level, low-maintenance homes in a peaceful coastal setting where residents enjoy active leisure and relaxed beach town living."
  },
  {
    slug: "solana-northern-beaches-mackay",
    name: "Solana Northern Beaches Mackay",
    suburb: "Rural View",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 386,
    operatorSlug: "solana-lifestyle-resorts",
    amenities: ["Livewell Centre with indoor/outdoor pools", "tennis courts", "lawn bowls greens", "gymnasium", "cinema", "library", "craft rooms", "cafe", "BBQ areas"],
    summary:
      "A coastal resort positioned as a gateway to the Whitsunday Islands with modern, ground-level homes and no body corporate fees.",
    lat: -21.0661,
    lng: 149.1597
  },
  {
    slug: "solana-hervey-bay",
    name: "Solana Hervey Bay",
    suburb: "Nikenbah",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 0,
    operatorSlug: "solana-lifestyle-resorts",
    amenities: ["Livewell Centre with indoor/outdoor pools", "tennis courts", "lawn bowls", "gymnasium", "cinema", "library", "craft rooms", "cafe", "BBQ areas"],
    summary:
      "Serene coastal living in Hervey Bay, famous for whale watching, water sports, fishing and access to Fraser Island.",
    lat: -25.3174042,
    lng: 152.8324503
  },
  {
    slug: "solana-bribie-island",
    name: "Solana Bribie Island",
    suburb: "Bongaree",
    state: "QLD",
    type: "Over-50s",
    status: "Established",
    homeCount: 0,
    operatorSlug: "solana-lifestyle-resorts",
    amenities: ["Livewell Centre with indoor/outdoor pools", "tennis courts", "bowling greens", "gym", "cinema", "library", "craft rooms", "cafe", "community garden"],
    summary:
      "A 50+ lifestyle resort offering ground-level, low-maintenance homes with no stamp duty, body corporate fees, or exit fees; now sold out with resales available."
  },
  {
    slug: "solana-bargara",
    name: "Solana Bargara",
    suburb: "Bargara",
    state: "QLD",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 0,
    operatorSlug: "solana-lifestyle-resorts",
    amenities: ["Details to be confirmed as the community progresses toward launch"],
    summary:
      "A forthcoming over-50s lifestyle resort in Bargara, currently taking registrations of interest ahead of its launch."
  },
  {
    slug: "ashcroft",
    name: "Ashcroft",
    suburb: "Flagstone",
    state: "QLD",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 293,
    operatorSlug: "millbray",
    amenities: ["Pool & spa pavilion", "pickleball courts", "bowling green", "fitness studio", "cinema", "golf simulator", "craft room", "event space", "dog park"],
    summary:
      "A gated over-50s community in Flagstone blending thoughtful design with wellness and social connection."
  },
  {
    slug: "monterey",
    name: "Monterey",
    suburb: "Kendall",
    state: "NSW",
    type: "Over-50s",
    status: "Selling Now",
    homeCount: 198,
    operatorSlug: "allam-property-group",
    amenities: ["Beach access nearby", "national parks and bushwalks", "community pool", "tennis courts", "community centre", "golf and bowls at Kew Country Club"],
    summary:
      "An over-55s land lease community on the NSW Mid North Coast offering a new lease on life with convenient access to beaches, recreation and regional services."
  },
  {
    slug: "monterey-tuncurry",
    name: "Monterey Tuncurry",
    suburb: "Tuncurry",
    state: "NSW",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 283,
    operatorSlug: "allam-property-group",
    amenities: ["Planned community centre and shared amenities"],
    summary:
      "Allam Property's planned second land lease community on the NSW Mid North Coast, currently at development application stage with council."
  },
  {
    slug: "oceane-victor-harbor",
    name: "Océane",
    suburb: "McCracken",
    state: "SA",
    type: "Over-50s",
    status: "Under Development",
    homeCount: 272,
    operatorSlug: "kingsley-properties",
    amenities: ["Village precinct with retail", "Wellness centre", "Coastal location"],
    summary:
      "A 272-home over-50s land lease community, part of a larger master-planned coastal development near Victor Harbor on the Fleurieu Peninsula.",
    lat: -35.541,
    lng: 138.635
  },
  {
    slug: "ingenia-holiday-kingscliff",
    name: "Ingenia Holiday Kingscliff",
    suburb: "Chinderah",
    state: "NSW",
    type: "Over-50s",
    status: "Established",
    homeCount: 107,
    operatorSlug: "ingenia-communities",
    amenities: ["Swimming pool", "games room", "playground"],
    summary:
      "A long-running mixed-use park on the Tweed Coast combining permanent over-50s land lease homes with a separate holiday park section, set on a peninsula between the Tweed River and Kingscliff Beach.",
    lat: -28.236074,
    lng: 153.5602572
  },
];

export function getOperator(slug: string): Operator | undefined {
  return operators.find((o) => o.slug === slug);
}

export function getCommunity(slug: string): Community | undefined {
  return communities.find((c) => c.slug === slug);
}

export function getCommunitiesByOperator(operatorSlug: string): Community[] {
  return communities.filter((c) => c.operatorSlug === operatorSlug);
}

export function getCommunitiesByState(state: string): Community[] {
  return communities.filter((c) => c.state === state);
}

export function getStateCounts(): { state: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const c of communities) {
    counts.set(c.state, (counts.get(c.state) ?? 0) + 1);
  }
  return Array.from(counts.entries()).map(([state, count]) => ({ state, count }));
}
