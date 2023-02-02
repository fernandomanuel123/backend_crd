import { Document } from "mongoose";
export interface Mascota extends Document{
    id: string 
    nombre: string;
    tipoAnimal: string;
    raza: string;
    nombreDuenio: string;
    dniDuenio: string;
    celularDuenio: number;
}