import React from "react";
import "@/styles/currentseries.css";
import type { CurrentSeriesContent } from "@/types/content";

interface Props {
  content: CurrentSeriesContent;
}

const CurrentSeries = ({ content }: Props) => {
  return (
    <section className="current-series">
      <div className="series-content">
        <p className="series-label">{content.eyebrow}</p>
        <h2>{content.title}</h2>
        <p className="series-desc">{content.description}</p>
        {/* Sermon posts will render here once connected to a CMS sermon manager */}
        <p className="no-posts" style={{ fontStyle: "italic", color: "#9CA3AF" }}>
          Sermon posts coming soon — connect your CMS to display messages here.
        </p>
      </div>
    </section>
  );
};

export default CurrentSeries;
