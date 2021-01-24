import React, { useEffect } from "react";
import Associates from "../components/associates/Associates";
import Destinations from "../components/destinations/Destinations";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Reasons from "../components/reasons/Reasons";
const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Reasons />
      <Destinations />
      <Associates />
      <Footer />
    </>
  );
};

export default LandingPage;
