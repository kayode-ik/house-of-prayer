import React from "react";
import Button from "./Button";

import "@/styles/hero.css";

const ORANGE = "#E8722A";
const DARK_NAVY = "#0d1b2a";
const MID_NAVY = "#1a2b3c";
const LIGHT_BG = "#f7f8fa";
const TEXT_DARK = "#1a2235";
const TEXT_GREY = "#6b7280";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="top-text">Church Love, Faith Love</p>

        <h1 className="uppercase">
          Welcome To <br /> House Of Prayer <br /> Bourne
        </h1>

        {/* Theme of the Year */}
        <div
          style={{
            background: "rgba(232,114,42,0.15)",
            border: `1px solid ${ORANGE}`,
            borderRadius: 8,
            padding: "8px 24px",
            marginBottom: 20,
            display: "inline-block",
          }}
        >
          <p
            style={{ color: ORANGE, fontSize: 13, fontWeight: 600, margin: 0 }}
          >
            THEME OF THE YEAR ·{" "}
            <span style={{ color: "#fff" }}>[YEAR OF SUBSTANCE]</span>
          </p>
        </div>

        <p
          style={{
            color: "#a0aec0",
            fontSize: 15,
            maxWidth: 600,
            marginBottom: 12,
            lineHeight: 1.7,
          }}
        >
          A Place Where Prayer Makes All Things Possible
        </p>
        <p
          style={{
            color: "#8899aa",
            fontSize: 14,
            maxWidth: 560,
            marginBottom: 36,
            lineHeight: 1.7,
          }}
        >
          Welcome to an atmosphere of love and faith. Whether you are looking
          for hope, community, or a deeper connection with God, we invite you to
          experience the life-changing power of prayer in the heart of Bourne,
          Lincolnshire.
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="#first-timer"
            style={{
              background: ORANGE,
              color: "#fff",
              padding: "14px 32px",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            I'm New Here
          </a>
          <a
            href="#live"
            style={{
              background: "transparent",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 15,
              border: "2px solid rgba(255,255,255,0.3)",
            }}
          >
            ▶ Watch Live at 10am
          </a>
        </div>
        {/* <p className="sub-text">
          A PLACE WHERE PRAYER MAKES ALL THINGS POSSIBLE
        </p>

        <Button label="I’m New Here" href="/#" variant="primary" size="md" /> */}
      </div>
    </section>
  );
};

export default Hero;
