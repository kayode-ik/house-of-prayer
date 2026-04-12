import React from "react";
import "@/styles/services.css";
import {
  BookOpen,
  Users,
  Pencil,
  HeartHandshake,
  LucideProps,
} from "lucide-react";
import type { ServicesContent } from "@/types/content";

interface Props {
  content: ServicesContent;
}

// Map icon name strings (stored in content.ts) to actual Lucide components
const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  HeartHandshake,
  BookOpen,
  Users,
  Pencil,
};

const Services = ({ content }: Props) => {
  return (
    <section className="services-section">
      <div className="services-container">
        {/* Left text area */}
        <div className="services-text">
          <p className="section-label">{content.eyebrow}</p>
          <h2>{content.heading}</h2>
          <p className="section-desc">{content.description1}</p>
          <p className="section-desc">{content.description2}</p>
        </div>

        {/* Right grid */}
        <div className="services-grid">
          {content.cards.map((item, index) => {
            const IconComponent = iconMap[item.iconName];
            return (
              <div className="service-card" key={index}>
                <div className="icon">
                  {IconComponent ? <IconComponent size={26} /> : null}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
