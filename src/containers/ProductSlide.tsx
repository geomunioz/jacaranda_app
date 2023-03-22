import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/index.css";
import "../styles/ProductSlide.css";

import { Pagination, Navigation } from "swiper";
import ProductItem from '../components/ProductItem';
import { IProduct } from '../interfaces/IProduct';
import { Link } from 'react-router-dom';

const ProductSlide = (props:any) => {
    let filteredProducts:IProduct[] = props.valores?.filter((product:IProduct) => product.category === props.text) ;
    let contentSwiper = []

    console.log("Valores en filteredProducts: ",filteredProducts);


    return (
        <div className='container-productSlide' id={props.text}>
            <div className='productSlide-header'>
                <h1 className='productSlide-title'>{props.text}</h1>
                <Link to={`/category?name=${props.text}`}>Ver más</Link>
            </div>
            <Swiper slidesPerView={4} spaceBetween={25} slidesPerGroup={4} loop={false} loopFillGroupWithBlank={true}
                navigation={true} modules={[Navigation]} className="mySwiper"
            >
                {
                    filteredProducts.map((item:any) => (
                        <SwiperSlide key={item.id}>
                            <ProductItem urlId={item.id} url={item.image} price={item.price} title={item.name} estilo={'absolute'}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default ProductSlide;