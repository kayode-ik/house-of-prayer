import React from "react";
import { MapPin, Phone, Check, Map, ClipboardList } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Gatherings from "@/components/Gatherings";
import { DynamicIcon } from "@/lib/iconMap";
import { getServicesPage, getSiteContent } from "@/lib/content";

export const revalidate = 60;

const NAVY = "#0d1b2a";
const ORANGE = "#E8722A";
const GREY = "#6b7280";

export default async function ServicesPage() {
  const [c, site] = await Promise.all([getServicesPage(), getSiteContent()]);
  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section style={{ background: NAVY, padding: "80px 2rem 60px", textAlign: "center" }}>
        <p style={{ color: ORANGE, fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
          In-Person &amp; Online
        </p>
        <h1 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: 16 }}>
          {c.hero.heading}
        </h1>
        <p style={{ color: "#A0AEC0", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
          {c.hero.subheading}
        </p>
      </section>

      {/* ── What to Expect ── */}
      <section style={{ background: "#fff", padding: "70px 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: GREY, fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10, textAlign: "center" }}>
            Your First Visit
          </p>
          <h2 style={{ color: "#1a2235", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: 12, textAlign: "center" }}>
            {c.whatToExpect.heading}
          </h2>
          <p style={{ color: GREY, fontSize: 16, maxWidth: 640, margin: "0 auto 48px", lineHeight: 1.7, textAlign: "center" }}>
            {c.whatToExpect.subheading}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {c.whatToExpect.items.map((item, i) => (
              <div key={i} style={{ background: "#f7f8fa", borderRadius: 14, padding: "28px 24px", border: "1.5px solid #E2E8F0" }}>
                <div style={{ width: 44, height: 44, background: "rgba(232,114,42,0.1)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <DynamicIcon name={item.icon} size={20} color={ORANGE} />
                </div>
                <h4 style={{ color: "#1a2235", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{item.title}</h4>
                <p style={{ color: GREY, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full Gatherings schedule ── */}
      <Gatherings content={site.gatherings} />

      {/* ── Plan Your Visit ── */}
      <section style={{ background: "#fff", padding: "70px 2rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2235", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: 36, textAlign: "center" }}>
            {c.planVisit.heading}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
            {/* Map embed */}
            <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", aspectRatio: "4/3", position: "relative" }}>
              <iframe
                src={c.planVisit.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0, width: "100%", height: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="House of Prayer location map"
              />
            </div>

            {/* Details */}
            <div>
              <div style={{ marginBottom: 24 }}>
                <h4 style={{ color: "#1a2235", fontWeight: 700, marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
                  <MapPin size={16} color={ORANGE} /> Address
                </h4>
                <p style={{ color: GREY, fontSize: 15, lineHeight: 1.6 }}>{c.planVisit.address}</p>
                <a href={c.planVisit.mapsUrl} target="_blank" rel="noopener noreferrer"
                  style={{ color: ORANGE, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
                  Get Directions →
                </a>
              </div>
              <div style={{ marginBottom: 24 }}>
                <h4 style={{ color: "#1a2235", fontWeight: 700, marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
                  <Phone size={16} color={ORANGE} /> Phone
                </h4>
                <a href={`tel:${c.planVisit.phone.replace(/\s/g,"")}`}
                  style={{ color: GREY, fontSize: 15, textDecoration: "none", fontWeight: 600 }}>
                  {c.planVisit.phone}
                </a>
              </div>

              {/* What to bring — ClipboardList + Check icons replace emojis */}
              <div style={{ background: "#f7f8fa", borderRadius: 10, padding: "18px 20px", border: "1.5px solid #E2E8F0" }}>
                <h4 style={{ color: "#1a2235", fontWeight: 700, marginBottom: 10, fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>
                  <ClipboardList size={15} color={ORANGE} /> What to Bring
                </h4>
                {[
                  "Just yourself — we'll take care of the rest!",
                  "Your Bible if you have one (we'll have extras)",
                  "An open heart and a desire to connect with God",
                ].map((t, i) => (
                  <p key={i} style={{ color: GREY, fontSize: 13, margin: "0 0 6px", display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <Check size={14} color={ORANGE} style={{ flexShrink: 0, marginTop: 2 }} /> {t}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
