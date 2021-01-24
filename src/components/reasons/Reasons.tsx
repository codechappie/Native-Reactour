import React from "react";

import imgOne from "../../assets/images/img-kayal.jpg";
import imgTwo from "../../assets/images/Yerupaja.jpg";
import imgThree from "../../assets/images/rio-amazonas.jpg";
import imgStar from "../../assets/icons/icons8-star-48.png";

const Reasons = () => {
  return (
    <div className="reasons">
      <div className="reasons-container container">
        <div className="images">
          <div className="img imageOne">
            <img src={imgOne} alt="" />
          </div>
          <div className="row">
            <div className="img imageTwo">
              <img src={imgTwo} alt="" />
            </div>
            <div className="img imageThree">
              <img src={imgThree} alt="" />
            </div>
          </div>
        </div>
        <div className="reasons-detail">
          <h2 className="title">¿Por qué reservar con nosotros?</h2>
          <div className="items">
            <div className="item">
              <div className="border">
                <img src={imgStar} alt="" />
              </div>
              <h2>Mejores actividades seleccionadas</h2>
            </div>
            <div className="item">
              <div className="border">
                <img src={imgStar} alt="" />
              </div>
              <h2>Disponibilidad en vivo</h2>
            </div>
            <div className="item">
              <div className="border">
                <img src={imgStar} alt="" />
              </div>
              <h2>Confirmación instantánea</h2>
            </div>
            <div className="item">
              <div className="border">
                <img src={imgStar} alt="" />
              </div>
              <h2>Pagos 100% seguros</h2>
            </div>
            <div className="item">
              <div className="border">
                <img src={imgStar} alt="" />
              </div>
              <h2>Sin comisiones por reserva o crédito</h2>
            </div>
            <div className="item">
              <div className="border">
                <img src={imgStar} alt="" />
              </div>
              <h2>Feedback en cada empresa</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
