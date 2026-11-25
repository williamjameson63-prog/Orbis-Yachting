import { useEffect } from "react";
import { Header, Footer, GlobalStyles, SectionLabel } from "../components/Chrome.jsx";
import EnquiryForm from "../components/EnquiryForm.jsx";

const HOW_WE_HELP = [
  {
    title: "Market-wide search",
    text: "We aren't tied to a fixed brokerage list. We search the market as a whole for yachts that genuinely match your brief, not just the ones we happen to have listed.",
  },
  {
    title: "Firsthand judgement",
    text: "Specification sheets only tell you so much. We know how these yachts actually perform, run and hold up, and we bring that judgement to every yacht we put in front of you.",
  },
  {
    title: "Handled discreetly",
    text: "From first conversation to completion, we manage the process quietly and directly on your behalf - viewings, surveys, negotiation and the paperwork that follows.",
  },
];

const PROCESS = [
  { step: "01", title: "Tell us what you're after", text: "Size, budget, intended use and the waters you want to cruise - the more specific, the better we can narrow the search." },
  { step: "02", title: "We search the market", text: "We draw on the wider market, not a fixed inventory, to find yachts that actually fit your brief." },
  { step: "03", title: "Viewings and survey", text: "We arrange viewings and a survey on anything serious, and give you a straight opinion on condition and value." },
  { step: "04", title: "Negotiation and handover", text: "We handle negotiation, contracts and the handover process through to delivery." },
];

const FIELDS = [
  { name: "name", label: "Name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "yachtType", label: "Type of Yacht" },
  { name: "sizeRange", label: "Size Range" },
  { name: "budget", label: "Budget" },
  { name: "plannedUse", label: "Planned Use" },
  { name: "message", label: "Message", type: "textarea" },
];

export default function BuyPage() {
  useEffect(() => {
    document.title = "Buy a Yacht - Orbis Yachting";
  }, []);

  return (
    <div className="w-full min-h-screen" style={{ background: "#F6F3EC", color: "#17140F", fontFamily: "'Inter', sans-serif" }}>
      <GlobalStyles />
      <Header transparentOnTop={false} />

      {/* BANNER */}
      <section className="relative w-full overflow-hidden h-[360px] md:h-[52vh]">
        <img
          src="/images/hero-4.jpg"
          alt="Aerial drone shot of a sailing catamaran at anchor among clear turquoise water"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(16,14,11,0) 40%, rgba(16,14,11,0.5) 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 max-w-[1400px] mx-auto px-6 md:px-10 pb-10">
          <h1 className="disp text-3xl md:text-5xl font-light" style={{ color: "#F6F3EC" }}>
            Buy a Yacht
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-[1000px] mx-auto px-6 md:px-10 pt-16 pb-12 md:pt-20 md:pb-16">
        <SectionLabel>Buying</SectionLabel>
        <h2 className="disp text-2xl md:text-4xl font-light leading-snug max-w-2xl">
          Buying the right yacht starts with knowing the market, not just the listings.
        </h2>
        <p className="mt-6 text-[16px] leading-relaxed max-w-xl" style={{ color: "#3A3529" }}>
          Whether you're buying your first yacht or adding to a fleet, we help you find and
          evaluate the right one - drawing on the wider market and firsthand knowledge of how
          these yachts actually perform, not just what's written on a spec sheet.
        </p>
      </section>

      {/* HOW WE HELP */}
      <section className="py-16 md:py-20" style={{ background: "#EDE8DC" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <SectionLabel>How We Help</SectionLabel>
          <div className="grid md:grid-cols-3 gap-10 mt-8">
            {HOW_WE_HELP.map((item) => (
              <div key={item.title}>
                <h3 className="disp text-xl font-light mb-3">{item.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "#3A3529" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <SectionLabel>The Process</SectionLabel>
        <div className="grid md:grid-cols-4 gap-10 mt-8">
          {PROCESS.map((p) => (
            <div key={p.step}>
              <span className="font-mono text-[12px]" style={{ color: "#A7844F" }}>{p.step}</span>
              <h3 className="disp text-lg font-light mt-2 mb-2">{p.title}</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "#3A3529" }}>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 md:py-20" style={{ background: "#EDE8DC" }}>
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <SectionLabel>Start Your Search</SectionLabel>
          <h2 className="disp text-2xl md:text-3xl font-light mb-8">Tell us what you're looking for</h2>
          <EnquiryForm fields={FIELDS} subject="Yacht Purchase Enquiry" submitLabel="Send Enquiry" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
