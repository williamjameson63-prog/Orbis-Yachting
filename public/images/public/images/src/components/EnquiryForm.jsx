import { useState } from "react";

/* ---------------------------------------------------------
   ORBIS YACHTING - Shared enquiry form
   Builds a mailto: link from the visitor's answers at submit
   time, so the address never appears in the page markup.
--------------------------------------------------------- */

export default function EnquiryForm({ fields, subject, submitLabel = "Send Enquiry" }) {
  const [values, setValues] = useState(() =>
    Object.fromEntries(fields.map((f) => [f.name, ""]))
  );

  const handleChange = (name) => (e) => {
    setValues((v) => ({ ...v, [name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parts = ["will", "orbisyachting.com"];
    const bodyLines = fields.map((f) => `${f.label}: ${values[f.name] || "-"}`);
    const body = bodyLines.join("\n");
    const url = `mailto:${parts[0]}@${parts[1]}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  const inputStyle = {
    background: "transparent",
    borderColor: "rgba(23,20,15,0.25)",
    color: "#17140F",
  };

  return (
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
      {fields.map((f) => (
        <div
          key={f.name}
          className={f.type === "textarea" ? "md:col-span-2" : ""}
        >
          <label
            className="block text-[11px] tracking-[0.15em] uppercase mb-2"
            style={{ color: "#8A8371" }}
          >
            {f.label}
          </label>
          {f.type === "textarea" ? (
            <textarea
              required={f.required}
              value={values[f.name]}
              onChange={handleChange(f.name)}
              rows={4}
              className="w-full border px-4 py-3 text-[15px] focus:outline-none"
              style={inputStyle}
            />
          ) : (
            <input
              type={f.type || "text"}
              required={f.required}
              value={values[f.name]}
              onChange={handleChange(f.name)}
              className="w-full border px-4 py-3 text-[15px] focus:outline-none"
              style={inputStyle}
            />
          )}
        </div>
      ))}
      <div className="md:col-span-2 pt-2">
        <button
          type="submit"
          className="text-[12px] tracking-[0.15em] uppercase px-8 py-3.5 border transition-colors duration-300"
          style={{ color: "#17140F", borderColor: "rgba(23,20,15,0.35)" }}
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
