import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Counter from '../components/Counter';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

import "../styles/ProductDetail.css"
import { UserAuth } from '../context/AuthContext';
import { IProduct } from '../interfaces/IProduct';

const ProductDetail = () =>{
    const {productos,cart,setCart} = UserAuth();
    const [count,setCount] = useState(0);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const productId = searchParams.get('id');
    console.log('Id de publicación: ', productId);

    const product:IProduct = productos.find((product:IProduct) => product.id === productId);

    const actualizarCount = (valorNuevo:any) =>{
        setCount(valorNuevo);
    };

    useEffect(()=>{
        console.log(count);
    },[count])

    const handleAddCart = () => {
        // for (let index = 0; index < count; index++) {
        //     console.log("agregue el index: ",index);
        //     setCart([...cart,product])
        // }
        const newItems = Array.from({ length: count }, () => product);
        setCount(0);
        setCart([...cart, ...newItems]);
    }

    return (
        <div>
            <Header carrito={cart}/>
            <section className='container-productDetail'>
                <div>
                    <Gallery urlImg={product.image.toString()} tipo={'detalle'}/>
                </div>
                <div className='details'>
                    <h1 className='detail-title'>{product.name}</h1>
                    <h3 className='detail-price'>$ {product.price}</h3>
                    <div className='section-button'>
                        <Counter stock={product.stock} actualizaCount={actualizarCount}/>
                        <button className='btn-primary detail-btn' onClick={handleAddCart}>Agregar carrito</button>
                    </div>
                    <h1>Descripción</h1>
                    <p className='detail-description'>{product.description}</p>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default ProductDetail;