import React from "react";
import { HeartHandshake } from "lucide-react";
import type { SoulWinningBannerContent } from "@/types/content";

interface Props {
  content: SoulWinningBannerContent;
}

const SoulWinningBanner = ({ content }: Props) => {
  return (
    <div style={{ background: "#E8722A", padding: "18px 2rem", display: "flex", alignItems: "center", justifyContent: "center", gap: 20, flexWrap: "wrap", textAlign: "center" }}>
      <HeartHandshake size={20} color="rgba(255,255,255,0.9)" style={{ flexShrink: 0 }} />
      <p style={{ color: "#fff", fontSize: 15, fontWeight: 600, margin: 0 }}>
        <strong>{content.text}</strong>
      </p>
      <a href={content.linkHref} style={{ color: "#fff", fontWeight: 800, textDecoration: "underline", whiteSpace: "nowrap", fontSize: 14 }}>
        {content.linkLabel} →
      </a>
    </div>
  );
};

export default SoulWinningBanner;
