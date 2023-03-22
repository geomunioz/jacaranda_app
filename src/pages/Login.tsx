import React, { useEffect } from 'react';
import LogoJacaranda from '../assets/icons/LogoJacaranda.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import '../styles/styles.css';
import '../styles/Login.css';
import { UserAuth } from '../context/AuthContext';
import useUsersFunctions from '../hooks/useUsers';
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const navigate = useNavigate();
    const { googleSignIn, logOut, user, setUser, setUserActual } = UserAuth();
    const {addUser, getUser, userGet, existUser} = useUsersFunctions();

    const handleGoogleSignIn = async () => {
        try{
            await googleSignIn();
        }catch(error){
            console.log(error);
        }
    };

    const handleSignOut = async() => {
        try{
            await logOut();
        }catch(error){
            console.log(error);
        }
    }

    const handleAddUser = async(props: any) => {
        // let user: User = {
        //     idUser: props.uid,
        //     firtsName: "Name",
        //     lastName: "Last Name",
        //     email: props.email,
        //     admin: "false"
        // }

        // let newUser = JSON.stringify(user);

        // try{
        //     // const docRef =  await addDoc(collection(db, "Users"),user);
        //     await setDoc(doc(db, "Users", user.idUser), user);
        // }catch(error){
        //     console.error("Error adding document");
        // }
        addUser(props);
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
                alert("NO EXISTE registro de usuario: "+ existUser);
                handleSignOut();
                setUser(undefined);
                setUserActual(undefined)
                // handleAddUser(user);
                navigate('/');
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

    return (
        <section className='container-page container-login'>
            <section className='login-form'>
                <img src={LogoJacaranda} alt="Logo Jacaranda" />
                <button className='btn btn-google' onClick={ handleGoogleSignIn }><FontAwesomeIcon icon={faGoogle} /> Iniciar Sesión con Google</button>
                <p className='p-login'>o ingresa con email</p>
                <form action="">
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
                        Iniciar Sesión
                    </button>
                    <div className='login-form__register'>
                        Todavia no tienes una cuenta? <a href="./register">Registrarse</a>
                    </div>
                </form>
            </section>
        </section>
    );
}

export default Login;