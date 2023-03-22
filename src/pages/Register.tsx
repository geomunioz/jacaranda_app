import React,{useContext, useEffect, useState} from 'react';
import LogoJacaranda from '../assets/icons/LogoJacaranda.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserAuth } from '../context/AuthContext';
import '../styles/styles.css';
import '../styles/Login.css';
import '../styles/Register.css';
import { useNavigate } from 'react-router-dom';
import useUsersFunctions from '../hooks/useUsers';
import { app, auth } from '../firebase';
import { getFirestore } from "firebase/firestore";
import useProductsFunctions from '../hooks/useProducts';
import { IUser } from '../interfaces/IUser';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const db = getFirestore(app);

const initialUser:IUser = {
    idUser: '',
    firtsName:'',
    lastName:'',
    email: '',
    admin:'false'

}

const Register = () => {
    const {addUser, addUserEmailAndPassword, getUser, userGet, existUser} = useUsersFunctions();
    const { getProducts,almacen } = useProductsFunctions();
    const { googleSignIn, user, setUserActual } = UserAuth();
    const navigate = useNavigate();

    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [dataForm, setDataForm] = useState(initialUser);

    const handleGoogleSignIn = async () => {
        try{
            await googleSignIn();
        }catch(error){
            console.log(error);
        }
    };

    const handleAddUser = async(props: any) => {
        
        await addUser(props);
        getUser(user);
    }

    const sendAddUser =async (props:any) => {
        console.log("sendAddUser: uid ->",props.uid);
        dataForm.idUser = props.uid;
        console.log("sendAddUser: ",dataForm);
        await addUserEmailAndPassword(dataForm);
        getUser(props);

    }

    const handleAddUserEmail = async () => {
        try {
            const respuestaEmail = await createUserWithEmailAndPassword(auth, dataForm.email,pass);
            console.log("EmailAuth :",respuestaEmail);


        } catch (error:any) {
            console.log(error)
        // setError(error.message)
            if(error.code === 'auth/email-already-in-use'){
                console.log('Usuario ya registrado...');
               
            }
            if(error.code === 'auth/invalid-email'){
                console.log('Email no válido');
            }
        }
    }

    const handleChange = (event:any) =>{
        const {name, value} = event.target;
        console.log("name:",name,"value:",value);

        const newUserForm = {
            ...dataForm,
            [name]: value
        }

        console.log("newUserForm: ",newUserForm);

        setDataForm(newUserForm);
    }

    useEffect(()=>{
        console.log("Register useEffect:",user);
        let getUserValue = getUser(user);
        
        setTimeout(()=>{
            console.log("Valore devuelto por getUser:",getUserValue);
            console.log("condicion 1: != ",user!=null);
            console.log("condicion 1: !==",user!==null);
            console.log("Condicion 2: ==",user != undefined);
            console.log("Condicion 2: ===",user !== undefined);
            console.log("Condicion 5: ==",existUser==false);
            console.log("Condicion 5: ===",existUser===false);


                console.log("Value para registrar: ", userGet?.idUser)
                console.log("Value userGet EN REGISTRO: ", userGet)
            // if(user!=null && user!=undefined && userGet==undefined && typeof userGet=='undefined'){
            if(user!=null && user!=undefined && existUser===false){
                console.log("condicion 1.1: != ",user!=null);
                console.log("condicion 1.2: !==",user!=undefined);
                console.log("Condicion 1.3: VALUE EXISTUSER ==",existUser);
                

                console.log("Value userGet:",userGet);
                console.log("Value typeof userGet: ",typeof userGet);

                console.log("Voy a registrar");
                if(user.displayName != null){
                    handleAddUser(user);
                    // navigate('/');
                }else{
                    sendAddUser(user);
                    // navigate('/'); comentar para validar que se registre primero
                }
            }
        },3000)
    },[user,existUser]);

    useEffect(() =>{
        setTimeout(()=>{
            console.log("userGet?.idUser --->",userGet?.idUser);
            console.log("userGet --->",userGet);
            console.log("typeOf userGet.Id --->",typeof userGet?.idUser);
            // if(userGet?.idUser!='' && userGet!=undefined && typeof userGet!='undefined'){
            if(userGet?.idUser!='' && userGet!=undefined && existUser===true){
                console.log("El usuario existe ----------->");
                setUserActual(userGet);
                navigate('/');
            }
        })
        
    },[userGet,existUser] )


    return(
        <section className='container-page'>
            <section className='login-form'>
                <img src={LogoJacaranda} alt="Logo Jacaranda" />
                <button className='btn btn-google' onClick={handleGoogleSignIn }><FontAwesomeIcon icon={faGoogle} /> Registrarse con Google</button>
                <p className='p-register'>o</p>
                <form>
                    <label 
                        htmlFor="firtsName" 
                        className="label-form"
                    >
                        Nombre
                    </label>
                    <input 
                        type="text" 
                        name="firtsName" 
                        placeholder="Nombre" 
                        className="input input-email" 
                        value={dataForm.firtsName}
                        onChange={handleChange}
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
                        value={dataForm.lastName}
                        onChange={handleChange}
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
                        value={dataForm.email}
                        onChange={handleChange}
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
                        value={pass}
                        onChange={(event:any)=>setPass(event.target.value)}
                    />
                    <button
                        type="button"
                        className=" btn btn-primary login-button"
                        onClick={handleAddUserEmail}
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