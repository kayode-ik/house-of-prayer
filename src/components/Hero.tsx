import React from "react";
import { Play } from "lucide-react";
import "@/styles/hero.css";
import type { HeroContent } from "@/types/content";

interface Props {
  content: HeroContent;
}

const ORANGE = "#E8722A";

const Hero = ({ content }: Props) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="top-text">{content.eyebrow}</p>

        <h1>{content.headline}</h1>

        {/* Theme of the Year badge */}
        <div style={{ background: "rgba(232,114,42,0.15)", border: `1px solid ${ORANGE}`, borderRadius: 8, padding: "8px 24px", marginBottom: 20, display: "inline-block" }}>
          <p style={{ color: ORANGE, fontSize: 13, fontWeight: 600, margin: 0 }}>
            THEME OF THE YEAR · <span style={{ color: "#fff" }}>{content.themeOfYear}</span>
          </p>
        </div>

        <p style={{ color: "#8899aa", fontSize: 14, maxWidth: 560, marginBottom: 36, lineHeight: 1.7 }}>
          {content.subheadline}
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
          <a href={content.ctaPrimary.href}
            style={{ background: ORANGE, color: "#fff", padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 15 }}>
            {content.ctaPrimary.label}
          </a>
          <a href={content.ctaSecondary.href}
            style={{ background: "transparent", color: "#fff", padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 15, border: "2px solid rgba(255,255,255,0.3)", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <Play size={14} fill="white" /> {content.ctaSecondary.label}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
