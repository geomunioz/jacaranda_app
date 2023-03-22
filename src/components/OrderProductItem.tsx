import React from 'react';
import ProductImage from '../assets/images/fotoProduct.jpg';
import '../styles/OrderProductItem.css';

const OrderProductItem = (props:any) =>{
    return(
        <article className='card-OrderProduct'>
            <picture>
                <img src={props.datos.image} alt="Imagen" />
            </picture>
            <div className='container-productOrderDetail'>
                <h1 className='productOrder-title'>{props.datos.name}</h1>
                <p className='productOrder-count'>{props.datos.category}</p>
                <p className='productOrder-price'>Total: $ {props.datos.price}</p>
            </div>
        </article>
    );
}

export default OrderProductItem;