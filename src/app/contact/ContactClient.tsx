"use client";
import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Link, CheckCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import type { ContactPageContent } from "@/types/content";

const NAVY = "#0d1b2a";
const ORANGE = "#E8722A";
const GREY = "#6b7280";

const socialIcon = (platform: string) => {
  if (platform === "facebook")  return <Facebook  size={16} />;
  if (platform === "instagram") return <Instagram size={16} />;
  return <Link size={16} />;
};

export default function ContactClient({ c }: { c: ContactPageContent }) {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const upd = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section style={{ background: NAVY, padding: "80px 2rem 60px", textAlign: "center" }}>
        <p style={{ color: ORANGE, fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
          We&apos;d Love to Hear From You
        </p>
        <h1 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: 16 }}>
          {c.hero.heading}
        </h1>
        <p style={{ color: "#A0AEC0", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
          {c.hero.subheading}
        </p>
      </section>

      {/* ── Info strip ── */}
      <section style={{ background: ORANGE, padding: "28px 2rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24, textAlign: "center" }}>
          {[
            { icon: <Clock size={20} />, label: "Service Times", value: c.details.hours },
            { icon: <Phone size={20} />, label: "Call Us", value: c.details.phone, href: `tel:${c.details.phone.replace(/\s/g,"")}` },
            { icon: <Mail size={20} />,  label: "Email Us",  value: c.details.email, href: `mailto:${c.details.email}` },
          ].map((item, i) => (
            <div key={i}>
              <div style={{ color: "rgba(255,255,255,0.8)", marginBottom: 6, display: "flex", justifyContent: "center" }}>{item.icon}</div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 4px" }}>{item.label}</p>
              {item.href ? (
                <a href={item.href} style={{ color: "#fff", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>{item.value}</a>
              ) : (
                <p style={{ color: "#fff", fontWeight: 700, fontSize: 14, margin: 0 }}>{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Main contact area ── */}
      <section style={{ background: "#f7f8fa", padding: "70px 2rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 48 }}>
          {/* Left — details */}
          <div>
            <h2 style={{ color: "#1a2235", fontWeight: 900, fontSize: "1.5rem", marginBottom: 28 }}>How to Find Us</h2>
            {[
              { icon: <MapPin size={18} color={ORANGE} />, label: "Address", value: c.details.address, href: c.details.mapsUrl },
              { icon: <Phone size={18} color={ORANGE} />, label: "Phone",   value: c.details.phone,   href: `tel:${c.details.phone.replace(/\s/g,"")}` },
              { icon: <Mail size={18} color={ORANGE} />,  label: "Email",   value: c.details.email,   href: `mailto:${c.details.email}` },
              { icon: <Clock size={18} color={ORANGE} />, label: "Service Times", value: c.details.hours },
            ].map((d, i) => (
              <div key={i} style={{ marginBottom: 24 }}>
                <h4 style={{ color: "#1a2235", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  {d.icon} {d.label}
                </h4>
                {d.href ? (
                  <a href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    style={{ color: GREY, fontSize: 14, textDecoration: "none", lineHeight: 1.6, display: "block" }}>
                    {d.value}
                  </a>
                ) : (
                  <p style={{ color: GREY, fontSize: 14, margin: 0, lineHeight: 1.6 }}>{d.value}</p>
                )}
              </div>
            ))}
            <h4 style={{ color: "#1a2235", fontWeight: 700, fontSize: 14, marginBottom: 12, marginTop: 8 }}>Follow Us</h4>
            <div style={{ display: "flex", gap: 10 }}>
              {c.social.map((s) => (
                <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: 38, height: 38, borderRadius: 8, background: NAVY, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none", fontSize: 15, fontWeight: 700 }}>
                  {socialIcon(s.platform)}
                </a>
              ))}
            </div>
          </div>

          {/* Right — contact form */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "36px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
                  <CheckCircle size={52} color="#16a34a" />
                </div>
                <h3 style={{ color: "#16a34a", fontWeight: 800, marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ color: GREY }}>Thank you for reaching out. We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <>
                <h3 style={{ color: "#1a2235", fontWeight: 800, fontSize: "1.2rem", marginBottom: 24 }}>Send Us a Message</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                  {[{k:"firstName",ph:"First Name"},{k:"lastName",ph:"Last Name"}].map((f) => (
                    <input key={f.k} placeholder={f.ph} value={form[f.k as keyof typeof form]} onChange={upd(f.k)}
                      style={{ padding: "12px 14px", borderRadius: 8, border: "1.5px solid #E2E8F0", fontSize: 14, outline: "none", width: "100%", boxSizing: "border-box" as const }} />
                  ))}
                </div>
                {[{k:"email",ph:"Email Address *",type:"email"},{k:"subject",ph:"Subject"}].map((f) => (
                  <input key={f.k} type={f.type||"text"} placeholder={f.ph} value={form[f.k as keyof typeof form]} onChange={upd(f.k)}
                    style={{ padding: "12px 14px", borderRadius: 8, border: "1.5px solid #E2E8F0", fontSize: 14, outline: "none", width: "100%", boxSizing: "border-box" as const, marginBottom: 14, display: "block" }} />
                ))}
                <textarea placeholder="Your Message *" value={form.message} onChange={upd("message")} rows={5}
                  style={{ padding: "12px 14px", borderRadius: 8, border: "1.5px solid #E2E8F0", fontSize: 14, outline: "none", width: "100%", boxSizing: "border-box" as const, resize: "vertical", marginBottom: 16 }} />
                <button onClick={() => { if (form.email && form.message) setSent(true); }}
                  style={{ background: ORANGE, color: "#fff", border: "none", padding: "14px", borderRadius: 8, fontWeight: 700, fontSize: 16, cursor: "pointer", width: "100%" }}>
                  Send Message
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
