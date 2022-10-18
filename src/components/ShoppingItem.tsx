import React from 'react';
import '../styles/ShoppingItem.css';

const ShoppingItem = () =>{
    return (
        <article className='container-shoppingItem'>
            <a href='#'>XACDFGTRE123</a>
            <p>Estado de pedido</p>
            <p>22/05/2022</p>
            <p>Domicilio</p>
            <p>$ 250.00</p>
        </article>
    );
}

export default ShoppingItem;