import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

import "../styles/ProductDetail.css";
import "../styles/EditProduct.css";
import { UserAuth } from '../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { IProduct } from '../interfaces/IProduct';
import useProductsFunctions from '../hooks/useProducts';

const initialProduct: IProduct = {
    id: '',
    name: '',
    price: 0,
    discount: 0,
    stock: 0,
    category: "--Seleccionar--",
    description: '',
    status: "--Seleccionar--",
    image: ''
}

const EditProduct = () =>{
    const navigate = useNavigate();
    const { productos, cart, setProductos } = UserAuth();
    const { updateProduct, getProducts, setAlmacen, almacen } = useProductsFunctions();
    
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const productId = searchParams.get('id');
    console.log('Id de publicación: ', productId);
    
    const product:IProduct = productos.find((product:IProduct) => product.id === productId);
    
    const [productState, setProductState] = useState<IProduct>(product);
    
    const handleChange = (event:any)=>{
        const {name, value} = event.target;
        console.log("name:",name,"value:",value);

        const newProduct = {
            ...productState,
            [name]: value
        }

        setProductState(newProduct);
    }

    const handleSend = async() =>{
        console.log("Envio",productState);
        updateProduct(productState);
        
        const resolveProducts = await getProducts();
        setProductos(resolveProducts);
        navigate('/'); 
    }

    return (
        <div>
            <Header carrito={cart}/>
            <section className='container-productDetail'>
                <div>
                    <Gallery urlImg={productState.image} tipo={"detalle"}/>
                </div>
                <div className='details'>
                    {/* <h1 className='detail-title'>Nombre de Producto</h1>
                    <h3 className='detail-price'>$ 57.00</h3>
                    <div className='section-button'>
                        <Counter />
                        <button className='btn-primary detail-btn'>Agregar carrito</button>
                    </div>
                    <h1>Descripción</h1>
                    <p className='detail-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi labore et doloremque sapiente esse consectetur consequuntur facere fuga aliquam voluptatum, neque eveniet iusto pariatur accusantium reprehenderit nobis dolorum vel natus.</p> */}
                    <section className='details-form'>
                        <form>
                            <h1>Editar Producto</h1>
                            <label 
                                htmlFor="name" 
                                className="label-form"
                            >
                                Nombre
                            </label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Nombre de producto" 
                                className="input" 
                                value={productState.name}
                                onChange={handleChange}
                                required
                            />

                            <label 
                                htmlFor="price" 
                                className="label-form"
                            >
                                Precio
                            </label>
                            <input 
                                type="text" 
                                name="price" 
                                pattern='^\$\d{1,3}(,\d{3})*(\.\d+)?$'
                                placeholder="$ 0.00" 
                                className="input" 
                                value={productState.price}
                                onChange={handleChange}
                                required
                            />

                            <label 
                                htmlFor="discount" 
                                className="label-form"
                            >
                                Descuento
                            </label>
                            <input 
                                type="number" 
                                name="discount" 
                                placeholder="10 %" 
                                className="input"
                                value={productState.discount}
                                onChange={handleChange}
                            />

                            <label 
                                htmlFor="stock" 
                                className="label-form"
                            >
                                Cantidad de producto
                            </label>
                            <input 
                                type="number" 
                                name="stock" 
                                placeholder="0" 
                                className="input"
                                value={productState.stock}
                                onChange={handleChange}
                            />

                            <label 
                                htmlFor="category" 
                                className="label-form"
                            >
                                Categoria
                            </label>
                            <select name="category" id="category" value={productState.category} onChange={handleChange} required>
                                <option value="--Seleccionar--">--Seleccionar--</option>
                                <option value="Despensa">Despensa</option>
                                <option value="Bebes">Bebes</option>
                                <option value="Cuidado Personal">Cuidado Personal</option>
                                <option value="Vinos y Licores">Vinos y Licores</option>
                                <option value="Limpieza">Limpieza</option>
                                <option value="Mascotas">Mascotas</option>
                            </select>

                            <label 
                                htmlFor="description" 
                                className="label-form"
                            >
                                Descripción
                            </label>
                            <textarea 
                                name="description" 
                                id="" 
                                cols={30} 
                                rows={5}
                                value={productState.description}
                                onChange={handleChange}>

                            </textarea>

                            <label 
                                htmlFor="status" 
                                className="label-form"
                            >
                                Estado
                            </label>
                            <select name="status" id="status" value={productState.status} onChange={handleChange} required>
                                <option value="--Seleccionar--">--Seleccionar--</option>
                                <option value="Disponible">Disponible</option>
                                <option value="No Disponible">No Disponible</option>
                            </select>

                            <button
                                type="button"
                                className=" btn-primary login-button"
                                onClick={handleSend}
                            >
                                Guardar
                            </button>
                        </form>
                    </section>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default EditProduct;