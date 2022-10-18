import React from 'react';
import ProductItem from '../components/ProductItem';
import ProductSlide from './ProductSlide';
import '../styles/ProductSlideList.css';

const ProductList = () => {
    return (
        <section className='main-container'>

            <ProductSlide />
            <ProductSlide />
            <ProductSlide />
            <ProductSlide />
            <ProductSlide />
            <ProductSlide />
            <ProductSlide />
        </section>
    );
}

export default ProductList;