import React from "react";
import { MapPin, Facebook, Instagram, Youtube, Link } from "lucide-react";
import "@/styles/footer.css";
import type { FooterContent } from "@/types/content";

interface Props {
  content: FooterContent;
}

const socialIcon = (platform: string) => {
  switch (platform) {
    case "facebook":  return <Facebook  size={16} />;
    case "instagram": return <Instagram size={16} />;
    case "youtube":   return <Youtube   size={16} />;
    default:          return <Link      size={16} />;
  }
};

const Footer = ({ content }: Props) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-container">

          {/* Column 1 — Brand */}
          <div className="footer-col">
            <h4 className="footer-title">
              <span className="footer-icon">
                <img src="/images/hopLogo.png" alt="Church Logo" width={50} />
              </span>{" "}
              House Of Prayer Ministry
            </h4>
            <p>{content.description}</p>

            {/* Address — MapPin icon replaces 📍 */}
            <a href={content.mapsUrl} target="_blank" rel="noopener noreferrer"
              style={{ color: "#a0aec0", fontSize: 13, textDecoration: "none", display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 6, lineHeight: 1.5 }}>
              <MapPin size={14} style={{ flexShrink: 0, marginTop: 2 }} color="#E8722A" />
              {content.address}
            </a>

            {/* Phone — tap-to-call */}
            <a href={`tel:${content.phone.replace(/\s/g, "")}`} className="footer-phone" style={{ textDecoration: "none" }}>
              {content.phone}
            </a>

            {/* Social links — Lucide icons replace emojis */}
            <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
              {content.socialLinks.map((s) => (
                <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: 36, height: 36, borderRadius: 8, background: "#1E3048", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none" }}>
                  {socialIcon(s.platform)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Gatherings */}
          <div className="footer-col">
            <h4>Weekly Gatherings</h4>
            <ul>
              {content.gatheringLinks.map((link) => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Useful Links */}
          <div className="footer-col">
            <h4>Useful Links</h4>
            <ul>
              {content.usefulLinks.map((link) => (
                <li key={link.label} className={link.highlight ? "highlight" : ""}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Donate */}
          <div className="footer-col footer-donate">
            <h4>See What God Can Do Through You.</h4>
            <a href="/donate" className="donate-btn" style={{ textDecoration: "none" }}>Donate</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} House Of Prayer Bourne. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
