import React from "react";
import Button from "./Button";
import "@/styles/livestream.css";

const LiveStream = () => {
  return (
    <section className="livestream-section">
      <div className="livestream-card">
        <div className="livestream-image">
          <img src="/images/livestreamHop.jpg" alt="Live Stream" />
        </div>

        <div className="livestream-content">
          <h2>Join the Sunday Live Stream</h2>
          <p>Every Sunday at 9:00 am & 11:00 am</p>

          <div className="livestream-actions">
            <Button label="Join Now" variant="primary" size="md" />
            <a href="/messages" className="past-link">
              Past Messages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStream;
