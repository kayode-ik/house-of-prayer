import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { DynamicIcon } from "@/lib/iconMap";
import { getAboutPage } from "@/lib/content";

export const revalidate = 60;

const NAVY = "#0d1b2a";
const ORANGE = "#E8722A";
const GREY = "#6b7280";

export default async function AboutPage() {
  const c = await getAboutPage();
  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section style={{ background: NAVY, padding: "80px 2rem 60px", textAlign: "center" }}>
        <p style={{ color: ORANGE, fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
          Who We Are
        </p>
        <h1 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: 16 }}>
          {c.hero.heading}
        </h1>
        <p style={{ color: "#A0AEC0", fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
          {c.hero.subheading}
        </p>
      </section>

      {/* ── Our Story ── */}
      <section style={{ background: "#fff", padding: "70px 2rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div style={{ borderRadius: 16, overflow: "hidden", position: "relative", aspectRatio: "4/3" }}>
            <Image src={c.story.image} alt="House of Prayer community" fill style={{ objectFit: "cover" }} sizes="50vw" />
          </div>
          <div>
            <p style={{ color: ORANGE, fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>{c.story.eyebrow}</p>
            <h2 style={{ color: "#1a2235", fontWeight: 900, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", marginBottom: 20 }}>{c.story.heading}</h2>
            <p style={{ color: GREY, fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{c.story.body1}</p>
            <p style={{ color: GREY, fontSize: 15, lineHeight: 1.8 }}>{c.story.body2}</p>
          </div>
        </div>
      </section>

      {/* ── Mission, Vision, Values ── */}
      <section style={{ background: NAVY, padding: "70px 2rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(1.4rem, 3vw, 2rem)", marginBottom: 48 }}>{c.mission.heading}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {[
              { label: "Vision",  value: c.mission.vision  },
              { label: "Mission", value: c.mission.mission },
              { label: "Values",  value: c.mission.values  },
            ].map((item) => (
              <div key={item.label} style={{ background: "#1E3048", borderRadius: 14, padding: "32px 24px", border: "1px solid rgba(255,255,255,0.07)" }}>
                <p style={{ color: ORANGE, fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>{item.label}</p>
                <p style={{ color: "#E2E8F0", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section style={{ background: "#f7f8fa", padding: "70px 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: GREY, fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10, textAlign: "center" }}>Meet the Team</p>
          <h2 style={{ color: "#1a2235", fontWeight: 900, fontSize: "clamp(1.4rem, 3vw, 2rem)", marginBottom: 12, textAlign: "center" }}>{c.leaders.heading}</h2>
          <p style={{ color: GREY, fontSize: 15, maxWidth: 560, margin: "0 auto 44px", lineHeight: 1.7, textAlign: "center" }}>{c.leaders.subheading}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: 32 }}>
            {c.leaders.team.map((m, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", border: "1.5px solid #E2E8F0" }}>
                <div style={{ position: "relative", height: 440 }}>
                  <Image src={m.image} alt={m.name} fill style={{ objectFit: "cover", objectPosition: "center 15%" }} sizes="600px" />
                </div>
                <div style={{ padding: "24px 24px 28px" }}>
                  <div style={{ display: "inline-block", background: ORANGE, color: "#fff", fontSize: 10, fontWeight: 800, padding: "3px 10px", borderRadius: 4, marginBottom: 10, letterSpacing: "0.06em" }}>
                    {m.role}
                  </div>
                  <h3 style={{ color: "#1a2235", fontWeight: 800, fontSize: 18, marginBottom: 10 }}>{m.name}</h3>
                  <p style={{ color: GREY, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Believe ── */}
      <section style={{ background: "#fff", padding: "70px 2rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2235", fontWeight: 900, fontSize: "clamp(1.4rem, 3vw, 2rem)", marginBottom: 12, textAlign: "center" }}>{c.beliefs.heading}</h2>
          <p style={{ color: GREY, fontSize: 15, maxWidth: 560, margin: "0 auto 44px", lineHeight: 1.7, textAlign: "center" }}>{c.beliefs.subheading}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
            {c.beliefs.items.map((b, i) => (
              <div key={i} style={{ background: "#f7f8fa", borderRadius: 12, padding: "24px 20px", border: "1.5px solid #E2E8F0", display: "flex", gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(232,114,42,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <DynamicIcon name={b.icon} size={20} color={ORANGE} />
                </div>
                <div>
                  <h4 style={{ color: "#1a2235", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{b.title}</h4>
                  <p style={{ color: GREY, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats + CTA ── */}
      <section style={{ background: NAVY, padding: "70px 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginBottom: 48, textAlign: "center" }}>
            {c.stats.map((s, i) => (
              <div key={i}>
                <p style={{ color: ORANGE, fontWeight: 900, fontSize: "2rem", margin: 0 }}>{s.value}</p>
                <p style={{ color: "#A0AEC0", fontSize: 13, margin: "6px 0 0" }}>{s.label}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/contact" style={{ background: ORANGE, color: "#fff", padding: "14px 36px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 15 }}>
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
