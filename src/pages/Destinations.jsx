import { Header, Footer, GlobalStyles, Coord, SectionLabel } from "../components/Chrome.jsx";
import { destinations } from "../data/destinations.js";

export default function Destinations() {
  return (
    <div
      className="w-full min-h-screen"
      style={{ background: "#F6F3EC", color: "#17140F", fontFamily: "'Inter', sans-serif" }}
    >
      <GlobalStyles />
      <Header transparentOnTop={false} />

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 pb-12 md:pt-28 md:pb-16">
        <SectionLabel>Where We Charter</SectionLabel>
        <h1 className="disp text-4xl md:text-6xl font-light leading-tight max-w-2xl">
          Destinations
        </h1>
        <p className="mt-6 text-[16px] md:text-[17px] leading-relaxed max-w-xl" style={{ color: "#3A3529" }}>
          A working list of the cruising grounds we know best — not a limit on where we can take
          you. Get in touch with your dates and we'll tell you honestly where's worth going.
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-24 md:pb-32">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {destinations.map((d) => (
            <div key={d.slug} className="group">
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={d.photo}
                  alt={`${d.name} yacht charter destination`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(16,14,11,0) 40%, rgba(16,14,11,0.55) 100%)" }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <Coord dark>{d.region}</Coord>
                  <h3 className="disp text-2xl font-light mt-1" style={{ color: "#F6F3EC" }}>{d.name}</h3>
                </div>
              </div>
              <p className="mt-4 text-[14px] leading-relaxed" style={{ color: "#3A3529" }}>
                {d.blurb}
              </p>
              <p className="mt-3 font-mono text-[11px] tracking-[0.15em] uppercase" style={{ color: "#A7844F" }}>
                Best Time · {d.bestTime}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
