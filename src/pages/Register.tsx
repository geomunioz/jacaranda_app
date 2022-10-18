import React,{useContext, useEffect} from 'react';
import LogoJacaranda from '../assets/icons/LogoJacaranda.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserAuth } from '../context/AuthContext';
import '../styles/styles.css';
import '../styles/Login.css';
import '../styles/Register.css';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from 'firebase/firestore';

const db = getFirestore(app);

interface User{
    idUser: string;
    firtsName: string;
    lastName: string;
    email: string;
}

const Register = () => {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try{
            await googleSignIn();
        }catch(error){
            console.log(error);
        }
    };

    const handleAddUser = async(props: any) => {
        let user: User = {
            idUser: props.uid,
            firtsName: "Name",
            lastName: "Last Name",
            email: props.email
        }

        let newUser = JSON.stringify(user);

        try{
            const docRef =  await addDoc(collection(db, "Users"),user);
        }catch(error){
            console.error("Error adding document");
        }
    }

    useEffect(()=>{
        console.log(user);
        if(user!=null ){
            handleAddUser(user);
            navigate('/');
        }

    },[user]);

    return(
        <section className='container-page'>
            <section className='login-form'>
                <img src={LogoJacaranda} alt="Logo Jacaranda" />
                <button className='btn btn-google' onClick={handleGoogleSignIn }><FontAwesomeIcon icon={faGoogle} /> Registrarse con Google</button>
                <p className='p-register'>o</p>
                <form action="">
                    <label 
                        htmlFor="name" 
                        className="label-form"
                    >
                        Nombre
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Nombre" 
                        className="input input-email" 
                    />

                    <label 
                        htmlFor="lastName" 
                        className="label-form"
                    >
                        Apellidos
                    </label>
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Apellido" 
                        className="input input-email" 
                    />

                    <label 
                        htmlFor="email" 
                        className="label-form"
                    >
                        Correo Electronico
                    </label>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="email@example.com" 
                        className="input input-email" 
                    />
                    <label 
                        htmlFor="password" 
                        className="label-form"
                    >
                        Contraseña
                    </label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="*********" 
                        className="input input-password" 
                    />
                    <button
                        type="submit"
                        className=" btn btn-primary login-button"
                    >
                        Registrarse
                    </button>
                    <div className='login-form__register'>
                        Ya tienes una cuenta? <a href="./login">Iniciar Sesión</a>
                    </div>
                </form>
            </section>
        </section>
    );
}

export default Register;