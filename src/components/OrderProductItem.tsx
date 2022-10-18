import React from 'react';
import ProductImage from '../assets/images/fotoProduct.jpg';
import '../styles/OrderProductItem.css';

const OrderProductItem = () =>{
    return(
        <article className='card-OrderProduct'>
            <picture>
                <img src={ProductImage} alt="Imagen" />
            </picture>
            <div className='container-productOrderDetail'>
                <h1 className='productOrder-title'>Nombre de producto por comprar</h1>
                <p className='productOrder-count'>Numero de piezas o kg</p>
                <p className='productOrder-price'>Total: $</p>
            </div>
        </article>
    );
}

export default OrderProductItem;