import React from 'react';
import ShoppingItem from '../components/ShoppingItem';
import '../styles/ShoppingItem.css';

const ShoppingList = () =>{
    return (
        <section className='main-container'>
            <article className='container-shoppingItem__title'>
                <p>Id</p>
                <p>Estado</p>
                <p>Fecha</p>
                <p>Tipo de pedido</p>
                <p>Total</p>
            </article>
            <ShoppingItem/>
            <ShoppingItem/>
            <ShoppingItem/>
        </section>
    );
}

export default ShoppingList;