/* ---------------------------------------------------------
   ORBIS YACHTING — Destinations
   Photography sourced from live destination-guide pages;
   copy written fresh in Orbis's own voice.
--------------------------------------------------------- */

export const destinations = [
  {
    slug: "bvi",
    name: "British Virgin Islands",
    region: "Caribbean",
    photo: "https://storage.googleapis.com/iyc-web-storage/2020/12/5febaf799b0ec_5_iyc_virgin_islands_e1567682513967_a823f8d217.jpg",
    bestTime: "Year-round — busiest Dec–Apr",
    blurb:
      "Around 60 islands and cays in easy line-of-sight of one another, which makes the BVI one of the most forgiving and rewarding places anywhere to charter. Short hops between anchorages, calm water and a steady trade wind — Anegada, Virgin Gorda and Jost Van Dyke all within a day's sail of each other.",
  },
  {
    slug: "usvi",
    name: "US Virgin Islands",
    region: "Caribbean",
    photo: "https://storage.googleapis.com/iyc-web-storage/2020/12/5febb329b0d11_istock_661841134_1_39ecb6e236.jpg",
    bestTime: "Apr – Jun for the best sun with least rain",
    blurb:
      "St. Thomas, St. John and St. Croix, each with a distinct personality — lively duty-free shopping on St. Thomas, an almost entirely protected national park on St. John, and a quieter, more historic pace on St. Croix. Pairs naturally with a BVI itinerary across the Sir Francis Drake Channel.",
  },
  {
    slug: "bahamas",
    name: "Bahamas",
    region: "Caribbean · Atlantic",
    photo: "https://storage.googleapis.com/iyc-web-storage/iyc_destination_bahamas_header_adios_064f136a57.jpg",
    bestTime: "Dec – Apr",
    blurb:
      "700 islands and cays scattered across shallow, brilliantly clear water — the Exumas for sandbars and swimming pigs, the Abacos for colonial towns and quiet cays. Shallow draft is an asset here more than almost anywhere else we send guests.",
  },
  {
    slug: "belize",
    name: "Belize",
    region: "Central America",
    photo: "https://storage.googleapis.com/iyc-web-storage/shutterstock_1049065187_processed_753687d6ba.jpg",
    bestTime: "Dec – Apr, with Mar best for whale sharks",
    blurb:
      "A 240-mile coastline and over 400 islands and cays behind the Mesoamerican Barrier Reef — the second-largest reef system on earth. Still largely undiscovered by the charter world, with the Great Blue Hole, Mayan ruins ashore and some of the clearest diving in the Caribbean.",
  },
  {
    slug: "st-martin-st-barths",
    name: "St. Martin & St. Barths",
    region: "Caribbean",
    photo: "https://storage.googleapis.com/iyc-web-storage/iyc_Destination_st_maarten_cover_65870ae0fd.jpg",
    bestTime: "Dec – Apr",
    blurb:
      "One small island split between Dutch St. Maarten and French St. Martin, with two very different characters either side of an open border — and the perfect springboard for St. Barths, Anguilla and Antigua beyond. A natural hub for a wider Leeward Islands itinerary.",
  },
  {
    slug: "grenadines",
    name: "The Grenadines",
    region: "Caribbean",
    photo: "https://storage.googleapis.com/iyc-web-storage/iyc_destination_st_vincent_grenadines_header_b8c4319d19.jpg",
    bestTime: "Dec – Apr",
    blurb:
      "32 volcanic islands strung south from St. Vincent, only nine of them inhabited — Bequia, Mustique, Canouan and the Tobago Cays among them. Quieter and less developed than the BVI or St. Barths, with an island-hopping route that runs naturally down to Grenada.",
  },
  {
    slug: "greece",
    name: "Greece",
    region: "Mediterranean",
    photo: "https://storage.googleapis.com/iyc-web-storage/iyc_greece_cover_0bb4e3e6c0.jpg",
    bestTime: "Apr – Oct, with May, Jun & Sep our pick",
    blurb:
      "Over 2,000 islands spread across the Aegean and Ionian seas — the whitewashed Cyclades, the history-soaked Dodecanese, the calmer, greener Ionian chain. Few destinations anywhere offer this much variety of island, culture and coastline within a single charter.",
  },
  {
    slug: "croatia",
    name: "Croatia",
    region: "Mediterranean",
    photo: "https://storage.googleapis.com/iyc-web-storage/2020/12/5febaae994cee_croatia_yacht_charter_luxury_9c2e76084b.jpg",
    bestTime: "May – Oct",
    blurb:
      "Over a thousand islands along the Dalmatian coast, with walled cities like Dubrovnik and Split anchoring a route through Hvar, Vis, Brač and the protected Kornati archipelago. Some of the clearest water in the Adriatic, and a coastline still relatively unspoiled by its own popularity.",
  },
  {
    slug: "italy",
    name: "Italy",
    region: "Mediterranean",
    photo: "https://storage.googleapis.com/iyc-web-storage/2020/12/5febac274cb8b_italy_yacht_charter_9b74e52c18.jpg",
    bestTime: "May – Oct",
    blurb:
      "From the cliffside towns of the Amalfi Coast to the turquoise anchorages of Sardinia and the volcanic Aeolian Islands, Italy offers as much variety as anywhere in the Mediterranean — glamorous harbours one day, remote coves and black-sand beaches the next.",
  },
];

export const getDestinationBySlug = (slug) => destinations.find((d) => d.slug === slug);
