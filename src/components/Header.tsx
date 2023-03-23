import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import LogoJacaranda from '../assets/icons/LogoJacaranda2.png';
import '../styles/Header.css';
import MyOrder from '../containers/MyOrder';
import MenuLogin from '../containers/MenuLogin';
import { UserAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import useUsersFunctions from '../hooks/useUsers';

const Header = (props:any) => {
    // const {existUser,userCurrent} = useUsersFunctions();
    const { user, logOut, userActual } = UserAuth();
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toggleMenuLogin, setToggleMenuLogin] = useState(false);

    const handleSignOut = async() => {
        try{
            setToggleOrders(!toggleOrders)
            setToggleMenuLogin(!toggleMenuLogin)
            await logOut();
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        if(!userActual?.firtsName){
            setToggleOrders(false); // Ocultar el componente <MyOrder>
            setToggleMenuLogin(false);
        }
    })

    return (
        <div>
            <nav className='navbar'>
                <Link to="/">
                    <img className='navbar-logo' src={LogoJacaranda} alt="Logo Jacaranda" />
                </Link>
                <form className='navbar-search'>
                    <input
                        type="search" placeholder="Buscar producto" />
                    <button className='navbar-search__btn' type="submit" value="search" >
                        <FontAwesomeIcon icon={ faMagnifyingGlass } />
                    </button>
                </form>
                <div className='navbar-right'>
                    <ul>
                        {userActual?.firtsName ? (
                            <li
                                className='navbar-shoppingCar'
                                onClick={
                                    () => {
                                        console.log("toggleOrders" + toggleOrders)
                                        setToggleOrders(!toggleOrders)
                                        console.log("toggleOrders" + toggleOrders)
                                        // if(toggleOrders){
                                        //     setToggleMenuLogin(false)
                                        //     console.log("toggleMenuLogin"+toggleMenuLogin)
                                        // }

                                    }
                                }
                            >
                                <FontAwesomeIcon icon={faCartShopping} />
                            </li>
                        ) : (
                            <Link 
                                to='/register'
                                className='navbar-userAccount'
                            >
                                <FontAwesomeIcon icon={faCartShopping} /> 
                            </Link>
                        )}
                        

                        {userActual?.firtsName ? (
                            <li 
                                className='navbar-userAccount'
                                onClick={() => {
                                    console.log("toggleMenuLogin"+toggleMenuLogin)
                                        setToggleMenuLogin(!toggleMenuLogin)
                                        console.log("toggleMenuLogin"+toggleMenuLogin)
                                        // if(toggleOrders){
                                        //     setToggleOrders(false)
                                        //     console.log("toggleOrders" + toggleOrders)
                                        // }
                                    }
                                }
                            >
                                <FontAwesomeIcon icon={faCircleUser} /> 
                                <p>{userActual.firtsName}</p>
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
            
            { toggleOrders && <MyOrder carrito={props.carrito}/> }
            { toggleMenuLogin && <MenuLogin/> }
        </div>
    );
}

export default Header;