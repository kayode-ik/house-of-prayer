import React from "react";
import "@/styles/aboutchurch.css";

const AboutChurch = () => {
  return (
    <section className="about-church-section">
      <div className="about-container">
        {/* LEFT IMAGE SIDE */}
        <div className="about-image">
          <img src="/images/pastorMRS.jpeg" alt="Pastors" />
          <div className="pastor-tag">
            <h4>Micheal & Lara Samuel</h4>
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
            House of prayer is a church of God's people called to bring about
            revival to the community through prayer and righteous living. We
            have a mandate to proclaim the good news of Jesus and show the love
            of God to all. We are guided by the principles and commandments of
            God and we obey them. We welcome you to this atmosphere of love and
            faith and we pray that God will make all things possible for you
            through prayer.
          </p>

          {/* <div className="signature">
            <img src="/images/signature-placeholder.png" alt="Pastor Signature" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutChurch;
