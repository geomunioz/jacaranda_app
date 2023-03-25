import {useEffect, useState} from 'react';
import { IUser } from '../interfaces/IUser';
import { app } from '../firebase';
import { DocumentData, getFirestore } from "firebase/firestore";
import {doc, setDoc, getDoc } from 'firebase/firestore';

let user: IUser = {
    idUser: "",
    firtsName: "",
    lastName: "",
    email:"",
    admin:""
}
const db = getFirestore(app);

const useUsersFunctions = () =>{
    const [userCurrent, setUserCurrent] = useState<IUser | undefined>(undefined);
    const [userGet, setUserGet] = useState<IUser | undefined>(undefined);
    const [existUser, setExistUser] = useState<boolean | undefined>(undefined);
    let userFinal: IUser = user;

    const createIUser = (payload: any) => {
        console.log("createUser: ",payload);
        let uid = payload.idUser;
        let email = payload.email;
        let firtsName = payload.firtsName;
        let lastName = payload.lastName;
        let admin = payload.admin;

        let createdUser: IUser = {
            idUser: uid,
            firtsName: firtsName,
            lastName: lastName,
            email: email,
            admin: admin
        }

        console.log("createdUser: ", createdUser);

        return createdUser;
    }

    const parseName = (fullName: String) =>{
        let nameCompleted = '';

        let nameSplit = fullName.split(' ');

        if(nameSplit.length === 2){
            nameCompleted = nameSplit.join(',');
        }else if(nameSplit.length === 3){
            let lastName = nameSplit[1] + " " + nameSplit[2];
            nameCompleted = nameSplit[0] + ","+ lastName;
        }else if(nameSplit.length > 3){
            let firstName = nameSplit[0] + " " + nameSplit[1];
            let lastName = nameSplit[2] + " " + nameSplit[3];
            nameCompleted = firstName + "," + lastName;
        }

        return nameCompleted;
    }

    const addUserEmailAndPassword =async (payload:IUser) => {
        try{
            // const docRef =  await addDoc(collection(db, "Users"),user);
            console.log("newUser",payload);
            setUserGet(payload);
            setExistUser(true);
            await setDoc(doc(db, "Users", payload.idUser), payload);
            userFinal = Object.assign(user, payload);
            console.log("Despues de copiar obtuve: ",userFinal);
        }catch(error){
            console.error("Error adding document");
        }
        
    }

    const addUser = async(payload:any) => {
        let nameCompleted = payload.displayName
        let [firstName, lastName] = parseName(nameCompleted).split(',');

        let newUser: IUser = {
            idUser: payload.uid,
            firtsName: firstName,
            lastName: lastName,
            email: payload.email,
            admin: "false"
        }

        try{
            // const docRef =  await addDoc(collection(db, "Users"),user);
            console.log("newUser",newUser);
            await setDoc(doc(db, "Users", newUser.idUser), newUser);
            userFinal = Object.assign(user, newUser);
        }catch(error){
            console.error("Error adding document");
        }


    } 

    const getUser = async (payload:any) => {
        
        console.log("getUser function input", payload);
        // console.log("getUser payload.uid: ",payload.uid);
        const docRef = doc(db,"Users",payload.uid);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            let dataUser = docSnap.data() as IUser;
            console.log("Document data return:", dataUser);
            userFinal = createIUser(dataUser);
            console.log("Lo encontre y cambiare estado a: ",userFinal);
            setUserGet(userFinal);
            setUserCurrent(userFinal);
            setExistUser(true);
            return userFinal;
        }
        else{
            console.log("No exist document");
            console.log("Si no existe se procede a crear copia", user);
            userFinal = createIUser(user);
            console.log("No existe userFinal es:", userFinal);
            setUserGet(userFinal);
            setExistUser(false);
            console.log("Document data no exist:", docSnap.data());
            return undefined;
        }
    }

    useEffect(()=> {
        setTimeout(()=>{
            console.log("useEffect - userGet: ",userGet);
            console.log("useEffect - userGet.id: ",userGet?.idUser);
        },3000)
    },[userGet]);

    useEffect(()=> {
        setTimeout(()=>{
            console.log("useEffect - userCurrent: ",userCurrent);
            console.log("useEffect - userCurrent.id: ",userCurrent?.idUser);
        },3000)
    },[userCurrent]);

    useEffect(()=> {
        setTimeout(()=>{
            console.log("useEffect - existUser: ",existUser);
        })
    },[existUser]);


    return {
        userCurrent,
        existUser,
        setExistUser,
        userGet,
        addUser,
        getUser,
        addUserEmailAndPassword
    }
}

export default useUsersFunctions;