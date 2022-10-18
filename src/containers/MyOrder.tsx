import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import '../styles/MyOrder.css';
import OrderItem from '../components/OrderItem';

const MyOrder = () => {
    return (
		<aside className='container-order'>
			<div className='order-title'>
				<FontAwesomeIcon className='icon' icon={faArrowLeft} />
				<p className="title">Carrito</p>
			</div>
			<div className="order-content">
				<OrderItem />
				<OrderItem />
				<OrderItem />
				<OrderItem />
				<OrderItem />
				<OrderItem />
			</div>
			<div>
				<div className="order">
					<p>
						<span>Total:</span>
					</p>
					<p>$ 0.00</p>
				</div>
				<button className="btn primary-button">
					Comprar
				</button>
			</div>
		</aside>
    );
}

export default MyOrder;