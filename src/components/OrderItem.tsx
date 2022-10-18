import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import fotoProduct from '../assets/images/fotoProduct.jpg';
import '../styles/index.css';
import '../styles/styles.css';
import '../styles/OrderItem.css';

const OrderItem = () => {
    return (
        <div className="OrderItem">
            <figure>
                <img src={fotoProduct} alt="{product.title}" />
            </figure>
            <p>Product title</p>
            <p>$ 150.00</p>
            <FontAwesomeIcon className='icon' icon={faXmark}/>
        </div>
    );
}

export default OrderItem;