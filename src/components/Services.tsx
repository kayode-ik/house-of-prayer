import React from "react";
import Button from "./Button";
import "@/styles/services.css";
import { BookOpen, Users, Brush, Calendar, HeartHandshake, HelpingHand } from "lucide-react";

const Services = () => {
  const services = [
    { icon: <BookOpen size={26} />, title: "Weekly Services", text: "Lorem ipsum dolor si adipiscing elit." },
    { icon: <Users size={26} />, title: "Youth", text: "Lorem ipsum dolor si adipiscing elit." },
    { icon: <Brush size={26} />, title: "Kids", text: "Lorem ipsum dolor si adipiscing elit." },
    { icon: <Calendar size={26} />, title: "Special Events", text: "Lorem ipsum dolor si adipiscing elit." },
    { icon: <HeartHandshake size={26} />, title: "Counseling", text: "Lorem ipsum dolor si adipiscing elit." },
    { icon: <HelpingHand size={26} />, title: "Benevolence", text: "Lorem ipsum dolor si adipiscing elit." },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Left text area */}
        <div className="services-text">
          <p className="section-label">Our Services</p>
          <h2>We Love Serving Our Local Community</h2>
          <p className="section-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <Button label="Learn More" variant="primary" size="md" />
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
