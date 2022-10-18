import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/styles.css'

const CheckoutData = () =>{
    return (
        <div>
            <Header />
            <section className='container-page'>
                <section className='login-form'>
                    <form action="" method="post">
                    <h2>Datos de Envio</h2>
                        <label
                            htmlFor="address" 
                            className="label-form"
                        >
                            Dirección
                        </label>
                        <input 
                            type="text" 
                            name="address" 
                            placeholder="Dirección" 
                            className="input" 
                        />
                        <label
                            htmlFor="numberOutside" 
                            className="label-form"
                        >
                            Número Exterior
                        </label>
                        <input 
                            type="text" 
                            name="numberOutside" 
                            placeholder="No. Exterior" 
                            className="input" 
                        />
                        <label
                            htmlFor="numberInside" 
                            className="label-form"
                        >
                            Número Interior
                        </label>
                        <input 
                            type="text" 
                            name="numberInside" 
                            placeholder="No. Interior" 
                            className="input" 
                        />
                        <label
                            htmlFor="zip" 
                            className="label-form"
                        >
                            Código Postal
                        </label>
                        <input 
                            type="text" 
                            name="zip" 
                            placeholder="Código Postal" 
                            className="input" 
                        />
                        <label
                            htmlFor="city" 
                            className="label-form"
                        >
                            Ciudad
                        </label>
                        <input 
                            type="text" 
                            name="city" 
                            placeholder="Ciudad" 
                            className="input" 
                        />

                        <label
                            htmlFor="suburb" 
                            className="label-form"
                        >
                            Colonia
                        </label>
                        <input 
                            type="text" 
                            name="suburb" 
                            placeholder="Colonia" 
                            className="input" 
                        />
                        <label
                            htmlFor="reference" 
                            className="label-form"
                        >
                            Referencias
                        </label>
                        <input 
                            type="text" 
                            name="reference" 
                            placeholder="Referencias" 
                            className="input" 
                        />

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

export default CheckoutData;
