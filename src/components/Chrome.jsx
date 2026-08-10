import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* ---------------------------------------------------------
   ORBIS YACHTING — Shared chrome
   Palette:  ink #17140F · paper #F6F3EC · paper-dim #EDE8DC
             brass #A7844F · brass-soft #C7AD7C · stone #8A8371 · deep #100E0B
--------------------------------------------------------- */

export const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');`;
export const LOGO_BLACK = "/images/logo-black.png";
export const LOGO_WHITE = "/images/logo-white.png";

export function GlobalStyles() {
  return (
    <>
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
    </>
  );
}

export function Img({ seed, alt, className, grade = 1 }) {
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

export function Coord({ children, dark = false }) {
  return (
    <span
      className="font-mono text-[10px] tracking-[0.25em] uppercase"
      style={{ color: dark ? "#C7AD7C" : "#A7844F" }}
    >
      {children}
    </span>
  );
}

export function SectionLabel({ children, dark = false }) {
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

const NAV_LINKS = [
  { label: "Yacht for Charter", to: "/yachts" },
  { label: "Destinations", to: "#" },
  { label: "Experiences", to: "#" },
  { label: "Journal", to: "#" },
  { label: "About", to: "#" },
];

export function Header({ transparentOnTop = true }) {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(!transparentOnTop);

  useEffect(() => {
    if (!transparentOnTop) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentOnTop]);

  const handleTalkWithUs = () => {
    const parts = ["will", "orbisyachting.com"];
    const subject = encodeURIComponent("Charter Enquiry");
    window.location.href = `mailto:${parts[0]}@${parts[1]}?subject=${subject}`;
  };

  return (
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
          <Link to="/">
            <img src={LOGO_BLACK} alt="Orbis" className="h-9 w-auto" />
          </Link>

          <nav
            className="hidden md:flex items-center gap-10 text-[13px] tracking-wide"
            style={{ color: "#17140F" }}
          >
            {NAV_LINKS.map((l) =>
              l.to.startsWith("/") ? (
                <Link key={l.label} to={l.to} className="link-quiet">
                  {l.label}
                </Link>
              ) : (
                <a key={l.label} href={l.to} className="link-quiet">
                  {l.label}
                </a>
              )
            )}
          </nav>

          <div className="hidden md:block">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleTalkWithUs();
              }}
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
          {[...NAV_LINKS, { label: "Enquire", to: "#enquire" }].map((l) =>
            l.to.startsWith("/") ? (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setNavOpen(false)}
                className="text-sm tracking-wide"
                style={{ color: "#17140F" }}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.to}
                onClick={(e) => {
                  if (l.label === "Enquire") {
                    e.preventDefault();
                    handleTalkWithUs();
                  }
                  setNavOpen(false);
                }}
                className="text-sm tracking-wide"
                style={{ color: "#17140F" }}
              >
                {l.label}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="py-16" style={{ background: "#100E0B", color: "#8A8371" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-5 gap-10 pb-12 border-b hairline-dark">
          <div className="md:col-span-2">
            <img src={LOGO_WHITE} alt="Orbis" className="h-10 w-auto" />
            <p className="mt-4 text-[13px] leading-relaxed max-w-xs">
              A private yacht charter advisory, founded by a professional yacht captain.
            </p>
          </div>
          {[
            ["Charter", [["Yacht Collection", "/yachts"], ["Destinations", "#"], ["Experiences", "#"], ["Search", "#"]]],
            ["Orbis", [["About", "#"], ["Captain's Notes", "#"], ["Journal", "#"], ["Contact", "#"]]],
            ["Legal", [["Privacy", "#"], ["Terms", "#"], ["FAQ", "#"]]],
          ].map(([h, items]) => (
            <div key={h}>
              <div className="text-[11px] tracking-[0.15em] uppercase mb-4" style={{ color: "#F6F3EC" }}>
                {h}
              </div>
              <ul className="space-y-2.5 text-[13px]">
                {items.map(([label, to]) => (
                  <li key={label}>
                    {to.startsWith("/") ? (
                      <Link to={to} className="link-quiet">{label}</Link>
                    ) : (
                      <a href={to} className="link-quiet">{label}</a>
                    )}
                  </li>
                ))}
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
  );
}
