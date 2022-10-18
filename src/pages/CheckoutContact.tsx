import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/styles.css';

const CheckoutContacto = () =>{
    return (
        <div>
            <Header />
            <section className='container-page'>
                <section className='login-form'>
                    <form action="" method="post">
                        <h2>Datos de Contacto</h2>
                        <label 
                            htmlFor="name" 
                            className="label-form"
                        >
                            Nombre de cliente
                        </label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Nombre de cliente" 
                            className="input" 
                        />
                        <label 
                            htmlFor="email" 
                            className="label-form"
                        >
                            Correo electronico
                        </label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="email@example.com" 
                            className="input" 
                        />
                        <label 
                            htmlFor="phonenumber" 
                            className="label-form"
                        >
                            Número de telefono
                        </label>
                        <input 
                            type="tel" 
                            name="phonenumber" 
                            placeholder="Número de 8 digitos" 
                            className="input" 
                        />

                        <h2>Tipo de pedido</h2>
                        <div>
                            <div className='container-inputRadio'>
                                <input 
                                    type="radio" 
                                    name="typeOrder" 
                                    id="" 
                                    className='input-radio'
                                />
                                <label 
                                    htmlFor="typeOrder"
                                    className='input-radio'
                                >
                                    En tienda
                                </label>
                            </div>
                            <div className='container-inputRadio'>
                                <input 
                                    type="radio" 
                                    name="typeOrder" 
                                    id="" 
                                    className='input-radio'
                                />
                                <label 
                                    htmlFor="typeOrder"
                                    className='input-radio'
                                >
                                    Envio a domicilio + 30.00 MXN
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className=" btn btn-primary"
                        >
                            Continuar
                        </button>
                    </form>
                </section>
            </section>
            <Footer />
        </div>
    );
}

export default CheckoutContacto;