import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/styles.css';
import '../styles/SuccessOrder.css';
import { UserAuth } from '../context/AuthContext';
import useOrderFunctions from '../hooks/useOrders';
import { useNavigate } from 'react-router-dom';

const SuccessOrder = () =>{
    const {cart, setCart, setPedidos} = UserAuth();
    const { sendOrder,getOrders } = useOrderFunctions();

    const navigate = useNavigate();

    const handleEvent = async () =>{
        const resolveOrders = await getOrders();
        setPedidos(resolveOrders);
        navigate('/')
    }

    useEffect(()=>{
        setTimeout(()=>{
            console.log("La order enviada es en SuccessOrder: ",sendOrder);
            setCart([]);
        },3000)
    },[sendOrder,setCart])

    return (
        <div>
            <Header carrito={cart}/>
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
                        <h2 className='code'>{sendOrder?.id}</h2>
                    </div>
                    <button
                        type="submit"
                        className=" btn btn-primary"
                        onClick={handleEvent}
                    >
                            Finalizar
                    </button>
                </section>
            </section>
            <Footer />
        </div>
    );
}

export default SuccessOrder;