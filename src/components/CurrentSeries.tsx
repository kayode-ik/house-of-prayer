import React from "react";
import "@/styles/currentseries.css";

const CurrentSeries = () => {
  return (
    <section className="current-series">
      <div className="series-content">
        <p className="series-label">Current Series</p>
        <h2>Hope for Tomorrow</h2>
        <p className="series-desc">
          Get caught up with the current message series! Turpis massa sed elementum tempus egestas sed sed risus pretium.
        </p>
        <p className="no-posts">No posts</p>
      </div>
    </section>
  );
};

export default CurrentSeries;
