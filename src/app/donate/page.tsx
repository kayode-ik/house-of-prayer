import React from "react";
import PageLayout from "@/components/PageLayout";
import Donations from "@/components/Donations";
import { DynamicIcon } from "@/lib/iconMap";
import { getDonatePage, getSiteContent } from "@/lib/content";

export const revalidate = 60;

const NAVY = "#0d1b2a";
const ORANGE = "#E8722A";
const GREY = "#6b7280";

export default async function DonatePage() {
  const [c, site] = await Promise.all([getDonatePage(), getSiteContent()]);
  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section style={{ background: NAVY, padding: "80px 2rem 60px", textAlign: "center" }}>
        <p style={{ color: ORANGE, fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
          Make a Difference
        </p>
        <h1 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: 16 }}>
          {c.hero.heading}
        </h1>
        <p style={{ color: "#A0AEC0", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
          {c.hero.subheading}
        </p>
      </section>

      {/* ── Fundraising card (reuse home component) ── */}
      <Donations content={site.donations} />

      {/* ── Ways to Give ── */}
      <section style={{ background: "#fff", padding: "70px 2rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2235", fontWeight: 900, fontSize: "clamp(1.4rem, 3vw, 2rem)", marginBottom: 36, textAlign: "center" }}>
            {c.waysToGive.heading}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {c.waysToGive.items.map((item, i) => (
              <div key={i} style={{ background: "#f7f8fa", borderRadius: 14, padding: "32px 24px", border: "1.5px solid #E2E8F0", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(232,114,42,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <DynamicIcon name={item.icon} size={24} color={ORANGE} />
                </div>
                <h4 style={{ color: "#1a2235", fontWeight: 800, fontSize: 17, margin: 0 }}>{item.title}</h4>
                <p style={{ color: GREY, fontSize: 14, lineHeight: 1.7, margin: 0, flexGrow: 1 }}>{item.description}</p>
                {item.cta && item.ctaHref && (
                  <a href={item.ctaHref} target={item.ctaHref.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "10px 20px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 14, alignSelf: "flex-start" }}>
                    {item.cta} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#f7f8fa", padding: "70px 2rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2235", fontWeight: 900, fontSize: "clamp(1.4rem, 3vw, 2rem)", marginBottom: 36, textAlign: "center" }}>
            {c.faq.heading}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {c.faq.items.map((item, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "22px 24px", border: "1.5px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <h4 style={{ color: "#1a2235", fontWeight: 700, fontSize: 15, marginBottom: 8, display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ color: ORANGE, flexShrink: 0, fontWeight: 900 }}>Q.</span> {item.q}
                </h4>
                <p style={{ color: GREY, fontSize: 14, lineHeight: 1.7, margin: 0, paddingLeft: 24 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
