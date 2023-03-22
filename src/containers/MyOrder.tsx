import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import '../styles/MyOrder.css';
import OrderItem from '../components/OrderItem';
import { IProduct } from '../interfaces/IProduct';
import { useNavigate } from 'react-router-dom';

const MyOrder = (props:any) => {
	const navigate = useNavigate();
	
	const total:number = props.carrito.reduce((acumulador: number, producto: IProduct) => {
		return acumulador + parseFloat(producto.price.toString());
	}, 0);

	const handleSendCart = () => {
		navigate('/checkout-contacto');
	}

    return (
		<aside className='container-order'>
			<div className='order-title'>
				<FontAwesomeIcon className='icon' icon={faArrowLeft} />
				<p className="title">Carrito</p>
			</div>
			<div className="order-content">
				{
					props.carrito.map((item:IProduct,index:number)=>(
						<OrderItem key={index} indetificador={index} details={item}/>
					))
				}

			</div>
			<div>
				<div className="order">
					<p>
						<span>Total:</span>
					</p>
					<p>$ {total.toFixed(2)}</p>
				</div>
				<button className="btn primary-button" onClick={handleSendCart}>
					Comprar
				</button>
			</div>
		</aside>
    );
}

export default MyOrder;