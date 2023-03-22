import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ShoppingList from '../containers/ShoppingList';
import { UserAuth } from '../context/AuthContext';
import useOrderFunctions from '../hooks/useOrders';
import '../styles/Orders.css';

const Orders = () =>{
    const {cart,pedidos,setPedidos} = UserAuth();
    const {orders}= useOrderFunctions();

    console.log("Orders tiene actualmente",orders);

    // setPedidos(orders);

    console.log("Pedidos en Orders: ",pedidos);

    useEffect(() => {
        console.log("Ordenes actualizado en ---->Orders: ", orders);
    }, [orders]);

    return (
        <div>
            <Header carrito={cart}/>
            <section className='page-orders'>
                <h1>Seguimiento de Pedidos</h1>
                <section className='container-orders'>
                    <ShoppingList/>
                </section>
            </section>
            <Footer />
        </div>
    );
}

export default Orders;