import React from "react";

import imgStar from "../../assets/icons/icons8-star-48.png";
import imgCard from "../../assets/images/amazonas-card.jpg";

const Destinations = () => {
  return (
    <div className="destinations">
      <div className="destinations-container container">
        <h2 className="title">Destinos más visitados</h2>
        <div className="cards">
        <div className="card">
            <div className="image">
              <small className="discount">10%</small>
              <img src={imgCard} alt="" />
              <div className="basic-info">
                <h3>Amazonas</h3>
                <h5>3 dias, 2 noches</h5>
              </div>
            </div>
            <div className="general-info">
                <h2>Amazonas & Zen Tour</h2>
                <div className="row detail-two">
                  <div className="duration">
                    <span className="exact-time">00:24:30</span>
                    <span className="time-format">
                      <small>dias</small><small>horas</small><small>minutos</small>
                    </span>
                  </div>
                  <div className="cost">
                    <small className="before">S/.300</small>
                    <small className="now">S/.270</small>
                  </div>
                </div>
              <div className="row card-footer">
                <div className="stars">
                  <img src={imgStar} alt="" />
                  <img src={imgStar} alt="" />
                  <img src={imgStar} alt="" />
                  <img src={imgStar} alt="" />
                  <img src={imgStar} alt="" />
                </div>
                <div className="reserve-button">Ver más</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <small className="discount">10%</small>
              <img src={imgCard} alt="" />
              <div className="basic-info">
                <h3>Amazonas</h3>
                <h5>3 dias, 2 noches</h5>
              </div>
            </div>
            <div className="general-info">
                <h2>Amazonas & Zen Tour</h2>
                <div className="row detail-two">
                  <div className="duration">
                    <span className="exact-time">00:24:30</span>
                    <span className="time-format">
                      <small>dias</small><small>horas</small><small>minutos</small>
                    </span>
                  </div>
                  <div className="cost">
                    <small className="before">S/.300</small>
                    <small className="now">S/.270</small>
                  </div>
                </div>
              <div className="row card-footer">
                <div className="stars">
                  <img src={imgStar} alt="" />
                  <img src={imgStar} alt="" />
                  <img src={imgStar} alt="" />
                  <img src={imgStar} alt="" />
                  <img src={imgStar} alt="" />
                </div>
                <div className="reserve-button">Ver más</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <small className="discount">10%</small>
              <img src={imgCard} alt="" />
              <div className="basic-info">
                <h3>Amazonas</h3>
                <h5>3 dias, 2 noches</h5>
              </div>
            </div>
            <div className="general-info">
                <h2>Amazonas & Zen Tour</h2>
                <div className="row detail-two">
                  <div className="duration">
                    <span className="exact-time">00:45:10</span>
                    <span className="time-format">
                      <small>dias</small><small>horas</small><small>minutos</small>
                    </span>
                  </div>
                  <div className="cost">
                    <small className="before">S/.300</small>
                    <small className="now">S/.270</small>
                  </div>
                </div>
              <div className="row card-footer">
                <div className="stars">
                  <img src={imgStar} alt="" />
                  <img src={imgStar} alt="" />
                  <img src={imgStar} alt="" />
                  <img src={imgStar} alt="" />
                  <img src={imgStar} alt="" />
                </div>
                <div className="reserve-button">Ver más</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <small className="discount">10%</small>
              <img src={imgCard} alt="" />
              <div className="basic-info">
                <h3>Amazonas</h3>
                <h5>3 dias, 2 noches</h5>
              </div>
            </div>
            <div className="general-info">
                <h2>Amazonas & Zen Tour</h2>
                <div className="row detail-two">
                  <div className="duration">
                    <span className="exact-time">01:10:30</span>
                    <span className="time-format">
                      <small>dias</small><small>horas</small><small>minutos</small>
                    </span>
                  </div>
                  <div className="cost">
                    <small className="before">S/.300</small>
                    <small className="now">S/.270</small>
                  </div>
                </div>
              <div className="row card-footer">
                <div className="stars">
                  <img src={imgStar} alt="" />
                  <img src={imgStar} alt="" />
                  <img src={imgStar} alt="" />
                  <img src={imgStar} alt="" />
                  <img src={imgStar} alt="" />
                </div>
                <div className="reserve-button">Ver más</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
