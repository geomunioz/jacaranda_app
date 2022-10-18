import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import LogoJacaranda3 from '../assets/icons/LogoJacaranda3.png';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <img className='footer-logo' src={LogoJacaranda3} alt="Logo Jacaranda" />
            </div>
            <div className='footer-links'>
                <ul>
                    <li>
                        <a href="">Terminos y condiciones</a>
                    </li>
                    <li>
                        <a href="">Ayuda</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="">Categorias</a>
                    </li>
                    <li>
                        <a href="">Ofertas</a>
                    </li>
                    <li>
                        <a href="">Contacto</a>
                    </li>
                </ul>
                <div>
                    <p>Siguenos en redes sociales</p>
                    <div>
                        <FontAwesomeIcon className='footer-icon' icon={faInstagram} />
                        <FontAwesomeIcon className='footer-icon' icon={faFacebookSquare} />
                        <FontAwesomeIcon className='footer-icon' icon={faWhatsapp} />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;