import React from "react";
import Button from "./Button";
import "@/styles/donations.css";

const Donations = () => {
  const donationItems = [
    {
      title: "Renovating our Local Children’s Safe House",
      desc: "Help our organization by donating today! All donations go directly to making a difference for our cause.",
      image: "/images/donate1.jpg",
      raised: 0,
      goal: 140000,
    },
    {
      title: "Community Garden",
      desc: "Help with our community garden by donating today! All produce from the garden will go directly to lower-income families in our community.",
      image: "/images/donate2.jpg",
      raised: 0,
      goal: 30000,
    },
  ];

  return (
    <section className="donations-section">
      <div className="donations-header">
        <p className="section-label">Extra Giving Opportunities</p>
        <h2>Donate to Make a Difference in our Community</h2>
        <p className="section-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
          pulvinar dapibus leo.
        </p>
      </div>

      <div className="donations-grid">
        {donationItems.map((item, i) => {
          const progress = (item.raised / item.goal) * 100;
          return (
            <div className="donation-card" key={i}>
              <div className="card-content">
                <h3>{item.title}</h3>
                <div className="underline"></div>
                <p>{item.desc}</p>
              </div>

              <div className="card-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="card-stats">
                <div>
                  <strong>${item.raised.toLocaleString()}</strong>
                  <p>raised</p>
                </div>
                <div>
                  <strong>0</strong>
                  <p>donations</p>
                </div>
                <div>
                  <strong>${item.goal.toLocaleString()}</strong>
                  <p>goal</p>
                </div>
              </div>

              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
              </div>

              <div className="donate-btn">
                <Button label="Donate Now →" variant="secondary" />
              </div>

              <p className="secure-note">🔒 Secure Donation</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Donations;
