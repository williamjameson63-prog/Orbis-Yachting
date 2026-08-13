import { Link } from "react-router-dom";
import { Header, Footer, GlobalStyles, Coord, SectionLabel, Img } from "../components/Chrome.jsx";
import { journal } from "../data/journal.js";

export default function Journal() {
  return (
    <div
      className="w-full min-h-screen"
      style={{ background: "#F6F3EC", color: "#17140F", fontFamily: "'Inter', sans-serif" }}
    >
      <GlobalStyles />
      <Header transparentOnTop={false} />

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 pb-12 md:pt-28 md:pb-16">
        <SectionLabel>Journal</SectionLabel>
        <h1 className="disp text-4xl md:text-6xl font-light leading-tight max-w-2xl">
          From the bridge
        </h1>
        <p className="mt-6 text-[16px] md:text-[17px] leading-relaxed max-w-xl" style={{ color: "#3A3529" }}>
          Notes on yachts, destinations and the charter market from the Orbis team.
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-24 md:pb-32">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {journal.map((a) => (
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

      <Footer />
    </div>
  );
}
