/**
 * Home component that serves as the main entry point for the application.
 * It renders the Navbar and Hero components within a main container.
 *
 * @returns {JSX.Element} The rendered Home component.
 */

import AboutChurch from "@/components/AboutChurch";
import CurrentSeries from "@/components/CurrentSeries";
import Donations from "@/components/Donations";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LiveStream from "@/components/LiveStream";
import Navbar from "@/components/Navbar";
import PastorGoal from "@/components/PastorGoal";
import Services from "@/components/Services";
import { JSX, useRef } from "react";

export default function Home(): JSX.Element {

 
  return (
    <main className="min-h-screen bg-gray-50">
      {/* <Navbar /> */}
      {/* <section id="home"> */}
        <Hero />
      {/* </section> */}
      <section id="livestream">
        <LiveStream />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="series">
        <CurrentSeries />
      </section>
      {/* <Events /> */}
      <section id="donate">
        <Donations />
      </section>
      <section id="pastor">
        <PastorGoal />
      </section>
      <section id="about">
        <AboutChurch />
      </section>
      {/* <Footer /> */}
    </main>
  );
}
