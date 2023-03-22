import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import '../styles/ProductItem.css';

const ProductItem = (props:any) => {
    const { userActual } = UserAuth();

    console.log("Estilo a ocupar: ",props.estilo);

    return (
        
            userActual?.admin && userActual?.admin == "true" ? (
                <Link to={`/edit-product?id=${props.urlId.toString()}`}>
                    <div className='ProductItem card-product' style={{position:props.estilo}}>
                        <div className='ProductItem-contentImg'>
                            <img src={props.url} alt="Image Producto" />
                        </div>
                        <div className='product-info'>
                            <div>
                                <p className='product-info__price'>$ {props.price}</p>
                                <p className='product-info__title'>{props.title}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ):
            (
                <Link to={`/productdetail?id=${props.urlId.toString()}`}>
                    <div className='ProductItem card-product' style={{position:props.estilo}}>
                        <div className='ProductItem-contentImg'>
                            <img src={props.url} alt="Image Producto" />
                        </div>
                        <div className='product-info'>
                            <div>
                                <p className='product-info__price'>$ {props.price}</p>
                                <p className='product-info__title'>{props.title}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            )
        
        
    );
}

export default ProductItem;