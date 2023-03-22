import React, { useEffect } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductSlideList from '../containers/ProductSlideList';
import Footer from '../components/Footer';
import { UserAuth } from '../context/AuthContext';

const Home = () =>{
    const {nameCategory, productos, cart} = UserAuth();

    useEffect(()=>{
        console.log("Existio un cambio en productos ");
    },[productos]);

    return (
        <div>
            <Header carrito={cart}/>
            <Banner/>
            <ProductSlideList category={nameCategory} almacen={productos}/>
            <Footer/>
        </div >
    );
}

export default Home;