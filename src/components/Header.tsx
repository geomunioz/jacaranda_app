import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import LogoJacaranda from '../assets/icons/LogoJacaranda2.png';
import '../styles/Header.css';
import MyOrder from '../containers/MyOrder';
import { UserAuth } from '../context/AuthContext';

const Header = () => {
    const { user, logOut } = UserAuth();
    const [toggleOrders, setToggleOrders] = useState(false);

    const handleSignOut = async() => {
        try{
            await logOut();
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <nav className='navbar'>
                <img className='navbar-logo' src={LogoJacaranda} alt="Logo Jacaranda" />
                <form className='navbar-search'>
                    <input
                        type="search" placeholder="Buscar producto" />
                    <button className='navbar-search__btn' type="submit" value="search" >
                        <FontAwesomeIcon icon={ faMagnifyingGlass } />
                    </button>
                </form>
                <div className='navbar-right'>
                    <ul>
                        {user?.displayName ? (
                            <li
                                className='navbar-shoppingCar'
                                onClick={() => setToggleOrders(!toggleOrders) }
                            >
                                <FontAwesomeIcon icon={faCartShopping} />
                            </li>
                        ) : (
                            <a 
                                href='/register'
                                className='navbar-userAccount'
                            >
                                <FontAwesomeIcon icon={faCartShopping} /> 
                            </a>
                        )}
                        

                        {user?.displayName ? (
                            <li 
                                className='navbar-userAccount'
                            >
                                <FontAwesomeIcon icon={faCircleUser} /> 
                                <p>{user.displayName}</p>
                            </li>
                        ) : (
                            <a 
                            href='/register'
                            className='navbar-userAccount'
                            >
                                <FontAwesomeIcon icon={faCircleUser} /> 
                                <p>Ingresa</p>
                            </a>
                        )}
                        <li className='menu-mobile'>
                            <FontAwesomeIcon icon={faBars} />
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='navbar-menu'>
                <a href="">Ofertas</a>
                <a href="">Despensa</a>
                <a href="">Bebes</a>
                <a href="">Cuidado Personal</a>
                <a href="">Vinos y Licores</a>
                <a href="">Limpieza</a>
                <a href="">Mascotas</a>
            </div>
            { toggleOrders && <MyOrder/> }
        </div>
    );
}

export default Header;