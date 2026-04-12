import React from "react";
import { MapPin, Clock, Radio, BookOpen, Flame, Moon, Sunrise, Heart, type LucideProps } from "lucide-react";
import type { GatheringsContent, GatheringType } from "@/types/content";

interface Props {
  content: GatheringsContent;
}

const badgeStyles: Record<GatheringType, { background: string; color: string }> = {
  inperson:       { background: "#E6FFFA", color: "#2C7A7B" },
  online:         { background: "#FEE2E2", color: "#C53030" },
  "bible-study":  { background: "#EBF4FF", color: "#2B6CB0" },
  prayer:         { background: "#FAF5FF", color: "#6B46C1" },
  outreach:       { background: "#FFF5E6", color: "#C05621" },
  "coming-soon":  { background: "#EDF2F7", color: "#718096" },
};

const typeIcon: Record<GatheringType, React.ComponentType<LucideProps>> = {
  inperson:       MapPin,
  online:         Radio,
  "bible-study":  BookOpen,
  prayer:         Flame,
  outreach:       Heart,
  "coming-soon":  Moon,
};

const Gatherings = ({ content }: Props) => {
  return (
    <section id="gatherings" style={{ background: "#fff", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ color: "#718096", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>
          {content.eyebrow}
        </p>
        <h2 style={{ color: "#1a2235", fontWeight: 900, fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", marginBottom: 12 }}>
          {content.heading}
        </h2>
        <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.7, marginBottom: 40, maxWidth: 580 }}>
          {content.subheading}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
          {content.items.map((item, i) => {
            const badge = badgeStyles[item.type];
            const TypeIcon = typeIcon[item.type];
            const isOutreach = item.type === "outreach";
            return (
              <div key={i} style={{ background: "#fff", border: isOutreach ? "2px solid #E8722A" : "1.5px solid #E2E8F0", borderRadius: 12, padding: "20px", display: "flex", flexDirection: "column", gap: 6 }}>
                {/* Badge */}
                <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: badge.background, color: badge.color, fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", padding: "3px 9px", borderRadius: 4, marginBottom: 4, alignSelf: "flex-start" }}>
                  <TypeIcon size={11} />
                  {item.badgeLabel}
                </span>

                {/* Title */}
                <h4 style={{ color: "#1a2235", fontSize: 15, fontWeight: 700, margin: 0 }}>{item.title}</h4>

                {/* Time */}
                <p style={{ color: "#9CA3AF", fontSize: 13, margin: 0, display: "flex", alignItems: "center", gap: 5 }}>
                  <Clock size={12} /> {item.time}
                </p>

                {/* Description */}
                <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.55, margin: 0, flexGrow: 1 }}>
                  {item.description}
                </p>

                {/* Directions */}
                {item.mapsUrl && (
                  <a href={item.mapsUrl} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "#E8722A", fontSize: 12, fontWeight: 700, marginTop: 6, textDecoration: "none" }}>
                    <MapPin size={13} /> Get Directions
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gatherings;
