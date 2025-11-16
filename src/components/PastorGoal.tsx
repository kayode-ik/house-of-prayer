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
          <img src="/images/pastor-placeholder.jpg" alt="Pastor" />
          <div className="pastor-info">
            <h4>Samuel Micheal </h4>
            <p>Outreach Ministries Leader</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="goal-text">
          <h2>
            Our goal is to reach the victims in our community who are under oppression from
            people, addiction, or systemic systems. We work every day to help people build better lives.
          </h2>
          <p>
            Donec enim diam vulputate ut pharetra. Sagittis id consectetur purus ut faucibus
            pulvinar elementum integer enim. Ipsum suspendisse ultrices gravida dictum fusce ut
            placerat orci nulla. Commodo ullamcorper a lacus vestibulum. Mattis vulputate enim nulla
            aliquet porttitor lacus. Massa massa ultricies mi quis hendrerit dolor magna eget.
            Tristique senectus et netus et malesuada fames ac. Libero justo laoreet sit amet cursus
            sit amet dictum sit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PastorGoal;
