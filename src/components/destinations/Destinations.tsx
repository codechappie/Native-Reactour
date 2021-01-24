import React, { useEffect } from "react";

import imgStar from "../../assets/icons/icons8-star-48.png";
import imgSelva from "../../assets/images/amazonas-card.jpg";
import imgSanIgnacio from "../../assets/images/SanIgnacio.jpg";
import imgIquitos from "../../assets/images/iquitos.jpg";
import imgHuacachina from "../../assets/images/huacachina.jpg";
import imgMachuPicchu from "../../assets/images/machupicchu.jpg";
import { Link } from "react-router-dom";

const Destinations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="destinations">
      <div className="destinations-container container">
        <h2 className="title">Tours más comprados</h2>
        <div className="cards">
          <div className="card">
            <div className="image">
              <small className="discount">Aventura</small>
              <img src={imgSanIgnacio} alt="" />
              <div className="basic-info">
                <h3>Cajamarca</h3>
                <h5>San Ignacio y Cerro Campana</h5>
              </div>
            </div>
            <div className="general-info">
              <h2>San Ignacio Adventure Tour</h2>
              <div className="row detail-two">
                <div className="duration">
                  {/* <span className="exact-time">00:12:30</span> */}
                  <span className="time-format">
                    <small>Columpio Extremo</small>
                    <small>Puente Colgante</small>
                    <small>Bicicleta Aérea</small>
                  </span>
                </div>
                <div className="cost">
                  <small className="before">S/.300</small>
                  <small className="now">S/.250</small>
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
              <small className="discount">Familiar</small>
              <img src={imgIquitos} alt="" />
              <div className="basic-info">
                <h3>Loreto</h3>
                <h5>Iquitos</h5>
              </div>
            </div>
            <div className="general-info">
              <h2>Alma Verde Tours SAC</h2>
              <div className="row detail-two">
                <div className="duration">
                  {/* <span className="exact-time">00:24:30</span> */}
                  <span className="time-format">
                    <small>Pinturas Rupestres</small>
                    <small>Catarata La Chorrera</small>
                    <small>Cerro Campana</small>
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
              <small className="discount">Aventura</small>

              <img src={imgHuacachina} alt="" />
              <div className="basic-info">
                <h3>Ica</h3>
                <h5>Huacachina</h5>
              </div>
            </div>
            <div className="general-info">
              <h2>Sol Eterno Travel & Service</h2>
              <div className="row detail-two">
                <div className="duration">
                  {/* <span className="exact-time">00:45:10</span> */}
                  <span className="time-format">
                    <small>Tubulares y Sandboarding</small>
                    <small>Islas Ballestas</small>
                    <small>Cuatrimotos</small>
                  </span>
                </div>
                <div className="cost">
                  <small className="before">S/.200</small>
                  <small className="now">S/.140</small>
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
              <small className="discount">Familiar</small>
              <img src={imgMachuPicchu} alt="" />
              <div className="basic-info">
                <h3>Cuzco</h3>
                <h5>Machu Picchu</h5>
              </div>
            </div>
            <div className="general-info">
              <h2>Montañas Tours SAC</h2>
              <div className="row detail-two">
                <div className="duration">
                  {/* <span className="exact-time">01:10:30</span> */}
                  <span className="time-format">
                    <small>Ciudadela de Machu Picchu</small>
                    <small>Sacsayhuaman</small>
                    <small>Plaza de Armas</small>
                  </span>
                </div>
                <div className="cost">
                  <small className="before">S/.400</small>
                  <small className="now">S/.350</small>
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
                <Link to="/browse/machupicchu" className="reserve-button">Ver más</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
