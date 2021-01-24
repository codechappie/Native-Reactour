import React from "react";
import Slider from "react-slick";
import imgImages from "../../assets/images/company-logo.png";
import imgMincetur from "../../assets/images/inf_turismo.jpg";
import imgCruzSur from "../../assets/images/logo-cruz.png";
import imgLan from "../../assets/images/logo-lan.jpg";
import imgNorkys from "../../assets/images/logo-norkys.png";
import imgHosteria from "../../assets/images/logox2.jpg";
import imgQueirolo from "../../assets/images/logo-queirolo.png";

const Associates = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
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
            <img src={imgMincetur} alt="" />
          </div>
          <div className="associates-card">
            <img src={imgCruzSur} alt="" />
          </div>
          <div className="associates-card">
            <img src={imgLan} alt="" />
          </div>
          <div className="associates-card">
            <img src={imgNorkys} alt="" />
          </div>
          <div className="associates-card">
            <img src={imgHosteria} alt="" />
          </div>
          <div className="associates-card">
            <img src={imgQueirolo} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Associates;
