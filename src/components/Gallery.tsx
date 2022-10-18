import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "../styles/Gallery.css";

import { Navigation } from "swiper";
import imageSlide from "../assets/images/fotoProduct.jpg";

const Gallery = () => {
    return(
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper swiperGallery">
            <SwiperSlide>
                <figure>
                    <img src={imageSlide} alt="" />
                </figure>
                <button className='slide-delete'>
                    <FontAwesomeIcon icon={ faTrash } className="icon" />
                </button>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
    );
}

export default Gallery;