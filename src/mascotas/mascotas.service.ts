import { Injectable } from '@nestjs/common';
import { Mascota } from './interfaces/Mascota';
import { InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { CreateMascotaDTO } from './dto/create-mascota.dto';

@Injectable()
export class MascotasService {

    constructor(@InjectModel('Mascota') private mascotaModel: Model<Mascota>){}

    async getMascotas(): Promise<Mascota[]>{
        const mascotas = await this.mascotaModel.find();
        return mascotas;
    }

    async getMascota(id: Number): Promise<Mascota>{ 
        const mascota = await this.mascotaModel.findById(id);
        return mascota;
    }

    async createMascota(mascota: CreateMascotaDTO): Promise<Mascota>{
        const newMascota = await new this.mascotaModel(mascota)
        return await newMascota.save();         
    }    
    
      async updateMascota(id: Number, mascotaDTO : CreateMascotaDTO): Promise<Mascota>{
        const updatedMascota = await this.mascotaModel.findByIdAndUpdate(id,mascotaDTO, {new: true});
        return updatedMascota;        
    }

    async deleteMascota(id: Number): Promise<Mascota>{
        const deletedMascota = this.mascotaModel.findByIdAndDelete(id);
        return deletedMascota;         
    }

    async validateMascota(mascota: CreateMascotaDTO): Promise<boolean>{
        try {
          const mascotaExiste = await this.mascotaModel.findOne({ dniDuenio: mascota.dniDuenio });
          return !!mascotaExiste;
        } catch (error) {
          return false;
        }
      }

}
