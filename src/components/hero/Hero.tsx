import React from "react";
import Searcher from "../searcher/Searcher";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container container">
        <div className="main-title">
          <h1>Busca menos, viaja más</h1>
          <p>Las mejores experiencias a precio de mochileros.</p>
        </div>
        <div className="searcher-box">
            <Searcher />
        </div>
      </div>
    </div>
  );
};

export default Hero;
