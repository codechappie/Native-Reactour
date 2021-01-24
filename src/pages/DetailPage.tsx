import React, { useEffect } from "react";
import Associates from "../components/associates/Associates";
import Destinations from "../components/destinations/Destinations";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Reasons from "../components/reasons/Reasons";

import imgStar from "../assets/icons/icons8-star-48.png";
import imgSelva from "../assets/images/amazonas-card.jpg";
import imgSanIgnacio from "../assets/images/SanIgnacio.jpg";
import imgIquitos from "../assets/images/iquitos.jpg";
import imgHuacachina from "../assets/images/huacachina.jpg";
import imgMachuPicchu from "../assets/images/machupicchu.jpg";

const DetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="hero-container container">
          <div className="main-title">
            <h1>Disfruta de Machupichu</h1>
            <p>Una ciudadela inca del siglo XV, ubicada en Perú.</p>
          </div>
        </div>
      </div>

      <div className="detail">
        <div className="detail-container container">
          <div className="general-place">
            <div className="detail-place">
              <div>
                <h2>Conoce Machu Picchu</h2>
                <div className="stars">
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
                <h4>Montañas Tours SAC</h4>
                <p>
                  Machu Picchu es una ciudadela inca del siglo XV , ubicada en
                  la Cordillera Oriental del sur de Perú , en una cresta
                  montañosa de 2.430 metros (7.970 pies). Está ubicado en el
                  distrito de Machupicchu dentro de la provincia de Urubamba
                  sobre el Valle Sagrado , que se encuentra a 80 kilómetros (50
                  millas) al noroeste de Cuzco . El río Urubamba pasa junto a
                  él, atravesando la Cordillera y creando un cañón con un clima
                  de montaña tropical.
                </p>
              </div>
              <div className="price">
                <div className="before">S/. 400</div>
                <div className="now">S/. 300</div>
              </div>
            </div>
            <div className="image">
              <img
                src="https://www.cuscotoursonline.com/wp-content/uploads/2013/10/Inti-Raymi-Machu-Picchu.gif"
                alt=""
              />
            </div>
          </div>

          <div className="maps-place">
            <div className="place-map">
              <img
                src="https://www.cuscoperu.com/images/mapas-tours/como-llegar-machu-picchu.jpg"
                alt=""
              />
            </div>
            <div className="places-to-visit">
              <h3>Lugares para visitar</h3>
              <h4>- Ciudadela</h4>
              <h4>- Sacsayhuaman</h4>
              <h4>- Plaza de Armas</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="destinations">
        <div className="destinations-container container">
          <h2 className="title">Te recomendamos visitar estos lugares </h2>
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
                      <small>Columpio</small>
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
                <h2>Alma Verde Tours</h2>
                <div className="row detail-two">
                  <div className="duration">
                    {/* <span className="exact-time">00:24:30</span> */}
                    <span className="time-format">
                      <small>Pinturas rupestres</small>
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
                      <small>Tubulares</small>
                      <small>Islas Paracas</small>
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
                      <small>Ciudadela</small>
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
                  <div className="reserve-button">Ver más</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
