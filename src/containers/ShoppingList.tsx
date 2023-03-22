import React from 'react';
import ShoppingItem from '../components/ShoppingItem';
import { UserAuth } from '../context/AuthContext';
import { IOrder } from '../interfaces/IOrder';
import { IProduct } from '../interfaces/IProduct';
import '../styles/ShoppingItem.css';

const ShoppingList = (payload:any) =>{
    const {cart,pedidos,setPedidos,userActual} = UserAuth();

    console.log("Pedidos en ShoppingList: ",pedidos);
    console.log("UserActual: ",userActual);

    return (
        <section className='main-container'>
            <article className='container-shoppingItem__title'>
                <p>Id</p>
                <p>Estado</p>
                <p>Tipo Pedido</p>
                <p>Fecha</p>
                <p>Total</p>
            </article>
            {
                userActual?.admin && userActual.admin == "true" ? (
                    pedidos.map((item:IOrder)=>{
                        let total:number = item.order.reduce((acc:number, product:IProduct) => {
                            return acc + parseFloat(product.price.toString())
                        }, 0);
                        console.log("El item es:", item ,"el total es: ",total);
                        return (
                            <ShoppingItem key={item.id} identificador={item.id} estado={item.status} fecha={item.date} total={total}/>
                        );
                    })
                ):(
                    pedidos.map((item:IOrder)=>{
                        if (item.idUser === userActual.idUser) {
                            let total:number = item.order.reduce((acc:number, product:IProduct) => {
                                return acc + parseFloat(product.price.toString())
                            }, 0);
                            console.log("El item es:", item ,"el total es: ",total);
                            return (
                                <ShoppingItem key={item.id} identificador={item.id} estado={item.status} fecha={item.date} total={total}/>
                            );
                        }
                    })
                )
            }
            
        </section>
    );
}

export default ShoppingList;