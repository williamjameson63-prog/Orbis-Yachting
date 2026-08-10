import { useState, useEffect } from "react";

/* ---------------------------------------------------------
   ORBIS YACHTING — Homepage design preview
   Palette:  ink #17140F · paper #F6F3EC · paper-dim #EDE8DC
             brass #A7844F · brass-soft #C7AD7C · stone #8A8371 · deep #100E0B
   Display:  Fraunces (opsz variable, used at weight 300–500)
   Body:     Inter
   Utility:  IBM Plex Mono — set as small-caps "coordinate" labels,
             the recurring signature device across the page.
   Note: photography below is toned placeholder imagery (picsum,
   colour-graded to the palette). Swap for real charter photography
   in production — captions indicate what each shot should be.
--------------------------------------------------------- */

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');`;
const LOGO_BLACK = "/images/logo-black.png";
const LOGO_WHITE = "/images/logo-white.png";


function Img({ seed, alt, className, grade = 1 }) {
  const src = `https://picsum.photos/seed/${seed}/1600/1200`;
  const filters = [
    "grayscale(28%)",
    "sepia(18%)",
    "saturate(0.85)",
    `contrast(${1.04 + grade * 0.02})`,
    `brightness(${0.93 - grade * 0.01})`,
  ].join(" ");
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ filter: filters }}
      loading="lazy"
    />
  );
}

function Coord({ children, dark = false }) {
  return (
    <span
      className="font-mono text-[10px] tracking-[0.25em] uppercase"
      style={{ color: dark ? "#C7AD7C" : "#A7844F" }}
    >
      {children}
    </span>
  );
}

function SectionLabel({ children, dark = false }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span
        className="block h-px w-10"
        style={{ background: dark ? "#5B4E33" : "#A7844F" }}
      />
      <Coord dark={dark}>{children}</Coord>
    </div>
  );
}

export default function OrbisHome() {
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

  const [navOpen, setNavOpen] = useState(false);

  const handleTalkWithUs = () => {
    const parts = ["will", "orbisyachting.com"];
    const subject = encodeURIComponent("Charter Enquiry");
    window.location.href = `mailto:${parts[0]}@${parts[1]}?subject=${subject}`;
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="w-full min-h-screen"
      style={{
        background: "#F6F3EC",
        color: "#17140F",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>{FONT_IMPORT}</style>
      <style>{`
        .disp { font-family: 'Fraunces', serif; }
        .hairline { border-color: rgba(23,20,15,0.12); }
        .hairline-dark { border-color: rgba(246,243,236,0.14); }
        a.link-quiet { position: relative; }
        a.link-quiet::after {
          content: ""; position: absolute; left: 0; right: 0; bottom: -3px;
          height: 1px; background: #A7844F; transform: scaleX(0);
          transform-origin: left; transition: transform .35s ease;
        }
        a.link-quiet:hover::after { transform: scaleX(1); }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
        .fade-up { animation: fadeUp 1s ease both; }
        @keyframes fadeUp { from { opacity:0; transform: translateY(14px);} to {opacity:1; transform:none;} }
      `}</style>

      {/* NAV */}
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled && !navOpen ? "rgba(246,243,236,0.3)" : "#F6F3EC",
          backdropFilter: scrolled && !navOpen ? "blur(10px)" : "none",
          WebkitBackdropFilter: scrolled && !navOpen ? "blur(10px)" : "none",
        }}
      >
        <div className="border-b hairline">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 h-20">
            <img src={LOGO_BLACK} alt="Orbis" className="h-9 w-auto" />

            <nav
              className="hidden md:flex items-center gap-10 text-[13px] tracking-wide"
              style={{ color: "#17140F" }}
            >
              {["Yacht for Charter", "Destinations", "Experiences", "Journal", "About"].map((l) => (
                <a key={l} href="#" className="link-quiet">{l}</a>
              ))}
            </nav>

            <div className="hidden md:block">
              <a
                href="#"
                className="text-[12px] tracking-[0.15em] uppercase px-5 py-2.5 border transition-colors duration-300"
                style={{ color: "#17140F", borderColor: "rgba(23,20,15,0.35)" }}
              >
                Enquire
              </a>
            </div>

            <button
              className="md:hidden relative w-6 h-5"
              style={{ color: "#17140F" }}
              onClick={() => setNavOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span
                className="absolute left-0 w-full h-px transition-all duration-300"
                style={{
                  background: "#17140F",
                  top: navOpen ? "50%" : "0%",
                  transform: navOpen ? "translateY(-50%) rotate(45deg)" : "none",
                }}
              />
              <span
                className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px transition-opacity duration-300"
                style={{ background: "#17140F", opacity: navOpen ? 0 : 1 }}
              />
              <span
                className="absolute left-0 w-full h-px transition-all duration-300"
                style={{
                  background: "#17140F",
                  bottom: navOpen ? "50%" : "0%",
                  top: navOpen ? "50%" : "auto",
                  transform: navOpen ? "translateY(-50%) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>

        {navOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: "#F6F3EC" }}>
            {["Yacht for Charter", "Yachts for Sale", "Destinations", "Experiences", "Journal", "About", "Enquire"].map((l) => (
              <a key={l} href="#" className="text-sm tracking-wide" style={{ color: "#17140F" }}>{l}</a>
            ))}
          </div>
        )}
      </header>

      {/* HERO
          Real footage: aerial drone shot of a catamaran at anchor, shot in portrait
          orientation. In the live Next.js build this becomes a looping <video> —
          /public/videos/orbis-hero.mp4 — muted, autoPlay, loop, playsInline, with
          this same still as the poster attribute for instant first paint. Object
          position is biased toward the top of the frame (~22%) rather than centred,
          because centring a portrait clip inside a wide hero crops the water instead
          of the yacht. */}
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

      {/* PRIMARY CTA — subtle, single button rather than a self-serve search form */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col items-center">
          <div className="py-10">
            <a
              href="#"
              className="text-[12px] tracking-[0.15em] uppercase px-8 py-3.5 border rounded-full"
              style={{ color: "#17140F", borderColor: "rgba(23,20,15,0.35)" }}
            >
              Yachts for Charter
            </a>
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

      {/* WHY ENQUIRE DIRECTLY — market-wide access, not a fixed fleet */}
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
            <a href="#" className="hidden md:block text-[12px] tracking-[0.15em] uppercase link-quiet">View Full Fleet</a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              { name: "Mane et Nocte", loc: "W. Mediterranean", len: "24M", guests: "10", price: "€78,000 / wk", seed: "yacht-mane-et-nocte", photo: "https://cya.sfo3.cdn.digitaloceanspaces.com/yachts/69f35e1fb5a1600bf785878f/brochure1_20260520155503_db110e3e.jpg" },
              { name: "Xmotion", loc: "Croatia", len: "24M", guests: "8", price: "€81,000 / wk", seed: "yacht-xmotion", photo: "https://cya.sfo3.cdn.digitaloceanspaces.com/yachts/69f34f7cb5a1600bf7858728/brochure1_20260506233049_44e53270.jpg" },
              { name: "Ocean Vibes", loc: "British Virgin Islands", len: "23M", guests: "8", price: "$73,000 / wk", seed: "yacht-ocean-vibes", photo: "https://cya.sfo3.cdn.digitaloceanspaces.com/yachts/69f3949a3c03330912dce93d/brochure1_20260630130003_45cdde8e.jpg" },
            ].map((y) => (
              <a href="#" key={y.name} className="group block">
                <div className="relative overflow-hidden aspect-[4/5]">
                  {y.photo ? (
                    <img
                      src={y.photo}
                      alt={`${y.name} superyacht exterior`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <Img seed={y.seed} alt={`${y.name} superyacht exterior`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  )}
                </div>
                <div className="mt-5 flex justify-between items-baseline">
                  <h3 className="disp text-2xl font-light">{y.name}</h3>
                  <span className="font-mono text-[11px]" style={{ color: "#8A8371" }}>{y.len}</span>
                </div>
                <div className="mt-1 flex justify-between items-center text-[13px]" style={{ color: "#3A3529" }}>
                  <span>{y.loc} · {y.guests} guests</span>
                  <span className="font-mono text-[12px]" style={{ color: "#A7844F" }}>{y.price}</span>
                </div>
              </a>
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
            { t: "Choosing a yacht is easy, choosing the right crew isn't", tag: "Crew &amp; Service", seed: "journal-3", photo: "/images/journal-3.jpg" },
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
            className="inline-block mt-10 text-[12px] tracking-[0.15em] uppercase px-8 py-4 border"
            style={{ color: "#F6F3EC", borderColor: "rgba(246,243,236,0.4)" }}
          >
            Start an Enquiry
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16" style={{ background: "#100E0B", color: "#8A8371" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-5 gap-10 pb-12 border-b hairline-dark">
            <div className="md:col-span-2">
              <img src={LOGO_WHITE} alt="Orbis" className="h-10 w-auto" />
              <p className="mt-4 text-[13px] leading-relaxed max-w-xs">A private yacht charter advisory, founded by a professional yacht captain.</p>
            </div>
            {[
              ["Charter", ["Yacht Collection", "Destinations", "Experiences", "Search"]],
              ["Orbis", ["About", "Captain's Notes", "Journal", "Contact"]],
              ["Legal", ["Privacy", "Terms", "FAQ"]],
            ].map(([h, items]) => (
              <div key={h}>
                <div className="text-[11px] tracking-[0.15em] uppercase mb-4" style={{ color: "#F6F3EC" }}>{h}</div>
                <ul className="space-y-2.5 text-[13px]">
                  {items.map((i) => <li key={i}><a href="#" className="link-quiet">{i}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between gap-3 text-[11px] font-mono tracking-wide">
            <span>© {new Date().getFullYear()} ORBIS YACHTING. ALL RIGHTS RESERVED.</span>
            <span>PRIVATE YACHT CHARTER ADVISORY</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
