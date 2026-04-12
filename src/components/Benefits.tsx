import React from "react";
import type { BenefitsContent } from "@/types/content";
import { DynamicIcon } from "@/lib/iconMap";

interface Props {
  content: BenefitsContent;
}

const Benefits = ({ content }: Props) => {
  return (
    <section style={{ background: "#0d1b2a", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <p style={{ color: "#718096", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>
          {content.eyebrow}
        </p>
        <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", marginBottom: 14 }}>
          {content.heading}
        </h2>
        <p style={{ color: "#A0AEC0", fontSize: 16, maxWidth: 580, margin: "0 auto 48px", lineHeight: 1.7 }}>
          {content.subheading}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {content.cards.map((card, i) => (
            <div key={i} style={{ background: "#1E3048", borderRadius: 14, padding: "28px 22px", textAlign: "left", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ width: 48, height: 48, background: "rgba(232,114,42,0.15)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <DynamicIcon name={card.icon} size={22} color="#E8722A" />
              </div>
              <h4 style={{ color: "#E8722A", fontSize: 15, fontWeight: 800, marginBottom: 10 }}>{card.title}</h4>
              <p style={{ color: "#A0AEC0", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
