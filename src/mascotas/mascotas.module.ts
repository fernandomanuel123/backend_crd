import { Module } from '@nestjs/common';
import { MascotasService } from './mascotas.service';
import { MascotasController } from './mascotas.controller';
import { MongooseModule} from '@nestjs/mongoose'
import { MascotaSchema } from './schemas/mascota.schema';

@Module({
    imports:[MongooseModule.forFeature([
        {
            name: 'Mascota', schema: MascotaSchema
        }
    ])],
    controllers: [MascotasController],
    providers: [MascotasService]
})
export class MascotasModule {}
