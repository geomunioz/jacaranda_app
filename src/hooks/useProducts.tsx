import { useEffect,useState } from "react";
import { app } from '../firebase';
import { collection, DocumentData, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import {doc, setDoc, getDoc } from 'firebase/firestore';
import { IProduct } from "../interfaces/IProduct";
import useStorageFunctions from "./useStorage";
import { UserAuth } from "../context/AuthContext";

const db = getFirestore(app);

const useProductsFunctions = () =>{
    const {url} = useStorageFunctions();
    const [almacen, setAlmacen] = useState<IProduct[]>([]);

    const createProduct = (payload:IProduct) => {
        // console.log("createProduct: ",payload);

        let createdProduct: IProduct = {
            id: payload.id,
            name: payload.name,
            price: payload.price,
            discount: payload.discount,
            stock: payload.stock,
            category: payload.category,
            description: payload.description,
            status: payload.status,
            image: payload.image
        }

        // console.log("Se creo el producto: ",createdProduct);

        return createdProduct;
    }

    const addProduct = async(payload: IProduct)=>{
        try{
            const newProductRef = doc(collection(db,"Products"));
            console.log("Print newProductRef:",newProductRef);
            console.log("Payload",payload);
            payload.id = newProductRef.id;
            // payload.image = url;
            console.log("Payload SETID",payload);
            await setDoc(newProductRef, payload);
        }catch(error){
            console.log("Error:",error);
        }

    }

    const updateProduct = async(payload:IProduct) =>{
        try{
            const docRef = doc(db,"Products", payload.id);
            await setDoc(docRef, payload);
        }catch(error){
            console.log("Error:",error);
        }
    }

    const updateProducts = (payload:IProduct[]) =>{
        payload.map(async(item:IProduct)=>{
            let referenciaDoc = doc(db,"Products",item.id);

            await setDoc(referenciaDoc, item);
        })
    }
    
    const getProducts = async() =>{
        const listaProductos:IProduct[] = []
        const getProducts = await getDocs(collection(db,"Products"));
        getProducts.forEach((doc) => {
            const dataProduct = doc.data() as IProduct;
            const productNuevo = createProduct(dataProduct);
            // console.log("Nuevo producto obtenido: ",productNuevo);
            listaProductos.push(productNuevo);
        });

        console.log("listaProductos: ",listaProductos);
        setAlmacen(listaProductos);
        return listaProductos;
    }

    const getProduct = () =>{

    }

    useEffect(() => {
            console.log("Almacen actualizado: ", almacen);
    }, [almacen]);

    return {
        addProduct,
        getProducts,
        getProduct,
        updateProduct,
        updateProducts,
        almacen,
        setAlmacen
    }

}

export default useProductsFunctions;