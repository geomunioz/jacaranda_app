import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useProductsFunctions from '../hooks/useProducts';
import useStorageFunctions from '../hooks/useStorage';
import { IProduct } from '../interfaces/IProduct';
import '../styles/NewProduct.css';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const initialProduct: IProduct = {
    id: '',
    name: '',
    price: 0,
    discount: 0,
    stock: 0,
    category: "--Seleccionar--",
    description: '',
    status: "--Seleccionar--",
    image: ''
}

const NewProduct = () =>{
    const { cart } = UserAuth();
    const {addProduct,getProducts} = useProductsFunctions();
    const {addStorage, getFile, url, setUrl} = useStorageFunctions();
    const [product, setProduct] = useState(initialProduct);
    const [selectFile, setSelectFile] = useState([]);
    const navigate = useNavigate();

    const handleChange = (event:any)=>{
        const {name, value} = event.target;
        console.log("name:",name,"value:",value);

        const newProduct = {
            ...product,
            [name]: value
        }

        setProduct(newProduct);
    }

    const handleChangeFile = (event:any)=>{
        // if(event.target !== null){
        //     setSelectFile(event.target.files[0])
        // }

        var selectFile = event.target.files;
        console.log(selectFile);
        var filesArr = Array.prototype.slice.call(selectFile);
        console.log(filesArr[0]);
        setSelectFile(filesArr[0]);
    }

    const handleSend = (event:any) => {
        console.log("Proceso de add: URL -",url);
        addStorage(selectFile);
        console.log("Proceso de add: URL -",url);
        setTimeout(()=>{
           getFile(selectFile);
            
        },3000)
    }

    useEffect(()=>{
        setTimeout(()=>{
            console.log("useEffect: Cambios - ", product);
        },3000)
    }, [product])

    useEffect(()=>{
        setTimeout(()=>{
            console.log("useEffect selectFile",selectFile);
        },3000 )
    },[selectFile])

    useEffect(()=>{
        setTimeout(()=>{
            console.log("useEffect NewProduct : url-",url);
            console.log("useEffect NewProduct : tipo url-",typeof url);
            console.log("useEffect NewProduct : url Product-",url);
            if(url!=='' && url!=null){
                console.log("handleSEND : URL- ",url);
                product.image = url;
                console.log("Envio",product);
                addProduct(product);
                setUrl('');
                navigate('/'); 
            }
            
        },3000)
    },[url,addProduct,navigate,product,setUrl])

    return (
        <div>
            <Header carrito={cart}/>
            <section className='login-form  product-form'>
                <form>
                    <h1>Nuevo Producto</h1>
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
                        value={product.name}
                        onChange={handleChange}
                        required
                    />

                    <label 
                        htmlFor="price" 
                        className="label-form"
                    >
                        Precio
                    </label>
                    <input 
                        type="number" 
                        name="price" 
                        pattern='^\$\d{1,3}(,\d{3})*(\.\d+)?$'
                        placeholder="$ 0.00" 
                        className="input" 
                        value={product.price}
                        onChange={handleChange}
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
                        value={product.discount}
                        onChange={handleChange}
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
                        value={product.stock}
                        onChange={handleChange}
                    />

                    <label 
                        htmlFor="category" 
                        className="label-form"
                    >
                        Categoria
                    </label>
                    <select name="category" id="category" value={product.category} onChange={handleChange} required>
                        <option value="--Seleccionar--">--Seleccionar--</option>
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
                        rows={5}
                        value={product.description}
                        onChange={handleChange}>

                    </textarea>

                    <label 
                        htmlFor="status" 
                        className="label-form"
                    >
                        Estado
                    </label>
                    <select name="status" id="status" value={product.status} onChange={handleChange} required>
                        <option value="--Seleccionar--">--Seleccionar--</option>
                        <option value="Disponible">Disponible</option>
                        <option value="No Disponible">No Disponible</option>
                    </select>

                    <label 
                        htmlFor="images" 
                        className="label-form"
                    >
                        Imagenes
                    </label>
                    <input 
                        className='' 
                        name="image" 
                        type="file" 
                        accept='image/png, image/jpeg, image/jpg'
                        // value={selectFile}
                        onChange={handleChangeFile}
                        multiple
                    />


                    <button
                        type="button"
                        className=" btn btn-primary login-button"
                        onClick={handleSend}
                    >
                        Agregar producto
                    </button>
                </form>
            </section>
            <Footer />
        </div>
    );
}

export default NewProduct;