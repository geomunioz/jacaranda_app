import {useContext, createContext, useEffect, useState} from "react";
import { 
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import Home from "../pages/Home";
import { Link, Navigate } from "react-router-dom";
import { IUser } from "../interfaces/IUser";
import { IOrder } from "../interfaces/IOrder";
import { IProduct } from "../interfaces/IProduct";
import useProductsFunctions from "../hooks/useProducts";
import useOrderFunctions from "../hooks/useOrders";

const AuthContext = createContext<any | null>(null);

export const AuthContextProvider = ({children}: any) => {
    const [user, setUser] = useState();
    const [nameCategory, setNameCategory] = useState<String[]>(['Ofertas','Despensa','Bebes','Cuidado Personal','Vinos y Licores','Limpieza','Mascotas']);
    const [userActual, setUserActual] = useState<IUser | undefined>(undefined);
    const [productos,setProductos] = useState<IProduct[]>([]);
    const [pedidos,setPedidos] = useState<IOrder[]>([]);
    const [cart,setCart] = useState<IProduct[]>([]);
    const {getProducts, almacen} = useProductsFunctions();
    
    const {getOrders,orders} = useOrderFunctions();

    if(almacen==null || almacen.length == 0){
        console.log("Se obtendran valores de almacen------->")
        getProducts();
    }

    if(orders==null || orders.length == 0){
        console.log("Se obtendran valores de orders------->")
        getOrders();
    }

    const googleSignIn = () => {
        const provider =  new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    const logOut = () => {
        signOut(auth);
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser: any)=> {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    useEffect(()=>{
        setProductos(almacen);
    },[almacen])

    useEffect(()=>{
        console.log("Se actualizo orders en AuthContext: ", orders);
        setPedidos(orders);
    },[orders])

    useEffect(()=>{
        console.log("Se actualizo productos en AuthContext: sin definir en []", productos);
        console.log("Se actualizo orders en AuthContext: sin definir en []", orders);
    },[])

    useEffect(()=>{
        console.log("Se actualizo productos en Cart: ", cart);
    },[cart])

    return (
        <AuthContext.Provider value={ 
            { 
                googleSignIn, 
                logOut, 
                user, 
                setUser,
                userActual, 
                setUserActual,
                productos, 
                setProductos, 
                nameCategory,
                cart,
                setCart,
                setPedidos,
                pedidos 
            } }>
            {children}
        </AuthContext.Provider>
    );
    
}

export const UserAuth = () => {
    return useContext(AuthContext)
}