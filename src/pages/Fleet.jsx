import { Link } from "react-router-dom";
import { Header, Footer, GlobalStyles, SectionLabel } from "../components/Chrome.jsx";
import { yachts } from "../data/yachts.js";

export default function Fleet() {
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

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-24 md:pb-32">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {yachts.map((y) => (
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
