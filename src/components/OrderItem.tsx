import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import fotoProduct from '../assets/images/fotoProduct.jpg';
import '../styles/index.css';
import '../styles/styles.css';
import '../styles/OrderItem.css';
import { IProduct } from '../interfaces/IProduct';
import { UserAuth } from '../context/AuthContext';

const OrderItem = (props:any) => {
    const {cart, setCart} = UserAuth();
    const handleRemove = () =>{
        const updatedCart = [...cart]; // Hacer una copia del arreglo original para no modificarlo directamente
        updatedCart.splice(props.indetificador, 1); // Eliminar el elemento en el índice n del arreglo
        setCart(updatedCart);
    }

    return (
        <div className="OrderItem">
            <figure>
                <img src={props.details.image} alt="{product.title}" />
            </figure>
            <p>{props.details.name}</p>
            <p>$ {props.details.price}</p>
            <FontAwesomeIcon className='icon' icon={faXmark} onClick={handleRemove}/>
        </div>
    );
}

export default OrderItem;