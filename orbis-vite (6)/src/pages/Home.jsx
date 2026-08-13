import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, Footer, GlobalStyles, Coord, SectionLabel, Img } from "../components/Chrome.jsx";
import { getYachtBySlug } from "../data/yachts.js";
import { journal } from "../data/journal.js";

const HERO_SLIDES = [
  { src: "/images/hero-7.jpg", alt: "Top-down aerial drone shot of an illuminated superyacht at night, Golfo di Cugnana, Sardinia", coord: "41.1381\u00b0 N \u00b7 9.4587\u00b0 E \u2014 Golfo di Cugnana, Costa Smeralda" },
  { src: "/images/hero-1.jpg", alt: "Aerial drone shot of a sailing catamaran at anchor off a white sand beach, Anegada, British Virgin Islands", coord: "18.7263\u00b0 N \u00b7 64.4031\u00b0 W \u2014 Pomato Point, Anegada, BVI" },
  { src: "/images/hero-8.jpg", alt: "Top-down aerial drone shot of an illuminated superyacht at night, Golfo di Cugnana, Sardinia", coord: "41.1356\u00b0 N \u00b7 9.4600\u00b0 E \u2014 Golfo di Cugnana, Costa Smeralda" },
  { src: "/images/hero-4.jpg", alt: "Aerial drone shot of a sailing catamaran anchored among clear turquoise water and granite islets, Lavezzi archipelago, Corsica", coord: "41.3650\u00b0 N \u00b7 9.2697\u00b0 E \u2014 Lavezzi Archipelago, Corsica" },
  { src: "/images/hero-9.jpg", alt: "Top-down aerial drone shot of an illuminated superyacht at night, Golfo di Cugnana, Sardinia", coord: "41.1355\u00b0 N \u00b7 9.4600\u00b0 E \u2014 Golfo di Cugnana, Costa Smeralda" },
  { src: "/images/hero-2.jpg", alt: "Aerial drone shot of a sailing catamaran at anchor near the coast at dusk, Anegada, British Virgin Islands", coord: "18.7270\u00b0 N \u00b7 64.4047\u00b0 W \u2014 Pomato Point, Anegada, BVI" },
  { src: "/images/hero-10.jpg", alt: "Top-down aerial drone shot of an illuminated sailing catamaran at night, Golfo di Cugnana, Sardinia", coord: "41.1342\u00b0 N \u00b7 9.4635\u00b0 E \u2014 Golfo di Cugnana, Costa Smeralda" },
  { src: "/images/hero-3.jpg", alt: "Top-down aerial drone shot of a sailing catamaran with its tender, Anegada, British Virgin Islands", coord: "18.7268\u00b0 N \u00b7 64.4038\u00b0 W \u2014 Pomato Point, Anegada, BVI" },
  { src: "/images/hero-5.jpg", alt: "Aerial drone shot of a superyacht at anchor at dusk, Golfo di Cugnana, Sardinia", coord: "41.1350\u00b0 N \u00b7 9.4616\u00b0 E \u2014 Golfo di Cugnana, Costa Smeralda" },
  { src: "/images/hero-6.jpg", alt: "Aerial drone shot of a superyacht at anchor off the coast at dusk, Golfo di Cugnana, Sardinia", coord: "41.1391\u00b0 N \u00b7 9.4582\u00b0 E \u2014 Golfo di Cugnana, Costa Smeralda" },
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
        {HERO_SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === heroIndex ? 1 : 0 }}
          />
        ))}
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
          <Link to="/journal" className="hidden md:block text-[12px] tracking-[0.15em] uppercase link-quiet">All Articles</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {journal.slice(0, 3).map((a) => (
            <Link to={`/journal/${a.slug}`} key={a.slug} className="group block">
              <div className="relative overflow-hidden aspect-[3/2]">
                {a.photo ? (
                  <img
                    src={a.photo}
                    alt={a.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <Img seed={a.seed} alt={a.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                )}
              </div>
              <div className="mt-4">
                <Coord>{a.tag}</Coord>
                <h3 className="disp text-lg font-light mt-2 leading-snug">{a.title}</h3>
              </div>
            </Link>
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
