import React from "react";
import { MapPin, Radio } from "lucide-react";
import "@/styles/livestream.css";
import type { LiveStreamContent } from "@/types/content";

interface Props {
  content: LiveStreamContent;
}

const LiveStream = ({ content }: Props) => {
  return (
    <section className="livestream-section">
      <div className="livestream-card">
        <div className="livestream-image">
          {content.image ? (
            <img src={content.image} alt="Live Stream" />
          ) : (
            <div style={{ width: "100%", height: "100%", minHeight: 220, background: "#1a2235", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Radio size={48} color="#E8722A" opacity={0.4} />
            </div>
          )}
        </div>

        <div className="livestream-content">
          {/* Live badge — animated CSS dot, no emoji */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FEE2E2", color: "#C53030", fontSize: 11, fontWeight: 800, letterSpacing: "0.06em", padding: "4px 10px", borderRadius: 20, marginBottom: 10 }}>
            <span style={{ width: 8, height: 8, background: "#E53E3E", borderRadius: "50%", display: "inline-block", animation: "pulse 1.5s infinite" }} />
            <Radio size={12} />
            LIVE EVERY SUNDAY
          </div>

          <h2>{content.title}</h2>

          <p style={{ marginBottom: 4 }}>{content.schedule}</p>
          <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 12, display: "flex", alignItems: "center", gap: 5 }}>
            <MapPin size={13} color="#E8722A" />
            In-person at <strong style={{ color: "#1a2235", marginLeft: 3 }}>{content.venueName}</strong>, {content.venueAddress}
          </p>

          <div className="livestream-actions">
            <a href={content.streamUrl} style={{ background: "#E8722A", color: "#fff", padding: "10px 22px", borderRadius: 7, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>
              Join Now
            </a>
            <a href={content.pastMessagesUrl} className="past-link">Past Messages</a>
            <a href={content.mapsUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "#E8722A", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
              <MapPin size={14} /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStream;
