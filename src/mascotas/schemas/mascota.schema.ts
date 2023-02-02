import {Schema} from 'mongoose'

export const MascotaSchema = new Schema({
    nombre: String,
    tipoAnimal: String,
    raza: String,
    nombreDuenio: String,
    dniDuenio: {
        type: String,
        unique: true,
        required: true
      },
    celularDuenio: Number,
})