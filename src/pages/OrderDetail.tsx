import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OrderProductItem from '../components/OrderProductItem';
import '../styles/OrderDetail.css';

const OrderDetail = () =>{
    return (
        <div>
            <Header />
            <section className='container-orderDetail'>
                <div className='container-products'>
                    <OrderProductItem />
                    <OrderProductItem />
                    <OrderProductItem />
                    <OrderProductItem />
                    <OrderProductItem />
                    <OrderProductItem />
                </div>
                <div className='container-detailsOrder'>
                    <section>
                        <h1 className='detail-code'>XACDFGTRE123</h1>
                        <p className='detail-date'>05/May/2022</p>
                        <p className='detail-status'>En preparación</p>
                        <select name="status-order" id="statusOrder">
                            <option value="">En preparación</option>
                            <option value="">Enviado</option>
                            <option value="">En tienda</option>
                            <option value="">Solicitado</option>
                        </select>
                        <p className='detail-total'>Total: $ 46.50</p>
                    </section>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default OrderDetail;