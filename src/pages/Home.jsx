import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, Footer, GlobalStyles, Coord, SectionLabel, Img } from "../components/Chrome.jsx";
import { getYachtBySlug } from "../data/yachts.js";

const HERO_SLIDES = [
  {
    src: "/images/hero-7.jpg",
    alt: "Aerial drone shot of a sailing catamaran anchored near a crowded floating party boat and tenders in a turquoise bay",
    coord: "41.2284\u00b0 N \u00b7 9.4471\u00b0 E \u2014 La Maddalena Archipelago",
    posMobile: "50% 62%",
    posDesktop: "50% 78%",
  },
  {
    src: "/images/hero-2.jpg",
    alt: "Aerial top-down drone shot of a catamaran anchored alone in clear turquoise water",
    coord: "18.5103\u00b0 N \u00b7 64.3853\u00b0 W \u2014 British Virgin Islands",
    posMobile: "56% 50%",
    posDesktop: "56% 80%",
  },
  {
    src: "/images/hero-3.jpg",
    alt: "Aerial drone shot of a sailing catamaran at anchor with kitesurfers nearby in turquoise Caribbean water",
    coord: "18.7268\u00b0 N \u00b7 64.4031\u00b0 W \u2014 British Virgin Islands",
    posMobile: "50% 45%",
    posDesktop: "50% 40%",
  },
  {
    src: "/images/hero-1.jpg",
    alt: "Aerial drone shot of an illuminated catamaran at anchor at night",
    coord: "41.3649\u00b0 N \u00b7 9.2694\u00b0 E \u2014 Sardinia, Italy",
    posMobile: "50% 42%",
    posDesktop: "50% 40%",
  },
  {
    src: "/images/hero-5.jpg",
    alt: "Aerial drone shot of two motor yachts anchored off a hillside coastal village with turquoise water",
    coord: "41.1186\u00b0 N \u00b7 9.5431\u00b0 E \u2014 Porto Cervo, Sardinia",
    posMobile: "50% 62%",
    posDesktop: "50% 75%",
  },
  {
    src: "/images/hero-6.jpg",
    alt: "Aerial drone shot of a superyacht at anchor in a bay off a rocky, wooded coastline",
    coord: "41.1181\u00b0 N \u00b7 9.5448\u00b0 E \u2014 Porto Cervo, Sardinia",
    posMobile: "50% 57%",
    posDesktop: "50% 64%",
  },
  {
    src: "/images/hero-4.jpg",
    alt: "Aerial drone shot of a sailing catamaran anchored in a clear turquoise cove surrounded by rocky coastline",
    coord: "18.3136\u00b0 N \u00b7 64.6178\u00b0 W \u2014 British Virgin Islands",
    posMobile: "50% 55%",
    posDesktop: "50% 58%",
  },
  {
    src: "/images/hero-8.jpg",
    alt: "Aerial drone shot of a busy yacht anchorage with numerous yachts and boats leaving wakes near a rocky coastal village",
    coord: "41.1186\u00b0 N \u00b7 9.5432\u00b0 E \u2014 Porto Cervo, Sardinia",
    posMobile: "50% 48%",
    posDesktop: "50% 50%",
  },
];

const FEATURED_SLUGS = ["mane-et-nocte", "xmotion", "ocean-vibes"];

export default function Home() {
  const handleTalkWithUs = () => {
    const parts = ["will", "orbisyachting.com"];
    const subject = encodeURIComponent("Charter Enquiry");
    window.location.href = `mailto:${parts[0]}@${parts[1]}?subject=${subject}`;
  };

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const featuredYachts = FEATURED_SLUGS.map(getYachtBySlug).filter(Boolean);

  return (
    <div
      className="w-full min-h-screen"
      style={{
        background: "#F6F3EC",
        color: "#17140F",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <GlobalStyles />
      <Header />

      {/* HERO */}
      <section className="relative w-full overflow-hidden h-[500px] md:h-[72vh]" style={{ minHeight: "420px" }}>
        {HERO_SLIDES.map((slide, i) => {
          const posClass = `object-[${slide.posMobile.replace(" ", "_")}] md:object-[${slide.posDesktop.replace(" ", "_")}]`;
          return (
            <img
              key={slide.coord + i}
              src={slide.src}
              alt={slide.alt}
              className={`absolute inset-0 w-full h-full object-cover ${posClass} transition-opacity duration-1000 ease-in-out`}
              style={{
                filter: "contrast(1.05) saturate(1.02) brightness(1.0)",
                opacity: i === heroIndex ? 1 : 0,
              }}
            />
          );
        })}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(16,14,11,0) 0%, rgba(16,14,11,0.05) 55%, rgba(16,14,11,0.55) 100%)" }} />

        <div className="absolute inset-x-0 bottom-0 max-w-[1400px] mx-auto px-6 md:px-10 pb-5 md:pb-6">
          <div className="fade-up flex items-center justify-between">
            <span
              className="font-mono text-[8px] tracking-[0.18em] uppercase transition-opacity duration-700"
              style={{ color: "rgba(246,243,236,0.5)" }}
              key={HERO_SLIDES[heroIndex].coord}
            >
              {HERO_SLIDES[heroIndex].coord}
            </span>
            <div className="hidden md:flex items-center gap-3">
              <span className="w-5 h-px" style={{ background: "rgba(246,243,236,0.3)" }} />
              <span
                className="font-mono text-[8px] tracking-[0.18em] uppercase"
                style={{ color: "rgba(246,243,236,0.5)" }}
              >
                Scroll
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PRIMARY CTA */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col items-center">
          <div className="py-10">
            <Link
              to="/yachts"
              className="text-[12px] tracking-[0.15em] uppercase px-8 py-3.5 border rounded-full inline-block"
              style={{ color: "#17140F", borderColor: "rgba(23,20,15,0.35)" }}
            >
              Yachts for Charter
            </Link>
          </div>
          <div className="w-full border-t hairline" />
          <div className="py-10">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleTalkWithUs(); }}
              className="text-[12px] tracking-[0.15em] uppercase px-8 py-3.5 border rounded-full"
              style={{ color: "#17140F", borderColor: "rgba(23,20,15,0.35)" }}
            >
              Talk With Us
            </a>
          </div>
        </div>
      </section>

      {/* WHY ENQUIRE DIRECTLY */}
      <section className="max-w-[1000px] mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
        <SectionLabel dark={false}>Why Reach Out Directly</SectionLabel>
        <h2 className="disp text-2xl md:text-4xl font-light leading-snug">
          We aren't limited to a fixed fleet — we have access to the charter
          market as a whole, and the judgement to know which yacht within it
          is actually right for you.
        </h2>
        <p className="mt-8 text-[16px] leading-relaxed max-w-2xl mx-auto" style={{ color: "#3A3529" }}>
          A list of featured yachts is a starting point, not the full picture. When you get in
          touch, we draw on the entire market — plus firsthand knowledge of the boats and crews
          themselves — to find the yacht that actually suits your dates, your guests and how you
          want the week to feel.
        </p>
      </section>

      {/* POSITIONING STRIP */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32 space-y-20 md:space-y-24">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <SectionLabel>The Orbis Difference</SectionLabel>
          </div>
          <div className="md:col-span-7 md:col-start-6 flex flex-col justify-end">
            <p className="text-[17px] md:text-[19px] leading-relaxed" style={{ color: "#3A3529" }}>
              Every exceptional charter is arranged through a broker. We believe that role
              should extend far beyond contracts and logistics. From our first conversation
              to your return home, we're invested in your journey—working quietly behind the
              scenes to ensure every detail lives up to the experience you've imagined.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <SectionLabel>Experience Matters</SectionLabel>
          </div>
          <div className="md:col-span-7 md:col-start-6 flex flex-col justify-end">
            <p className="text-[17px] md:text-[19px] leading-relaxed" style={{ color: "#3A3529" }}>
              Behind Orbis is a team of former captains and crew with years of experience
              operating luxury yachts around the world. We know the yachts, the crews who run
              them, the standards of management behind them, and the subtle differences that
              define an exceptional charter. That insight shapes every charter we book.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED YACHTS */}
      <section className="py-24 md:py-32" style={{ background: "#EDE8DC" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <SectionLabel>The Collection</SectionLabel>
              <h2 className="disp text-3xl md:text-4xl font-light">Recently featured</h2>
            </div>
            <Link to="/yachts" className="hidden md:block text-[12px] tracking-[0.15em] uppercase link-quiet">
              View Full Fleet
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {featuredYachts.map((y) => (
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
        </div>
      </section>

      {/* JOURNAL */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="flex justify-between items-end mb-12">
          <div>
            <SectionLabel>Journal</SectionLabel>
            <h2 className="disp text-3xl md:text-4xl font-light">From the bridge</h2>
          </div>
          <a href="#" className="hidden md:block text-[12px] tracking-[0.15em] uppercase link-quiet">All Articles</a>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {[
            { t: "Why choose the catamaran", tag: "Yacht Types", seed: "journal-1", photo: "/images/journal-1.jpg" },
            { t: "How yacht charter works", tag: "Chartering 101", seed: "journal-2" },
            { t: "Choosing a yacht is easy, choosing the right crew isn't", tag: "Crew & Service", seed: "journal-3", photo: "/images/journal-3.jpg" },
          ].map((a) => (
            <a href="#" key={a.t} className="group block">
              <div className="relative overflow-hidden aspect-[3/2]">
                {a.photo ? (
                  <img
                    src={a.photo}
                    alt={a.t}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <Img seed={a.seed} alt={a.t} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                )}
              </div>
              <div className="mt-4">
                <Coord>{a.tag}</Coord>
                <h3 className="disp text-lg font-light mt-2 leading-snug">{a.t}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 text-center" style={{ background: "#17140F" }}>
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="disp text-3xl md:text-5xl font-light leading-tight" style={{ color: "#F6F3EC" }}>
            Tell us where you're going.
            <br />We'll tell you what we'd charter.
          </h2>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleTalkWithUs(); }}
            className="inline-block mt-10 text-[12px] tracking-[0.15em] uppercase px-8 py-4 border"
            style={{ color: "#F6F3EC", borderColor: "rgba(246,243,236,0.4)" }}
          >
            Start an Enquiry
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
