import { IProduct } from "./IProduct";

export interface IOrder{
    id: string;
    idUser:string;
    nameUser:string
    email:string;
    phone:string;
    status:'--Seleccionar--' | 'En espera' | 'En preparacion' | 'Para recoger' | 'Finalizado';
    order:IProduct[];
    date:string
}