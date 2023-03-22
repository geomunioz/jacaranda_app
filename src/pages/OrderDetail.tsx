import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OrderProductItem from '../components/OrderProductItem';
import { UserAuth } from '../context/AuthContext';
import useOrderFunctions from '../hooks/useOrders';
import { IOrder } from '../interfaces/IOrder';
import { IProduct } from '../interfaces/IProduct';
import '../styles/OrderDetail.css';

const OrderDetail = () =>{
    const navigate = useNavigate();
    const {cart,pedidos, userActual} = UserAuth();
    const [estado,setEstado] = useState('--Seleccionar--');
    const { updateOrder } = useOrderFunctions();

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get('idOrder');
    console.log('Id de Orden: ', orderId);

    const orden:IOrder = pedidos.find((order:IOrder) => order.id === orderId);
    
    let total:number = orden.order.reduce((acc:number, product:IProduct) => {
        return acc + parseFloat(product.price.toString())
    }, 0);

    const handleChange = (event:any)=>{
        const {name, value} = event.target;
        console.log("name:",name,"value:",value);

        setEstado(value);
        orden.status = value;
    }

    const handleSendChange = () =>{
        console.log(orden);

        updateOrder(orden);

        navigate('/orders');

    }
    
    return (
        <div>
            <Header carrito={cart}/>
            <section className='container-orderDetail'>
                <div className='container-products'>
                    {
                        orden.order.map(( product:IProduct)=>{
                            return(
                                <OrderProductItem key={product.id} datos={product}/>
                            )
                        })
                    }
                    
                    
                </div>
                <div className='container-detailsOrder'>
                    <section>
                        <h1 className='detail-code'>{orden.id}</h1>
                        <p className='detail-date'>{orden.date}</p>
                        {
                            userActual?.admin && userActual.admin == "true" ? (
                                <div>
                                    <p className='detail-status'>Estado actual: {orden.status}</p>
                                    <select name="status-order" id="statusOrder" value={estado} onChange={handleChange}>
                                        <option value="--Seleccionar--">--Seleccionar--</option>
                                        <option value="En espera">En espera</option>
                                        <option value="En preparacion">En preparación</option>
                                        <option value="Para recoger">Para recoger</option>
                                        <option value="Finalizado">Finalizado</option>
                                    </select>
                                    <button
                                        type="button"
                                        className=" btn btn-primary login-button"
                                        onClick={handleSendChange}
                                    >
                                        Actualizar Estado
                                    </button>
                                </div>                       
                            ) : (
                                <p className='detail-status'>{orden.status}</p>
                            )
                        }
                        <p className='detail-total'>Total: $ {total.toFixed(2)}</p>
                    </section>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default OrderDetail;