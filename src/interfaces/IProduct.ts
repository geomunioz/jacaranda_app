export interface IProduct{
    id: string;
    name: string;
    price: number;
    discount: number;
    stock: number;
    category: '--Seleccionar--' | 'Despensa' | 'Bebes' | 'Cuidado Personal' | 'Vinos y Licores' | 'Liempieza ' | 'Mascotas';
    description: string;
    status: '--Seleccionar--' | 'Diponible' | 'No disponible';
    image: string
}