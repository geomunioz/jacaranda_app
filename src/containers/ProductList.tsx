import React from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.css';

const ProductList = (props:any) =>{
    return (
        <section className='productList'>
            {
                props.lista.map((item:any) => (
                    <ProductItem key={item.id} urlId={item.id} url={item.image} price={item.price} title={item.name} estilo={'relative'}/>
                ))
            }
            
        </section>
    );
}

export default ProductList;