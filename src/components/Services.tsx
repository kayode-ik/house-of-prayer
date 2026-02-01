import React from "react";
import Button from "./Button";
import "@/styles/services.css";
import {
  BookOpen,
  Users,
  Brush,
  Calendar,
  HeartHandshake,
  HelpingHand,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <HeartHandshake size={26} />,
      title: "Soul Winning",
      text: "We are committed to evangelism by sharing the love of Jesus with those who do not yet know Him, bringing hope, truth, and salvation to lives in our community and beyond.",
    },
    {
      icon: <BookOpen size={26} />,
      title: "Weekly Services",
      text: "Every week we come together to worship, fellowship, and celebrate the love of Jesus, creating an atmosphere where faith is strengthened and hearts are renewed.",
    },
    {
      icon: <Users size={26} />,
      title: "Fellowship",
      text: "Through regular gatherings and shared moments, we ensure that no one walks alone. Our fellowship encourages connection, support, and a strong sense of belonging.",
    },
    {
      icon: <Brush size={26} />,
      title: "Exalt & Encourage",
      text: "We uplift and strengthen those who are discouraged by sharing God’s Word and building faith during challenging seasons, reminding them of God’s promises and love.",
    },
    // {
    //   icon: <Calendar size={26} />,
    //   title: "Community Care",
    //   text: "We believe in caring for people holistically, offering support, prayer, and compassion to meet both spiritual and practical needs within our community.",
    // },
    // {
    //   icon: <HelpingHand size={26} />,
    //   title: "Benevolence",
    //   text: "Through acts of kindness and generosity, we extend help to those in need, reflecting the heart of Jesus by serving with love, humility, and compassion.",
    // },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Left text area */}
        <div className="services-text">
          <p className="section-label">Our Services</p>
          <h2>We Love Serving Our Local Community</h2>
          <p className="section-desc">
            We are passionate about serving people and sharing the love of Jesus
            in practical and meaningful ways. Through worship, fellowship,
            evangelism, and encouragement, we exist to build faith, strengthen
            community, and reach lives with hope.
          </p>

          {/* <h4>Community Care</h4> */}
          <p className="section-desc">
          We believe in caring for people holistically, offering support, prayer, and compassion to meet both spiritual and practical needs within our community.
          </p>
        </div>

        {/* Right grid */}
        <div className="services-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
