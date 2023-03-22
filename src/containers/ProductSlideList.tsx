import React from 'react';
import ProductItem from '../components/ProductItem';
import ProductSlide from './ProductSlide';
import '../styles/ProductSlideList.css';

const ProductList = (props:any) => {

    return (
        <section className='main-container'>
            {
                props.category.map((categoria: any) =>(
                    <ProductSlide key={categoria} text={categoria} valores={props.almacen}/>
                ))
            }
        </section>
    );
}

export default ProductList;