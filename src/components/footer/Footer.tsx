import React from 'react'
import imgLogo from '../../assets/images/white-logo.png'
import imgFB from '../../assets/icons/icons8-facebook-50.png'
import imgInsta from '../../assets/icons/icons8-instagram-50.png'
import imgYoutube from '../../assets/icons/icons8-play-button-50.png'
import imgTwitter from '../../assets/icons/icons8-twitter-50.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container container">
                <div className="newsletter">
                    <h2 className="title">Suscribete a nuestra Newsletter</h2>
                    <input type="text" placeholder="Ingresa tu correo" />
                    <div className="newslatter-button">Suscribete</div>
                </div>

                <div className="footer-content">
                    <div className="column sns">
                        <div className="logo-footer">
                            <img src={imgLogo} alt=""/>
                        </div>
                        <div className="social-networking-sites">
                            <img src={imgFB} alt=""/>
                            <img src={imgInsta} alt=""/>
                            <img src={imgTwitter} alt=""/>
                            <img src={imgYoutube} alt=""/>
                        </div>
                        <div className="email">
                            info@thompsoms.com
                        </div>
                    </div>
                    <div className="content-column">
                        <div className="column">
                            <h3 className="title">Empresa</h3>
                            <a href="#">Acerca de</a>
                            <a href="#">Soporte al cliente</a>
                            <a href="#">Equipo</a>
                            <a href="#">Blog</a>
                        </div>
                        <div className="column">
                            <h3 className="title">Terminos</h3>
                            <a href="#">Politica de privacidad</a>
                            <a href="#">Terminos y condiciones</a>
                            <a href="#">Cargos de tarifa</a>
                            <a href="#">Seguridad</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
