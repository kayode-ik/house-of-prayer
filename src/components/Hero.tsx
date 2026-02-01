import React from "react";
import Button from "./Button";

import "@/styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="top-text">Church Love, Faith Love</p>

        <h1 className="uppercase">
          Welcome To <br /> House Of Prayer  <br /> Bourne
        </h1>

        <p className="sub-text">
          A PLACE WHERE PRAYER MAKES ALL THINGS POSSIBLE
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
