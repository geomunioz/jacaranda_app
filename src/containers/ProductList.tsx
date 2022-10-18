import React from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.css';

const ProductList = () =>{
    return (
        <section className='productList'>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
        </section>
    );
}

export default ProductList;