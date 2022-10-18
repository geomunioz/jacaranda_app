import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductSlideList from '../containers/ProductSlideList';
import Footer from '../components/Footer';

const Home = () =>{
    return (
        <div>
            <Header/>
            <Banner/>
            <ProductSlideList/>
            <Footer/>
        </div >
    );
}

export default Home;