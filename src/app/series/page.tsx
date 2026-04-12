import React from "react";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { getSeriesPage } from "@/lib/content";

export const revalidate = 60;

const NAVY = "#0d1b2a";
const ORANGE = "#E8722A";
const GREY = "#6b7280";

export default async function SeriesPage() {
  const c = await getSeriesPage();
  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section style={{ background: NAVY, padding: "80px 2rem 60px", textAlign: "center" }}>
        <p style={{ color: ORANGE, fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
          Sermons &amp; Series
        </p>
        <h1 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: 16 }}>
          {c.hero.heading}
        </h1>
        <p style={{ color: "#A0AEC0", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
          {c.hero.subheading}
        </p>
      </section>

      {/* ── Current Series ── */}
      <section style={{ background: "#f7f8fa", padding: "70px 2rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{ color: GREY, fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>
            Now
          </p>
          <h2 style={{ color: "#1a2235", fontWeight: 900, fontSize: "clamp(1.4rem, 3vw, 2rem)", marginBottom: 28 }}>
            Current Series
          </h2>
          <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", display: "grid", gridTemplateColumns: "1fr 1.2fr" }}>
            <div style={{ background: `url(${c.current.image}) center/cover no-repeat`, minHeight: 280, position: "relative" }}>
              <span style={{ position: "absolute", top: 16, left: 16, background: ORANGE, color: "#fff", fontSize: 11, fontWeight: 800, padding: "4px 12px", borderRadius: 20, letterSpacing: "0.06em" }}>
                {c.current.tag}
              </span>
            </div>
            <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ color: "#1a2235", fontWeight: 900, fontSize: "1.6rem", marginBottom: 14 }}>{c.current.title}</h3>
              <p style={{ color: GREY, fontSize: 15, lineHeight: 1.75, marginBottom: 24 }}>{c.current.description}</p>
              <Link href="/past-messages" style={{ background: ORANGE, color: "#fff", padding: "12px 28px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 14, display: "inline-block", alignSelf: "flex-start" }}>
                Watch Messages →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Past Series ── */}
      <section style={{ background: "#fff", padding: "70px 2rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ color: "#1a2235", fontWeight: 900, fontSize: "clamp(1.4rem, 3vw, 2rem)", marginBottom: 32 }}>
            Past Series
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
            {c.past.map((series, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 14, overflow: "hidden", border: "1.5px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <div style={{ background: `url(${series.image}) center/cover no-repeat`, height: 180, position: "relative" }}>
                  <span style={{ position: "absolute", top: 12, left: 12, background: "rgba(0,0,0,0.65)", color: "#fff", fontSize: 10, fontWeight: 800, padding: "3px 10px", borderRadius: 20 }}>
                    {series.tag}
                  </span>
                </div>
                <div style={{ padding: "22px 20px" }}>
                  <h4 style={{ color: "#1a2235", fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{series.title}</h4>
                  <p style={{ color: GREY, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>{series.description}</p>
                  <Link href="/past-messages" style={{ color: ORANGE, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
                    View Messages →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
