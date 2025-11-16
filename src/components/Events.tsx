import React from "react";
import Button from "./Button";
import "@/styles/events.css";
import { Calendar, MapPin } from "lucide-react";

const Events = () => {
  const events = [
    {
      date: { day: "04", month: "Dec", year: "2021" },
      title: "Church Family Picnic and Play at the Park",
      time: "Sat, 11:00 am — 02:00 pm",
      location: "Green Street Park",
      image: "/images/event1.jpg",
    },
    {
      date: { day: "12", month: "Dec", year: "2021" },
      title: "Mother and Daughter Tea and Cookies",
      time: "Sat, 09:00 am — 11:00 am",
      location: "City Center Church",
      image: "/images/event2.jpg",
    },
  ];

  return (
    <section className="events-section">
      <div className="events-container">
        {/* LEFT TEXT */}
        <div className="events-intro">
          <p className="section-label">This Year</p>
          <h2>Become A Part Of Something Great</h2>
          <p className="section-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis dapibus leo.
          </p>
          <Button label="View All Special Events" variant="primary" />
        </div>

        {/* RIGHT GRID */}
        <div className="events-grid">
          {events.map((event, i) => (
            <div className="event-card" key={i}>
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <div className="event-date">
                  <span className="day">{event.date.day}</span>
                  <span className="month">{event.date.month} — {event.date.year}</span>
                </div>
              </div>

              <div className="event-content">
                <h3>{event.title}</h3>
                <p className="event-time">
                  <Calendar size={16} /> {event.time}
                </p>
                <p className="event-location">
                  <MapPin size={16} /> {event.location}
                </p>
                <a href="#" className="event-btn">Event Details →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
