import React from 'react';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

import "../styles/ProductDetail.css";
import "../styles/EditProduct.css";

const EditProduct = () =>{
    return (
        <div>
            <Header />
            <section className='container-productDetail'>
                <div>
                    <Gallery />
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
                        <form action="">
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
                            />

                            <label 
                                htmlFor="category" 
                                className="label-form"
                            >
                                Categoria
                            </label>
                            <select name="category" id="category" required>
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
                                rows={5}>

                            </textarea>

                            <label 
                                htmlFor="status" 
                                className="label-form"
                            >
                                Estado
                            </label>
                            <select name="status" id="status" required>
                                <option value="">Disponible</option>
                                <option value="Bebes">No disponible</option>
                            </select>

                            <label 
                                htmlFor="images" 
                                className="label-form"
                            >
                                Imagenes
                            </label>
                            <input 
                                className='' 
                                name="images" 
                                type="file" 
                                accept='image/png, image/jpeg, image/jpg'
                                multiple
                            />


                            <button
                                type="submit"
                                className=" btn-secundary login-button"
                            >
                                Eliminar
                            </button>

                            <button
                                type="submit"
                                className=" btn-primary login-button"
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