import React from "react";
import Link from "next/link";
import { Play, Radio } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { getLivePage } from "@/lib/content";

export const revalidate = 60;

const NAVY = "#0d1b2a";
const ORANGE = "#E8722A";
const GREY = "#6b7280";

export default async function LivePage() {
  const c = await getLivePage();
  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section style={{ background: NAVY, padding: "80px 2rem 60px", textAlign: "center" }}>
        <p style={{ color: ORANGE, fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
          Every Sunday · 10:00 am
        </p>
        <h1 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: 16 }}>
          {c.hero.heading}
        </h1>
        <p style={{ color: "#A0AEC0", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
          {c.hero.subheading}
        </p>
      </section>

      {/* ── Stream embed placeholder ── */}
      <section style={{ background: "#111a27", padding: "60px 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.5rem", marginBottom: 10, textAlign: "center" }}>
            {c.streamEmbed.title}
          </h2>
          <p style={{ color: "#A0AEC0", textAlign: "center", marginBottom: 28, fontSize: 15 }}>
            {c.streamEmbed.description}
          </p>

          {/* YouTube embed placeholder — Play icon replaces ▶ emoji */}
          <div style={{ position: "relative", paddingBottom: "56.25%", borderRadius: 14, overflow: "hidden", background: "#1E3048", boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }}>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
              <div style={{ width: 72, height: 72, background: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Play size={28} color="white" fill="white" />
              </div>
              <p style={{ color: "#A0AEC0", fontSize: 14 }}>Live stream will appear here when we go live</p>
              <a href={c.streamEmbed.youtubeChannelUrl} target="_blank" rel="noopener noreferrer"
                style={{ background: ORANGE, color: "#fff", padding: "10px 24px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>
                Visit Our YouTube Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── This week's schedule ── */}
      <section style={{ background: "#f7f8fa", padding: "60px 2rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2235", fontWeight: 900, fontSize: "1.6rem", marginBottom: 28, textAlign: "center" }}>
            {c.schedule.heading}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {c.schedule.items.map((item, i) => (
              <div key={i} style={{ background: "#fff", border: item.isLive ? `2px solid ${ORANGE}` : "1.5px solid #E2E8F0", borderRadius: 12, padding: "18px 24px", display: "flex", alignItems: "center", gap: 16 }}>
                {item.isLive && (
                  <span style={{ background: "#FEE2E2", color: "#C53030", fontSize: 10, fontWeight: 800, padding: "3px 8px", borderRadius: 20, whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 4 }}>
                    <Radio size={10} />
                    LIVE
                  </span>
                )}
                <span style={{ color: ORANGE, fontWeight: 800, fontSize: 15, minWidth: 70 }}>{item.time}</span>
                <span style={{ color: "#1a2235", fontSize: 15, fontWeight: 500 }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Past Messages ── */}
      <section style={{ background: "#fff", padding: "60px 2rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: "#1a2235", fontWeight: 900, fontSize: "1.6rem", marginBottom: 10 }}>{c.pastMessages.heading}</h2>
          <p style={{ color: GREY, marginBottom: 32 }}>{c.pastMessages.subheading}</p>
          <Link href="/past-messages" style={{ background: ORANGE, color: "#fff", padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 15 }}>
            Browse All Messages →
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
