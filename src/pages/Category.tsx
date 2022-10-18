import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductList from '../containers/ProductList';
import '../styles/Orders.css';

const Category = () =>{
    return(
        <div>
            <Header />
            <section className='page-orders'>
                <h1>Nombre de Categoria</h1>
                <ProductList />
            </section>
            <Footer />
        </div>
    );
}

export default Category;