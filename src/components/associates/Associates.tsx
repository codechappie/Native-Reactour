import React from "react";
import Slider from "react-slick";
import imgImages from "../../assets/images/company-logo.png";

const Associates = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="associates">
      <div className="associates-container container">
        <h2 className="title">Asociados con</h2>
        <Slider {...settings}>
          <div className="associates-card">
            <img src={imgImages} alt="" />
          </div>
          <div className="associates-card">
            <img src={imgImages} alt="" />
          </div>
          <div className="associates-card">
            <img src={imgImages} alt="" />
          </div>
          <div className="associates-card">
            <img src={imgImages} alt="" />
          </div>
          <div className="associates-card">
            <img src={imgImages} alt="" />
          </div>
          <div className="associates-card">
            <img src={imgImages} alt="" />
          </div>
          <div className="associates-card">
            <img src={imgImages} alt="" />
          </div>
          <div className="associates-card">
            <img src={imgImages} alt="" />
          </div>
          <div className="associates-card">
            <img src={imgImages} alt="" />
          </div>
          <div className="associates-card">
            <img src={imgImages} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Associates;
