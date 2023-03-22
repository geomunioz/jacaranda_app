import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { UserAuth } from '../context/AuthContext';
import useOrderFunctions from '../hooks/useOrders';
import useProductsFunctions from '../hooks/useProducts';
import { IOrder } from '../interfaces/IOrder';
import { IProduct } from '../interfaces/IProduct';
import '../styles/styles.css';

const initialOrder: IOrder = {
    id: '',
    idUser:'',
    nameUser:'',
    email:'',
    phone:'',
    status:'En espera',
    order:[],
    date:''
    
}

const CheckoutContacto = () =>{
    const  { productos, cart, userActual }= UserAuth();
    const { updateProducts, getProducts } = useProductsFunctions();
    const { addOrder} = useOrderFunctions();
    const [order,setOrder] = useState<IOrder>(initialOrder);

    const navigate = useNavigate();
    
    initialOrder.idUser = userActual?.idUser;
    initialOrder.nameUser = userActual?.firtsName+" "+userActual?.lastName;
    initialOrder.email = userActual?.email;
    initialOrder.order = cart;

    const handleChange = (event:any)=>{
        const {name, value} = event.target;
        console.log("name:",name,"value:",value);

        const newOrder = {
            ...order,
            [name]: value
        }

        console.log("newOrder: ",newOrder);

        setOrder(newOrder);
    }

    const handleSend = async(event:any)=>{
        event.preventDefault();

        const nuevosProductos: IProduct[] = productos.map((producto:IProduct) => {
            const repetitions = cart.reduce((acc:number, item:IProduct) => {
                if (item.id === producto.id) {
                  return acc + 1;
                }
                return acc;
              }, 0);
          
            if (repetitions>0) {
              const nuevoStock = producto.stock - repetitions;
              return { ...producto, stock: nuevoStock };
            }
          
            return producto;
        });

        console.log("nuevosProductos", nuevosProductos);

        updateProducts(nuevosProductos);
        getProducts();
        await addOrder(order);
        navigate('/success-order');
    }

    useEffect(()=>{
        setTimeout(()=>{
            console.log("useEffect: Cambios - ", order);
        },3000)
    }, [order])

    useEffect(()=>{
        setTimeout(()=>{
            console.log("useEffect: Cambios - ", cart);
        },3000)
    }, [cart])
    
    return (
        <div>
            <Header carrito={cart}/>
            <section className='container-page'>
                <section className='login-form'>
                    <form>
                        <h2>Datos de Contacto</h2>
                        <label 
                            htmlFor="name" 
                            className="label-form"
                        >
                            Nombre de cliente
                        </label>
                        <input 
                            type="text" 
                            name="nameUser" 
                            placeholder="Nombre de cliente" 
                            value={userActual?.firtsName+" "+userActual?.lastName}
                            onChange={handleChange}
                            className="input" 
                            readOnly
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
                            value={userActual?.email}
                            onChange={handleChange}
                            className="input" 
                            readOnly
                        />
                        <label 
                            htmlFor="phonenumber" 
                            className="label-form"
                        >
                            Número de telefono
                        </label>
                        <input 
                            type="text" 
                            name="phone" 
                            placeholder="Número de 8 digitos" 
                            value={order.phone}
                            onChange={handleChange}
                            className="input" 
                        />

                        {/* <h2>Tipo de pedido</h2>
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
                        </div> */}
                        <button
                            type="submit"
                            className=" btn btn-primary"
                            onClick={handleSend}
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