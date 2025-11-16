import React from "react";
import "@/styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* === MAP SECTION === */}
      {/* <div className="footer-map">
        <iframe
          title="Church Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d-122.47825548468172!3d37.81992977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085816f74a5a5b5%3A0x7e54a2386b239dcb!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1616171123456!5m2!1sen!2sus"
          width="100%"
          height="300"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div> */}

      {/* === MAIN FOOTER CONTENT === */}
      <div className="footer-content">
        <div className="footer-container">
          {/* Column 1 */}
          <div className="footer-col">
            <h4 className="footer-title">
              <span className="footer-icon">⛪</span> CHURCH
            </h4>
            <p>
              A church in New York, NY where you can connect with your destiny.
            </p>
            <p>1773 Turkey Pen Road, New York, NY 10013</p>
            <p className="footer-phone">1-800-123-4567</p>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h4>Weekly Gatherings</h4>
            <ul>
              <li>All Events</li>
              <li>City Heights Outreach</li>
              <li>Sunday Gathering</li>
              <li>The Dinner Table</li>
              <li>Sunday Gathering</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h4>Useful Links</h4>
            <ul>
              <li>Give</li>
              <li>Contacts</li>
              <li className="highlight">Privacy Policy</li>
              <li>Services</li>
              <li>Our Beliefs</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col footer-donate">
            <h4>See What God Can Do Through You.</h4>
            <button className="donate-btn">Donate</button>
          </div>
        </div>
      </div>

      {/* === BOTTOM STRIP === */}
      <div className="footer-bottom">
        <p>
          © 2025 House Of Prayer . All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
