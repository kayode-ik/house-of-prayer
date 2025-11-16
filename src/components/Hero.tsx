import React from "react";
import Button from "./Button";

import "@/styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="top-text">Church Love, Faith Love</p>

        <h1>
          Welcome To <br /> House Of Prayer <br /> Bourne
        </h1>

        <p className="sub-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna
          condimentum mattis pellentesque id nibh tortor.
        </p>

        <Button
          label="I’m New Here"
          href="/about"
          variant="primary"
          size="md"
        />
      </div>
    </section>
  );
};

export default Hero;
