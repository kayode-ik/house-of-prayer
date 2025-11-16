import React from "react";
import "@/styles/aboutchurch.css";

const AboutChurch = () => {
  return (
    <section className="about-church-section">
      <div className="about-container">
        {/* LEFT IMAGE SIDE */}
        <div className="about-image">
          <img src="/images/pastors-placeholder.jpg" alt="Pastors" />
          <div className="pastor-tag">
            <h4>Aaron & Julia Green</h4>
            <p>Senior Pastors of Church</p>
          </div>
        </div>

        {/* RIGHT TEXT SIDE */}
        <div className="about-text">
          <p className="section-label">The Church</p>
          <h2>
            We are a church that believes in <br />
            Jesus & loves God and people
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="signature">
            <img src="/images/signature-placeholder.png" alt="Pastor Signature" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutChurch;
