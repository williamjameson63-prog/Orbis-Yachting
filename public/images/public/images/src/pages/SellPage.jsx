import { useEffect } from "react";
import { Header, Footer, GlobalStyles, SectionLabel } from "../components/Chrome.jsx";
import EnquiryForm from "../components/EnquiryForm.jsx";

const HOW_WE_HELP = [
  {
    title: "Priced correctly",
    text: "We know what similar yachts are actually trading and chartering for, not just what they're listed at, so your asking price reflects the real market.",
  },
  {
    title: "Put in front of the right buyers",
    text: "We work the market directly rather than simply posting a listing, reaching the buyers and brokers most likely to have a genuine, qualified interest.",
  },
  {
    title: "Managed discreetly",
    text: "Viewings, negotiation and paperwork are all handled quietly on your behalf, with minimal disruption to you or your crew.",
  },
];

const PROCESS = [
  { step: "01", title: "Tell us about your yacht", text: "Builder, year, length, location and asking price - the basics we need to start." },
  { step: "02", title: "We assess the market", text: "We give you a straight view on where she sits in today's market and how best to position her." },
  { step: "03", title: "We find the buyer", text: "We work the market directly to put her in front of genuinely qualified buyers." },
  { step: "04", title: "Negotiation and handover", text: "We handle negotiation, contracts and handover through to completion." },
];

const FIELDS = [
  { name: "name", label: "Name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "yachtNameBuilder", label: "Yacht Name and Builder" },
  { name: "yearBuilt", label: "Year Built" },
  { name: "length", label: "Length" },
  { name: "currentLocation", label: "Current Location" },
  { name: "askingPrice", label: "Asking Price" },
  { name: "message", label: "Message", type: "textarea" },
];

export default function SellPage() {
  useEffect(() => {
    document.title = "Sell a Yacht - Orbis Yachting";
  }, []);

  return (
    <div className="w-full min-h-screen" style={{ background: "#F6F3EC", color: "#17140F", fontFamily: "'Inter', sans-serif" }}>
      <GlobalStyles />
      <Header transparentOnTop={false} />

      {/* BANNER */}
      <section className="relative w-full overflow-hidden h-[360px] md:h-[52vh]">
        <img
          src="/images/hero-6.jpg"
          alt="Aerial drone shot of a superyacht at anchor off the coast at dusk"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(16,14,11,0) 40%, rgba(16,14,11,0.5) 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 max-w-[1400px] mx-auto px-6 md:px-10 pb-10">
          <h1 className="disp text-3xl md:text-5xl font-light" style={{ color: "#F6F3EC" }}>
            Sell Your Yacht
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-[1000px] mx-auto px-6 md:px-10 pt-16 pb-12 md:pt-20 md:pb-16">
        <SectionLabel>Selling</SectionLabel>
        <h2 className="disp text-2xl md:text-4xl font-light leading-snug max-w-2xl">
          Selling well means reaching the right buyer, not just any buyer.
        </h2>
        <p className="mt-6 text-[16px] leading-relaxed max-w-xl" style={{ color: "#3A3529" }}>
          We help owners sell their yachts quietly and effectively - priced correctly for today's
          market, and put directly in front of buyers and brokers with a genuine interest, rather
          than left to sit on a listing site.
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
          <SectionLabel>List Your Yacht</SectionLabel>
          <h2 className="disp text-2xl md:text-3xl font-light mb-8">Tell us about your yacht</h2>
          <EnquiryForm fields={FIELDS} subject="Yacht Sale Enquiry" submitLabel="Send Enquiry" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
