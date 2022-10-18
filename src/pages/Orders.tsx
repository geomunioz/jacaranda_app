import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ShoppingList from '../containers/ShoppingList';
import '../styles/Orders.css';

const Orders = () =>{
    return (
        <div>
            <Header />
            <section className='page-orders'>
                <h1>Seguimiento de Pedidos</h1>
                <section className='container-orders'>
                    <ShoppingList />
                </section>
            </section>
            <Footer />
        </div>
    );
}

export default Orders;