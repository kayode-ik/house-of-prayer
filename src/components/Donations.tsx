import React from "react";
import Button from "./Button";
import "@/styles/donations.css";

const Donations = () => {
  const donationItems = [
    {
      title: "Church Building & Development Project",
      desc: " We are raising funds to support the building and development of our church—, creating a welcoming space for worship, prayer, fellowship, and community outreach. All donations go directly toward construction, facilities, and ministry resources that will serve generations to come.",
      image: "/images/churchDonate.jpg",
      raised: 0,
      goal: 140000,
    },
    // {
    //   title: "Community Garden",
    //   desc: "Help with our community garden by donating today! All produce from the garden will go directly to lower-income families in our community.",
    //   image: "/images/donate2.jpg",
    //   raised: 0,
    //   goal: 30000,
    // },
  ];

  return (
    <section className="donations-section">
      <div className="donations-header">
        <p className="section-label">Extra Giving Opportunities</p>
        <h2>Donate to Make a Difference in our Community</h2>
        <p className="section-desc">
          Your generosity helps us create a place of worship, prayer, and
          community impact. Every gift supports the growth and development of
          House of Prayer and helps us serve more people.
        </p>
      </div>

      <div className="#" style={{paddingLeft: "25rem", paddingRight: "25rem"}}>
      {/* <div className="donations-grid"> */}
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
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                ></div>
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
