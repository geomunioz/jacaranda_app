import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/styles.css';
import '../styles/SuccessOrder.css';

const SuccessOrder = () =>{
    return (
        <div>
            <Header />
            <section className='container-page'>
                <section className='login-form'>
                    <figure className='container-icon'>
                        <FontAwesomeIcon className='icon' icon={faCheck} />
                    </figure>
                    <div className='success-detail'>
                        <p>
                            Sus productos se han reservado correctamente, puede recogerlos con el codigo de reserva. 
                        </p>
                        <p>
                            Tambien estara disponible en sus pedidos.
                        </p>
                        <br />
                        <p className='code'>Código de reserva:</p>
                        <h2 className='code'>12345678</h2>
                    </div>
                    <button
                        type="submit"
                        className=" btn btn-primary"
                    >
                            Continuar
                    </button>
                </section>
            </section>
            <Footer />
        </div>
    );
}

export default SuccessOrder;