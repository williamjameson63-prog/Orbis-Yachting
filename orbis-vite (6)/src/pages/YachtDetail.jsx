import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Header, Footer, GlobalStyles, Coord, SectionLabel } from "../components/Chrome.jsx";
import { getYachtBySlug, yachts } from "../data/yachts.js";

function Stat({ label, value }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: "#8A8371" }}>
        {label}
      </span>
      <span className="disp text-xl md:text-2xl font-light">{value}</span>
    </div>
  );
}

export default function YachtDetail() {
  const { slug } = useParams();
  const yacht = getYachtBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleEnquire = () => {
    const parts = ["will", "orbisyachting.com"];
    const subject = encodeURIComponent(`Charter Enquiry — ${yacht ? yacht.name : ""}`);
    window.location.href = `mailto:${parts[0]}@${parts[1]}?subject=${subject}`;
  };

  if (!yacht) {
    return (
      <div className="w-full min-h-screen" style={{ background: "#F6F3EC", color: "#17140F", fontFamily: "'Inter', sans-serif" }}>
        <GlobalStyles />
        <Header transparentOnTop={false} />
        <section className="max-w-[800px] mx-auto px-6 py-32 text-center">
          <h1 className="disp text-3xl font-light mb-4">Yacht not found</h1>
          <p className="mb-8" style={{ color: "#3A3529" }}>
            We couldn't find that yacht in the current collection.
          </p>
          <Link to="/yachts" className="text-[12px] tracking-[0.15em] uppercase px-8 py-3.5 border rounded-full inline-block" style={{ borderColor: "rgba(23,20,15,0.35)" }}>
            View Full Fleet
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  const otherYachts = yachts.filter((y) => y.slug !== yacht.slug).slice(0, 3);

  return (
    <div className="w-full min-h-screen" style={{ background: "#F6F3EC", color: "#17140F", fontFamily: "'Inter', sans-serif" }}>
      <GlobalStyles />
      <Header transparentOnTop={false} />

      {/* HERO */}
      <section className="relative w-full overflow-hidden h-[420px] md:h-[64vh]" style={{ minHeight: "380px" }}>
        <img
          src={yacht.heroPhoto}
          alt={`${yacht.name} exterior`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(16,14,11,0.05) 0%, rgba(16,14,11,0.1) 45%, rgba(16,14,11,0.65) 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 max-w-[1400px] mx-auto px-6 md:px-10 pb-8 md:pb-12">
          <Coord dark>{yacht.builder}{yacht.built ? ` · Built ${yacht.built}` : ""}</Coord>
          <h1 className="disp text-4xl md:text-6xl font-light mt-3" style={{ color: "#F6F3EC" }}>
            {yacht.name}
          </h1>
          <p className="mt-2 text-[14px] md:text-[15px]" style={{ color: "rgba(246,243,236,0.75)" }}>
            {yacht.location}
          </p>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="border-b hairline">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8 grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
          <Stat label="Length" value={yacht.length.split(" / ")[0]} />
          <Stat label="Guests" value={yacht.guests} />
          <Stat label="Cabins" value={yacht.cabins} />
          <Stat label="Crew" value={yacht.crew ?? "On Enquiry"} />
          <Stat label="Max Speed" value={yacht.maxSpeed} />
          <Stat label="From" value={yacht.priceFrom} />
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="max-w-[1000px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <SectionLabel>Overview</SectionLabel>
        <p className="text-[17px] md:text-[19px] leading-relaxed" style={{ color: "#3A3529" }}>
          {yacht.description}
        </p>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-[13px]" style={{ color: "#3A3529" }}>
          <span><span style={{ color: "#8A8371" }}>Type </span>{yacht.type}</span>
          <span><span style={{ color: "#8A8371" }}>Flag </span>{yacht.flag}</span>
          <span><span style={{ color: "#8A8371" }}>Beam </span>{yacht.beam}</span>
          <span><span style={{ color: "#8A8371" }}>Draft </span>{yacht.draft}</span>
          <span><span style={{ color: "#8A8371" }}>Cruising Speed </span>{yacht.cruisingSpeed}</span>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 md:py-28" style={{ background: "#EDE8DC" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <SectionLabel>Gallery</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {yacht.gallery.map((g, i) => (
              <div key={i} className={`relative overflow-hidden ${i === 0 ? "col-span-2 md:col-span-2 row-span-2 aspect-[4/3] md:aspect-auto" : "aspect-[4/3]"}`}>
                <img src={g.src} alt={g.caption ? `${yacht.name} — ${g.caption}` : `${yacht.name} — photo ${i + 1}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                {g.caption && (
                  <span className="absolute bottom-2 left-2 font-mono text-[9px] tracking-[0.15em] uppercase px-2 py-1" style={{ color: "#F6F3EC", background: "rgba(16,14,11,0.5)" }}>
                    {g.caption}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCOMMODATION */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionLabel>Accommodation</SectionLabel>
            <p className="text-[15px] leading-relaxed" style={{ color: "#3A3529" }}>
              {yacht.cabins} cabins for up to {yacht.guests} guests{yacht.crew ? `, run by a crew of ${yacht.crew}` : ""}.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="space-y-4">
              {yacht.cabinConfig.map((c, i) => (
                <li key={i} className="flex items-start gap-4 pb-4 border-b hairline text-[15px]" style={{ color: "#17140F" }}>
                  <span className="font-mono text-[11px] mt-1" style={{ color: "#A7844F" }}>{String(i + 1).padStart(2, "0")}</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TOYS & AMENITIES */}
      {((yacht.toys && yacht.toys.length > 0) || (yacht.amenities && yacht.amenities.length > 0)) && (
        <section className="py-20 md:py-28" style={{ background: "#EDE8DC" }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14">
            {yacht.toys && yacht.toys.length > 0 && (
              <div>
                <SectionLabel>Water Toys</SectionLabel>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-[14px]" style={{ color: "#3A3529" }}>
                  {yacht.toys.map((t, i) => <li key={i}>· {t}</li>)}
                </ul>
              </div>
            )}
            {yacht.amenities && yacht.amenities.length > 0 && (
              <div>
                <SectionLabel>Amenities</SectionLabel>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-[14px]" style={{ color: "#3A3529" }}>
                  {yacht.amenities.map((a, i) => <li key={i}>· {a}</li>)}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CREW */}
      {yacht.crewList && yacht.crewList.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <SectionLabel>Yacht Crew</SectionLabel>
          <h2 className="disp text-3xl md:text-4xl font-light mb-12">{yacht.crew} aboard {yacht.name}</h2>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
            {yacht.crewList.map((c) => (
              <div key={c.name} className="pb-8 border-b hairline">
                <div className="flex justify-between items-baseline">
                  <h3 className="disp text-xl font-light">{c.name}</h3>
                  <Coord>{c.role}</Coord>
                </div>
                <p className="mt-1 text-[12px]" style={{ color: "#8A8371" }}>
                  {c.nationality} {c.languages ? `· ${c.languages}` : ""}
                </p>
                <p className="mt-3 text-[14px] leading-relaxed" style={{ color: "#3A3529" }}>{c.bio}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* RATES */}
      <section className="py-20 md:py-28" style={{ background: "#17140F" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <SectionLabel dark>Charter Rates</SectionLabel>
          <h2 className="disp text-3xl md:text-4xl font-light mb-12" style={{ color: "#F6F3EC" }}>
            Indicative pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {yacht.rates.map((r, i) => (
              <div key={i} className="border-t pt-6" style={{ borderColor: "rgba(246,243,236,0.14)" }}>
                <Coord dark>{r.season}</Coord>
                <p className="mt-2 text-[13px]" style={{ color: "rgba(246,243,236,0.6)" }}>{r.dates}</p>
                <p className="disp text-2xl font-light mt-4" style={{ color: "#F6F3EC" }}>{r.price}</p>
                <p className="mt-1 text-[12px]" style={{ color: "rgba(246,243,236,0.5)" }}>{r.area}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[13px] max-w-xl" style={{ color: "rgba(246,243,236,0.5)" }}>
            Rates shown are base charter fees and exclude expenses, APA and taxes, which vary by
            itinerary and season. Get in touch for a tailored quote and current availability.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 text-center" style={{ background: "#EDE8DC" }}>
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="disp text-3xl md:text-5xl font-light leading-tight">
            Interested in {yacht.name}?
          </h2>
          <p className="mt-6 text-[16px]" style={{ color: "#3A3529" }}>
            Reach out with your dates and guest count and we'll confirm availability, current
            rates and whether she's the right fit for your itinerary.
          </p>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleEnquire(); }}
            className="inline-block mt-10 text-[12px] tracking-[0.15em] uppercase px-8 py-4 border"
            style={{ color: "#17140F", borderColor: "rgba(23,20,15,0.35)" }}
          >
            Enquire About This Yacht
          </a>
        </div>
      </section>

      {/* MORE YACHTS */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex justify-between items-end mb-12">
          <SectionLabel>Continue Browsing</SectionLabel>
          <Link to="/yachts" className="hidden md:block text-[12px] tracking-[0.15em] uppercase link-quiet">
            View Full Fleet
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {otherYachts.map((y) => (
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
      </section>

      <Footer />
    </div>
  );
}
