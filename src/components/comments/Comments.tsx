import React from "react";
import Slider from "react-slick";
import imgImages from "../../assets/images/amazonas-card.jpg";
import imgImages2 from "../../assets/images/Yerupaja.jpg";

const Comments = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="comments">
      <div className="comments-container container">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="comment-card">
            <img src={imgImages} alt="" />
          </div>
          <div className="comment-card">
            <img src={imgImages2} alt="" />
          </div>
          <div className="comment-card">
            <img src={imgImages} alt="" />
          </div>
          <div className="comment-card">
            <img src={imgImages2} alt="" />
          </div>
          <div className="comment-card">
            <img src={imgImages} alt="" />
          </div>
          <div className="comment-card">
            <img src={imgImages2} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Comments;
