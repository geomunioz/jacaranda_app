import React from 'react';
import Header from '../components/Header';
import Counter from '../components/Counter';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

import "../styles/ProductDetail.css"

const ProductDetail = () =>{
    return (
        <div>
            <Header />
            <section className='container-productDetail'>
                <div>
                    <Gallery />
                </div>
                <div className='details'>
                    <h1 className='detail-title'>Nombre de Producto</h1>
                    <h3 className='detail-price'>$ 57.00</h3>
                    <div className='section-button'>
                        <Counter />
                        <button className='btn-primary detail-btn'>Agregar carrito</button>
                    </div>
                    <h1>Descripción</h1>
                    <p className='detail-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi labore et doloremque sapiente esse consectetur consequuntur facere fuga aliquam voluptatum, neque eveniet iusto pariatur accusantium reprehenderit nobis dolorum vel natus.</p>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default ProductDetail;