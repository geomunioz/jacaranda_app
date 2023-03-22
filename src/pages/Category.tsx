import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductList from '../containers/ProductList';
import { UserAuth } from '../context/AuthContext';
import { IProduct } from '../interfaces/IProduct';
import '../styles/Orders.css';

const Category = () =>{
    const {cart,productos} = UserAuth();

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');
    console.log('Categoria: ', name);

    const productosCategory:IProduct[] = productos.filter((product:IProduct) => product.category === name) ;
    console.log("Productos a lista en Category_ ", productosCategory);

    return(
        <div>
            <Header carrito={cart}/>
            <section className='page-orders'>
                <h1>{name}</h1>
                <ProductList lista={productosCategory}/>
            </section>
            <Footer />
        </div>
    );
}

export default Category;