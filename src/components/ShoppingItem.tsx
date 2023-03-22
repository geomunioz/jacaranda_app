import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ShoppingItem.css';

const ShoppingItem = (payload:any) =>{
    let total:number = payload.total;
    return (
        <article className='container-shoppingItem'>
            <Link to={`/order-detail?idOrder=${payload.identificador}`}>{payload.identificador}</Link>
            <p>{payload.estado}</p>
            <p>En Tienda</p>
            <p>{payload.fecha}</p>
            <p>$ {total?.toFixed(2)}</p>
        </article>
    );
}

export default ShoppingItem;