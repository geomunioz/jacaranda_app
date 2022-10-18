import React from 'react';
import fotoProduct from '../assets/images/fotoProduct.jpg';
import '../styles/ProductItem.css';

const ProductItem = () => {
    return (
        <div className='ProductItem'>
            <img src={fotoProduct} alt="Image Producto" />
            <div className='product-info'>
                <div>
                    <p className='product-info__price'>$ 29.00</p>
                    <p className='product-info__title'>Zucaritas</p>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;