import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faTag  } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import '../styles/MenuLogin.css';
import { UserAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import useUsersFunctions from '../hooks/useUsers';

const MenuLogin = () => {
    const { setExistUser } = useUsersFunctions();
    const { userCurrent } = useUsersFunctions();
    const {user, logOut, userActual, setUserActual } = UserAuth();

    console.log("Valor esperado:", userCurrent);

    const handleSignOut = async () => {
        setExistUser(undefined);
        setUserActual(undefined);
        try{
            await logOut();
        }catch(error){
            console.log(error)
        }
    };

    return(
        <aside className='container-menuLogin'>
            {userActual?.admin === "true" ? (
                <div>
                    <Link to="/new-product">
                        <button>
                            <FontAwesomeIcon className='icon' icon={faSquarePlus} />
                            Nuevas
                        </button>
                    </Link>
                    <Link to="/orders">
                        <button>
                            <FontAwesomeIcon className='icon' icon={faTag} />
                            Pedidos
                        </button>
                    </Link>
                </div>
                
            ) : (
                <Link to="/orders">
                    <button>
                        <FontAwesomeIcon className='icon' icon={faTag} />
                        Pedidos
                    </button>
                </Link>
            ) }
            
            <button
                onClick={ handleSignOut }
            >
                <FontAwesomeIcon className='icon' icon={faRightFromBracket} />
                Salir
            </button>
           
        </aside>
    );
}

export default MenuLogin;