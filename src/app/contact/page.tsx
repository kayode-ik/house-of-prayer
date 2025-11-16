import React from "react";
import "@/styles/contact.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <>
      <section className="contact-page">
        {/* === HERO SECTION === */}
        <div className="contact-hero">
          <div className="hero-overlay">
            <h1>Get Connected</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* === INFO STRIP === */}
        <div className="contact-info-strip">
          <div className="info-item">
            <div className="icon">📅</div>
            <h4>
              MON – FRI <span>(8:00 – 20:00)</span>
            </h4>
            <p>Opening Hours</p>
          </div>

          <div className="info-item">
            <div className="icon">📞</div>
            <h4>+123 456 789</h4>
            <p>Give us a call directly</p>
          </div>

          <div className="info-item">
            <button className="btn-orange">Write To Us</button>
          </div>
        </div>

        {/* === CONTACT AREA === */}
        <div className="contact-main">
          <div className="contact-container">
            {/* LEFT SIDE */}
            <div className="contact-details">
              <h3>How to Find Us</h3>
              <div className="detail-group">
                <h5>Our Address</h5>
                <p>1773 Turkey Pen Road, New York, NY 10013</p>
              </div>

              <div className="detail-group">
                <h5>Email Us</h5>
                <p>hello@church.com</p>
              </div>

              <div className="detail-group">
                <h5>Opening Hours</h5>
                <p>Mon – Fri (8:00 – 20:00)</p>
              </div>

              <div className="detail-group">
                <h5>Free Consultation</h5>
                <p>+123 456 789</p>
              </div>
            </div>

            {/* RIGHT SIDE — CONTACT FORM */}
            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>

              <input type="email" placeholder="Email Address *" required />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Your Message *" required></textarea>

              <button type="submit" className="btn-orange">
                Submit Form
              </button>
            </form>
          </div>
        </div>

        {/* === NEWSLETTER === */}
        <div className="newsletter-section">
          <p className="label">Follow Our Updates</p>
          <h2>
            Subscribe Our Newsletter &<br /> Keep Up With Our Latest News
          </h2>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email Address" />
            <button type="submit" className="btn-orange">
              Subscribe
            </button>
          </form>
        </div>

        {/* === MAP === */}
        <div className="map-section">
          <iframe
            title="Church Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d-122.47825548468172!3d37.81992977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085816f74a5a5b5%3A0x7e54a2386b239dcb!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1616171123456!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
