import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Header, Footer, GlobalStyles, Coord, SectionLabel, Img } from "../components/Chrome.jsx";
import { getJournalBySlug, journal } from "../data/journal.js";

export default function JournalDetail() {
  const { slug } = useParams();
  const article = getJournalBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="w-full min-h-screen" style={{ background: "#F6F3EC", color: "#17140F", fontFamily: "'Inter', sans-serif" }}>
        <GlobalStyles />
        <Header transparentOnTop={false} />
        <section className="max-w-[800px] mx-auto px-6 py-32 text-center">
          <h1 className="disp text-3xl font-light mb-4">Article not found</h1>
          <Link to="/journal" className="text-[12px] tracking-[0.15em] uppercase px-8 py-3.5 border rounded-full inline-block" style={{ borderColor: "rgba(23,20,15,0.35)" }}>
            Back to Journal
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  const otherArticles = journal.filter((a) => a.slug !== article.slug).slice(0, 3);
  const hasContent = article.content && article.content.length > 0;

  return (
    <div className="w-full min-h-screen" style={{ background: "#F6F3EC", color: "#17140F", fontFamily: "'Inter', sans-serif" }}>
      <GlobalStyles />
      <Header transparentOnTop={false} />

      {/* HERO */}
      <section className="relative w-full overflow-hidden h-[360px] md:h-[56vh]" style={{ minHeight: "320px" }}>
        {article.photo ? (
          <img src={article.photo} alt={article.title} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <Img seed={article.seed} alt={article.title} className="absolute inset-0 w-full h-full object-cover" />
        )}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(16,14,11,0.1) 0%, rgba(16,14,11,0.15) 45%, rgba(16,14,11,0.65) 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 max-w-[1000px] mx-auto px-6 md:px-10 pb-8 md:pb-12">
          <Coord dark>{article.tag}</Coord>
          <h1 className="disp text-3xl md:text-5xl font-light mt-3 leading-tight" style={{ color: "#F6F3EC" }}>
            {article.title}
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-[760px] mx-auto px-6 md:px-10 py-16 md:py-24">
        {hasContent ? (
          <div className="space-y-5">
            {article.content.map((block, i) =>
              block.type === "h2" ? (
                <h2 key={i} className="disp text-2xl md:text-3xl font-light !mt-14 !mb-2">
                  {block.text}
                </h2>
              ) : (
                <p key={i} className="text-[17px] leading-relaxed" style={{ color: "#3A3529" }}>
                  {block.text}
                </p>
              )
            )}
          </div>
        ) : (
          <div className="py-16 text-center border-y hairline">
            <SectionLabel>Coming Soon</SectionLabel>
            <p className="text-[17px] leading-relaxed max-w-md mx-auto" style={{ color: "#3A3529" }}>
              This piece is on the way — check back shortly, or get in touch if there's
              something specific about {article.title.toLowerCase()} you'd like to ask us directly.
            </p>
          </div>
        )}
      </section>

      {/* MORE ARTICLES */}
      <section className="py-20 md:py-28" style={{ background: "#EDE8DC" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex justify-between items-end mb-12">
            <SectionLabel>Continue Reading</SectionLabel>
            <Link to="/journal" className="hidden md:block text-[12px] tracking-[0.15em] uppercase link-quiet">
              All Articles
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {otherArticles.map((a) => (
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
