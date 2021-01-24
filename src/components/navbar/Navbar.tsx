import React, { useState } from "react";
import { Link } from 'react-router-dom'
import imgLogo from "../../assets/images/white-logo.png";
import imgExpandArrow from "../../assets/icons/icons8-expand-arrow-50.png";
import imgPhoneRinging from "../../assets/icons/icons8-ringer-volume-30.png";
import imgMenu from "../../assets/icons/icons8-menu-60.png";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const scrollHeight = window.scrollY;
  return (
    <div id="navbar" className={`navbar ${showMenu ? 'show' : ''} ${scrollHeight > 100 ? 'black' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="logo">
          <img className="logo-img" src={imgLogo} alt="" />
        </Link>

        <div className="menu">
          <div className="menu-items">
            <div className="item">
              Ofertas
              <img className="expand-arrow" src={imgExpandArrow} alt="" />
            </div>
            <div className="item currency">
              Moneda
              <img className="expand-arrow" src={imgExpandArrow} alt="" />
            </div>
            <div className="item phone">
              <img className="phone" src={imgPhoneRinging} alt="" />
              +51 986970092
            </div>
          </div>
          <div className="auth-buttons">
            <Link to="/login" className="login-button">Iniciar</Link>
            <Link to="/register" className="register-button">Registrarse</Link>
          </div>
        </div>
        <div className="btn-responsive" onClick={() => setShowMenu(!showMenu)}>
          <img src={imgMenu} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
