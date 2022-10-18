import React from 'react';
import LogoJacaranda from '../assets/icons/LogoJacaranda.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import '../styles/styles.css';
import '../styles/Login.css';

const Login = () =>{
    return (
        <section className='container-page container-login'>
            <section className='login-form'>
                <img src={LogoJacaranda} alt="Logo Jacaranda" />
                <button className='btn btn-google'><FontAwesomeIcon icon={faGoogle} /> Iniciar Sesión con Google</button>
                <p className='p-login'>o ingresa con email</p>
                <form action="">
                    <label 
                        htmlFor="email" 
                        className="label-form"
                    >
                        Correo Electronico
                    </label>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="email@example.com" 
                        className="input input-email" 
                    />
                    <label 
                        htmlFor="password" 
                        className="label-form"
                    >
                        Contraseña
                    </label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="*********" 
                        className="input input-password" 
                    />
                    <button
                        type="submit"
                        className=" btn btn-primary login-button"
                    >
                        Iniciar Sesión
                    </button>
                    <div className='login-form__register'>
                        Todavia no tienes una cuenta? <a href="./register">Registrarse</a>
                    </div>
                </form>
            </section>
        </section>
    );
}

export default Login;