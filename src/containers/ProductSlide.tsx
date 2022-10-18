import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/index.css";
import "../styles/ProductSlide.css";

import { Pagination, Navigation } from "swiper";
import ProductItem from '../components/ProductItem';

const ProductSlide = () => {
    return (
        <div className='container-productSlide'>
            <div className='productSlide-header'>
                <h1 className='productSlide-title'>Categoria 1</h1>
                <a href="">Ver más</a>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={25}
                slidesPerGroup={4}
                loop={false}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ProductSlide;