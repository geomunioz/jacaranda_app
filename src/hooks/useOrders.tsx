import { app } from '../firebase';
import { collection, doc, getDocs, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { IOrder } from "../interfaces/IOrder";
import { useEffect, useState } from 'react';

const db = getFirestore(app);

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

const useOrderFunctions = () =>{
    const [sendOrder, setSendOrder] = useState<IOrder>();
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [ordenes,setOrdenes] = useState<IOrder[]>([]);
    let orderActual :IOrder = initialOrder;

    const fecha = () =>{
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1; // Sumamos 1 porque los meses empiezan en 0
        const day = today.getDate();

        const fechaActual = `${day}/${month}/${year}`;
        console.log(fechaActual);
        return fechaActual;
    }

    const createOrder = (payload:IOrder) =>{
        // console.log("createOrder: ",payload);
    
        let createdOrder: IOrder = {
            id: payload.id,
            idUser:payload.idUser,
            nameUser: payload.nameUser,
            email:payload.email,
            phone:payload.phone,
            status:payload.status,
            order: payload.order,
            date:payload.date
        }
    
        // console.log("Se creo el producto: ",createdOrder);
    
        return createdOrder;
        
    }

    const addOrder = async(payload:IOrder) =>{
        try {
            const newOrderRef = doc(collection(db,"Orders"));
            // console.log("Print newOrderRef:",newOrderRef);
            // console.log("Payload order",payload);
            payload.id = newOrderRef.id;
            payload.date = fecha();
            // payload.image = url;
            // console.log("Payload SETID",payload);
            orderActual = Object.assign(initialOrder, payload);
            // console.log("orderActual",orderActual);
            setSendOrder(orderActual);
            await setDoc(newOrderRef, payload);            
        } catch (error) {
            console.log(error);
        }
    }
    const updateOrder = async(payload:IOrder) => {
        const docRef = doc(db,"Orders", payload.id);

        await updateDoc(docRef, {
            status: payload.status
        })
    }
    
    const getOrders = async() =>{
        const listaOrders:IOrder[] = []
        const getOrders = await getDocs(collection(db,"Orders"));
        getOrders.forEach((doc) => {
            const dataOrder = doc.data() as IOrder;
            const orderNuevo = createOrder(dataOrder);
            // console.log("Nuevo producto obtenido: ",orderNuevo);
            listaOrders.push(orderNuevo);
        });

        console.log("listaOrders: ",listaOrders);
        console.log("Lista orders: ",orders);
        setOrders([...orders,...listaOrders]);
        console.log("Se realizara setOrdenes",ordenes);
        setOrdenes(listaOrders);
        console.log("Se realizo setOrdernes",ordenes);
        return listaOrders;
    }

    useEffect(() => {
        console.log("Ordenes actualizado en ----> useOrders: ", orders);
    }, [orders]);

    useEffect(()=>{
        console.log("Las ordenes se han ACTUALIZADO------------>",ordenes);
    },[ordenes]);

    useEffect(()=>{
        setTimeout(()=>{
            console.log("La order enviada es: ",orderActual);
            setSendOrder(orderActual);
        },3000)
    },[orderActual])

    return {
        addOrder,
        getOrders,
        sendOrder,
        orders,
        setOrders,
        updateOrder    
    }
}

export default useOrderFunctions;