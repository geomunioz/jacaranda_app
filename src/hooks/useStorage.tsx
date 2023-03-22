import {useEffect, useState} from 'react';
import { getDownloadURL, getStorage, ref, StorageReference, uploadBytes} from 'firebase/storage';

const storage = getStorage();

const useStorageFunctions = ()  => {
    const [image, setImage] = useState<StorageReference>();
    const [url, setUrl] = useState<string>('');

    const addStorage = (payload:any) => {
        const storageRef = ref(storage, 'images/'+payload.name);
        
        uploadBytes(storageRef, payload).then((snapshot) => {
            console.log('Uploaded a blob or file!. Path:',storageRef.fullPath);
            console.log("ref snapshot", snapshot.metadata);
            setImage(storageRef);
        });
    }

    const getFile = async(payload: any) =>{
        console.log("getFile:",image?.fullPath);
        console.log("getFile: payload.name - ",payload.name);
        const pathReference = ref(storage, 'images/'+payload.name);
        
        
        // const pathReference = ref();
        // const urlImg = await getDownloadURL(pathReference);
        // setUrl(urlImg);
        // return urlImg;
        await getDownloadURL(pathReference).then((urlImg)=>{
            console.log("Obtuve la url:",urlImg);
            
            setUrl(urlImg);
        }).catch((error)=>{
            console.log("No se logro obtener URL:",error);
        })
    }

    useEffect(()=>{
        setTimeout(()=>{
            console.log(image);
        },3000)
    },[image])

    useEffect(()=>{
        setTimeout(()=>{
            console.log("useEffect URL:",url);
        },3000)
    },[url])

    return {
        addStorage,
        getFile,
        setUrl,
        url
    }
}

export default useStorageFunctions;