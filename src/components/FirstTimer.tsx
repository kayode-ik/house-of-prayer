"use client";
import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import type { FirstTimerContent } from "@/types/content";

interface Props {
  content: FirstTimerContent;
}

const ORANGE = "#E8722A";
const TEXT_DARK = "#1a2235";
const TEXT_GREY = "#6b7280";

const FirstTimer = ({ content }: Props) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", howHeard: "" });
  const [submitted, setSubmitted] = useState(false);

  const upd = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = () => {
    if (form.name && form.email) setSubmitted(true);
    // TODO: POST to API route and notify content.notificationEmail when CMS connected
  };

  return (
    <section id="first-timer" style={{ background: "#fff", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <p style={{ color: TEXT_GREY, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>
          {content.eyebrow}
        </p>
        <h2 style={{ color: TEXT_DARK, fontWeight: 900, fontSize: "clamp(1.4rem, 3vw, 2rem)", marginBottom: 12 }}>
          {content.heading}
        </h2>
        <p style={{ color: TEXT_GREY, fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
          {content.subheading}
        </p>

        {submitted ? (
          <div style={{ background: "#f0fdf4", border: "1px solid #86efac", borderRadius: 12, padding: "2rem", textAlign: "center" }}>
            <CheckCircle size={52} color="#16a34a" style={{ marginBottom: 16 }} />
            <h3 style={{ color: "#16a34a", fontWeight: 800 }}>Welcome to the Family!</h3>
            <p style={{ color: TEXT_GREY }}>Our team will be in touch with you shortly.</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 14, textAlign: "left" }}>
            {[
              { k: "name",  label: "Full Name *",      ph: "Your full name"     },
              { k: "email", label: "Email Address *",  ph: "your@email.com"     },
              { k: "phone", label: "Phone Number",     ph: "+44 7000 000000"    },
            ].map((f) => (
              <div key={f.k}>
                <label style={{ color: TEXT_DARK, fontSize: 13, fontWeight: 600, display: "block", marginBottom: 6 }}>
                  {f.label}
                </label>
                <input value={form[f.k as keyof typeof form]} onChange={upd(f.k)} placeholder={f.ph}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "1.5px solid #e5e7eb", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
              </div>
            ))}

            <div>
              <label style={{ color: TEXT_DARK, fontSize: 13, fontWeight: 600, display: "block", marginBottom: 6 }}>
                How did you hear about us?
              </label>
              <select value={form.howHeard} onChange={upd("howHeard")}
                style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "1.5px solid #e5e7eb", fontSize: 14, background: "#fff" }}>
                <option value="">Select an option</option>
                {content.hearAboutOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <button onClick={handleSubmit}
              style={{ background: ORANGE, color: "#fff", border: "none", padding: "14px", borderRadius: 8, fontWeight: 700, fontSize: 16, cursor: "pointer", marginTop: 8 }}>
              Submit — I'm New Here
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FirstTimer;
