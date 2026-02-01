import React from "react";
import "@/styles/pastorgoal.css";

const PastorGoal = () => {
  return (
    <section className="pastor-goal-section">
      <div className="overlay"></div>

      <div className="goal-container">
        {/* LEFT SIDE */}
        <div className="goal-image">
          <div className="quote-mark">❝</div>
          <img src="/images/pastorImg.jpeg" alt="Pastor" />
          <div className="pastor-info">
            <h4>Pst Samuel Micheal </h4>
            <p>Outreach Ministries Leader</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="goal-text">
          <h2 style={{fontSize: "2rem"}}>
            Our goal is to bring revival to our community through prayer, faith,
            and righteous living.  <br /> We exist to proclaim the good news of Jesus
            Christ and to demonstrate the love of God in practical and
            life-changing ways.
          </h2>
          <p>
            House of Prayer is a church committed to prayer as the foundation of
            transformation. Guided by God’s Word and His commandments, we seek
            to build lives, restore hope, and strengthen faith in every season.
            We believe that through prayer, God makes all things possible. <br /> We
            welcome you into an atmosphere of love, faith, and spiritual growth,
            trusting that God will meet you, uplift you, and lead you into His
            purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PastorGoal;
