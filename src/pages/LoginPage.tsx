import React from 'react'
import { Link } from 'react-router-dom'
import imgBg from '../assets/images/login-bg-2.jpg'
import imgBack from '../assets/icons/icons8-back-50.png'

const LoginPage = () => {
    return (
        <div className="login">
            <div className="overlay-blur"></div>
            <div className="login-container">
                <div className="login-form"> 
                    <Link to="/" className="back">
                        <img src={imgBack} alt=""/>
                        Inicio
                    </Link>
                    <h2>Inicia ahora y empieza tu aventura</h2>
                    <div className="form-group">
                        <label htmlFor="">Correo</label>
                        <input type="email" placeholder="Ingresa tu correo"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Contraseña</label>
                        <input type="password" placeholder="Ingrese su contraseña"/>
                    </div>
                    <small className="forgot">
                        ¿Olvidaste tu contraseña?
                    </small>
                    <div className="buttons">
                        <div className="login-button">
                            Ingresar
                        </div>
                        <Link to="/register" className="register-button">
                            Registrarme
                        </Link>
                    </div>
                </div>
                <div className="image">
                    <img src={imgBg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
