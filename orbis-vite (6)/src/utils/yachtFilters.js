/* ---------------------------------------------------------
   ORBIS YACHTING — Yacht search/filter helpers
--------------------------------------------------------- */

// Extracts a rough weekly USD/EUR figure for range filtering.
// Currencies aren't converted — this is an approximate comparison,
// not a precise price, since the fleet mixes $ and € listings.
export function parseWeeklyPrice(priceFrom) {
  if (!priceFrom) return null;
  const match = priceFrom.replace(/,/g, "").match(/(\d+(\.\d+)?)/);
  return match ? parseFloat(match[1]) : null;
}

// Extracts length in feet regardless of whether the string is
// "80ft" or "23.99m / 80ft".
export function parseLengthFeet(length) {
  if (!length) return null;
  const match = length.match(/([\d.]+)\s*ft/);
  return match ? parseFloat(match[1]) : null;
}

// Known cruising regions we can confidently bucket a yacht's
// location string into, for the location filter dropdown.
const REGIONS = [
  "British Virgin Islands",
  "US Virgin Islands",
  "Bahamas",
  "Caribbean",
  "Croatia",
  "Greece",
  "Italy",
  "Sardinia",
  "Corsica",
  "Turkey",
  "Indonesia",
  "Portugal",
  "Mediterranean",
];

export function getYachtRegion(yacht) {
  const loc = yacht.location || "";
  for (const region of REGIONS) {
    if (loc.toLowerCase().includes(region.toLowerCase())) return region;
  }
  return "Other";
}

export function getAllRegions(yachts) {
  const set = new Set(yachts.map(getYachtRegion));
  return Array.from(set).sort();
}

// Very approximate season matching: scans each rate's "dates" string
// for month names and returns the set of months (0-11) that yacht's
// published rates cover. Returns null when nothing parseable is found,
// which we treat as "no restriction" rather than hiding the yacht.
const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

export function getYachtMonths(yacht) {
  if (!yacht.rates || yacht.rates.length === 0) return null;
  const found = new Set();
  for (const r of yacht.rates) {
    const text = `${r.dates || ""} ${r.season || ""}`.toLowerCase();
    MONTHS.forEach((m, i) => {
      if (text.includes(m)) found.add(i);
    });
  }
  if (found.size === 0) return null;
  // A single named month is a start or end point of a range — assume the
  // yacht is bookable broadly across the season rather than one month only
  // when a clear range (two+ months) isn't present.
  if (found.size === 1) return null;
  return found;
}
