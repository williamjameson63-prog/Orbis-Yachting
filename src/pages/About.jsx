import { Header, Footer, GlobalStyles, Coord, SectionLabel } from "../components/Chrome.jsx";

const TEAM = [
  {
    name: "Zach",
    role: "Charter Broker",
    photo: "/images/team-zach.jpg",
    bio:
      "Zach's relationship with the water started long before it became his work. Years spent at the helm of his own boats — long seasons of passage-making, anchoring in places most guests only see from a plane window, and learning firsthand what actually makes a week on the water special — shaped the way he now puts charters together. He isn't interested in selling a boat off a spec sheet; he's interested in whether it's genuinely right for the way you want to spend your time at sea. Guests working with Zach get a broker who has lived the questions he's asking them.",
  },
];

export default function About() {
  return (
    <div
      className="w-full min-h-screen"
      style={{ background: "#F6F3EC", color: "#17140F", fontFamily: "'Inter', sans-serif" }}
    >
      <GlobalStyles />
      <Header transparentOnTop={false} />

      <section className="max-w-[1000px] mx-auto px-6 md:px-10 pt-20 pb-16 md:pt-28 md:pb-20">
        <SectionLabel>About Orbis</SectionLabel>
        <h1 className="disp text-4xl md:text-6xl font-light leading-tight max-w-2xl">
          A charter advisory built by people who've actually been at sea.
        </h1>
        <p className="mt-6 text-[16px] md:text-[17px] leading-relaxed max-w-xl" style={{ color: "#3A3529" }}>
          Orbis was founded by a professional yacht captain who grew tired of watching charters
          get arranged by people who had never set foot on the boats they were selling. We work
          differently — every charter is shaped by people who understand yachts, crews and life
          on the water firsthand, not just a catalogue of listings.
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20 space-y-20 md:space-y-24">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <SectionLabel>The Orbis Difference</SectionLabel>
          </div>
          <div className="md:col-span-7 md:col-start-6 flex flex-col justify-end">
            <p className="text-[17px] md:text-[19px] leading-relaxed" style={{ color: "#3A3529" }}>
              Every exceptional charter is arranged through a broker. We believe that role
              should extend far beyond contracts and logistics. From our first conversation
              to your return home, we're invested in your journey — working quietly behind the
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
              Behind Orbis is a team who know the water — the yachts, the crews who run
              them, the standards of management behind them, and the subtle differences that
              define an exceptional charter. That insight shapes every charter we book.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 md:py-28" style={{ background: "#EDE8DC" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <SectionLabel>The Team</SectionLabel>
          <h2 className="disp text-3xl md:text-4xl font-light mb-12">Who you'll talk to</h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {TEAM.map((member) => (
              <div key={member.name}>
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={member.photo}
                    alt={`${member.name}, ${member.role} at Orbis Yachting`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="disp text-2xl font-light">{member.name}</h3>
                  <Coord>{member.role}</Coord>
                  <p className="mt-3 text-[14px] leading-relaxed" style={{ color: "#3A3529" }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="disp text-3xl md:text-5xl font-light leading-tight">
            Let's talk about your next charter.
          </h2>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const parts = ["will", "orbisyachting.com"];
              window.location.href = `mailto:${parts[0]}@${parts[1]}?subject=${encodeURIComponent("Charter Enquiry")}`;
            }}
            className="inline-block mt-10 text-[12px] tracking-[0.15em] uppercase px-8 py-4 border"
            style={{ color: "#17140F", borderColor: "rgba(23,20,15,0.35)" }}
          >
            Start an Enquiry
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
