import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Header, Footer, GlobalStyles, SectionLabel } from "../components/Chrome.jsx";
import { yachts } from "../data/yachts.js";
import { parseWeeklyPrice, parseLengthFeet, getYachtRegion, getAllRegions, getYachtMonths } from "../utils/yachtFilters.js";

const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const fieldClass = "w-full bg-transparent border-b py-2 text-[14px] focus:outline-none";
const fieldStyle = { borderColor: "rgba(23,20,15,0.25)", color: "#17140F" };
const labelClass = "block font-mono text-[10px] tracking-[0.2em] uppercase mb-2";
const labelStyle = { color: "#8A8371" };

export default function Fleet() {
  const regions = useMemo(() => getAllRegions(yachts), []);

  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [lengthMin, setLengthMin] = useState("");
  const [lengthMax, setLengthMax] = useState("");
  const [cabinsMin, setCabinsMin] = useState("");
  const [guestsMin, setGuestsMin] = useState("");
  const [region, setRegion] = useState("");
  const [month, setMonth] = useState("");

  const filtered = useMemo(() => {
    return yachts.filter((y) => {
      const price = parseWeeklyPrice(y.priceFrom);
      const lengthFt = parseLengthFeet(y.length);

      if (priceMin && price !== null && price < parseFloat(priceMin)) return false;
      if (priceMax && price !== null && price > parseFloat(priceMax)) return false;
      if (lengthMin && lengthFt !== null && lengthFt < parseFloat(lengthMin)) return false;
      if (lengthMax && lengthFt !== null && lengthFt > parseFloat(lengthMax)) return false;
      if (cabinsMin && y.cabins < parseInt(cabinsMin, 10)) return false;
      if (guestsMin && y.guests < parseInt(guestsMin, 10)) return false;
      if (region && getYachtRegion(y) !== region) return false;
      if (month !== "") {
        const months = getYachtMonths(y);
        if (months && !months.has(parseInt(month, 10))) return false;
      }
      return true;
    });
  }, [priceMin, priceMax, lengthMin, lengthMax, cabinsMin, guestsMin, region, month]);

  const hasActiveFilters = priceMin || priceMax || lengthMin || lengthMax || cabinsMin || guestsMin || region || month !== "";

  const resetFilters = () => {
    setPriceMin(""); setPriceMax(""); setLengthMin(""); setLengthMax("");
    setCabinsMin(""); setGuestsMin(""); setRegion(""); setMonth("");
  };

  return (
    <div
      className="w-full min-h-screen"
      style={{ background: "#F6F3EC", color: "#17140F", fontFamily: "'Inter', sans-serif" }}
    >
      <GlobalStyles />
      <Header transparentOnTop={false} />

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 pb-12 md:pt-28 md:pb-16">
        <SectionLabel>The Collection</SectionLabel>
        <h1 className="disp text-4xl md:text-6xl font-light leading-tight max-w-2xl">
          Yachts for Charter
        </h1>
        <p className="mt-6 text-[16px] md:text-[17px] leading-relaxed max-w-xl" style={{ color: "#3A3529" }}>
          A working sample of the market we operate across — not a fixed fleet. Every charter
          starts with a conversation about your dates, guests and destination, and we draw on
          the market as a whole to find the right yacht for it.
        </p>
      </section>

      {/* SEARCH / FILTER PANEL */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-12">
        <div className="border-t border-b hairline py-8 md:py-10">
          <div className="grid md:grid-cols-6 gap-8 md:gap-6">
            <div>
              <label className={labelClass} style={labelStyle}>Location</label>
              <select value={region} onChange={(e) => setRegion(e.target.value)} className={fieldClass} style={fieldStyle}>
                <option value="">Any location</option>
                {regions.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>

            <div>
              <label className={labelClass} style={labelStyle}>When</label>
              <select value={month} onChange={(e) => setMonth(e.target.value)} className={fieldClass} style={fieldStyle}>
                <option value="">Any time</option>
                {MONTH_NAMES.map((m, i) => <option key={m} value={i}>{m}</option>)}
              </select>
            </div>

            <div>
              <label className={labelClass} style={labelStyle}>Price / Week</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder="Min"
                  value={priceMin}
                  onChange={(e) => setPriceMin(e.target.value)}
                  className={fieldClass}
                  style={fieldStyle}
                />
                <span style={{ color: "#8A8371" }}>–</span>
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder="Max"
                  value={priceMax}
                  onChange={(e) => setPriceMax(e.target.value)}
                  className={fieldClass}
                  style={fieldStyle}
                />
              </div>
            </div>

            <div>
              <label className={labelClass} style={labelStyle}>Length (ft)</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder="Min"
                  value={lengthMin}
                  onChange={(e) => setLengthMin(e.target.value)}
                  className={fieldClass}
                  style={fieldStyle}
                />
                <span style={{ color: "#8A8371" }}>–</span>
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder="Max"
                  value={lengthMax}
                  onChange={(e) => setLengthMax(e.target.value)}
                  className={fieldClass}
                  style={fieldStyle}
                />
              </div>
            </div>

            <div>
              <label className={labelClass} style={labelStyle}>Cabins</label>
              <select value={cabinsMin} onChange={(e) => setCabinsMin(e.target.value)} className={fieldClass} style={fieldStyle}>
                <option value="">Any</option>
                {[2, 3, 4, 5, 6, 7, 8].map((n) => <option key={n} value={n}>{n}+</option>)}
              </select>
            </div>

            <div>
              <label className={labelClass} style={labelStyle}>Guests</label>
              <select value={guestsMin} onChange={(e) => setGuestsMin(e.target.value)} className={fieldClass} style={fieldStyle}>
                <option value="">Any</option>
                {[2, 4, 6, 8, 10, 12, 16, 20].map((n) => <option key={n} value={n}>{n}+</option>)}
              </select>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className="font-mono text-[11px] tracking-[0.1em] uppercase" style={{ color: "#8A8371" }}>
              {filtered.length} of {yachts.length} yachts
            </span>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="font-mono text-[11px] tracking-[0.15em] uppercase link-quiet"
                style={{ color: "#A7844F" }}
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-24 md:pb-32">
        {filtered.length === 0 ? (
          <div className="py-20 text-center border-t hairline">
            <SectionLabel>No Matches</SectionLabel>
            <p className="text-[16px] max-w-md mx-auto" style={{ color: "#3A3529" }}>
              Nothing in the collection matches those filters right now — but the market is much
              larger than what's shown here. Get in touch and we'll find what fits.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {filtered.map((y) => (
              <Link to={`/yachts/${y.slug}`} key={y.slug} className="group block">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={y.heroPhoto}
                    alt={`${y.name} superyacht exterior`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 flex justify-between items-baseline">
                  <h3 className="disp text-2xl font-light">{y.name}</h3>
                  <span className="font-mono text-[11px]" style={{ color: "#8A8371" }}>{y.length.split(" / ")[0]}</span>
                </div>
                <div className="mt-1 flex justify-between items-center text-[13px]" style={{ color: "#3A3529" }}>
                  <span>{y.location.split(" · ")[0]} · {y.guests} guests</span>
                  <span className="font-mono text-[12px]" style={{ color: "#A7844F" }}>{y.priceFrom}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
