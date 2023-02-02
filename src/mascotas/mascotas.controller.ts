import { Controller, Get, Post, Put, Delete, Body, Param, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import {CreateMascotaDTO} from './dto/create-mascota.dto';
import { Request,Response } from 'express';
import { MascotasService } from './mascotas.service';
import { Mascota } from './interfaces/Mascota';
import { ApiTags,ApiBody } from '@nestjs/swagger';


@Controller('mascotas')
export class MascotasController {

    constructor(private mascotaService: MascotasService){ }

    @ApiTags('mascotas')
    @Get()
    async getMascotas(@Res() res):Promise<Mascota[]>{
        const mascotas = await this.mascotaService.getMascotas();
        return res.status(HttpStatus.OK).json({
            mascotas
        })
    }

    @ApiTags('mascotas')
    @Get(':mascotaId')
    async getMascota(@Param('mascotaId') mascotaId,@Res() res): Promise<Mascota>{
        const mascota = await this.mascotaService.getMascota(mascotaId);
        if(!mascota) throw new NotFoundException("La mascota no existe");
        return res.status(HttpStatus.OK).json(mascota);  
    }
    
    @ApiTags('mascotas')
    @Post('/create')    
    async createMascota(@Body() mascotaDTO:CreateMascotaDTO, @Res() res){
        if(await this.mascotaService.validateMascota(mascotaDTO)) throw new NotFoundException("El DNI del dueño ya ha sido utilizado");
        const mascota = await this.mascotaService.createMascota(mascotaDTO)
        return res.status(HttpStatus.OK).json({
            message: 'mascota creada correctamente',
            data: mascota
        });        
    }

    @ApiTags('mascotas')
    @Put(':mascotaId')
    async UpdateMascota(@Body()mascota:CreateMascotaDTO,@Param('mascotaId')mascotaId, @Res() res):Promise<Mascota>{
        const updatedMascota = await this.mascotaService.updateMascota(mascotaId,mascota);
        if(!mascota) throw new NotFoundException("La mascota no existe");
        return res.status(HttpStatus.OK).json({
            message: 'mascota actualizada correctamente',
            data: updatedMascota
        });  
    }

    @ApiTags('mascotas')
    @Delete(':mascotaId')
    async DeleteMascota(@Param('mascotaId')mascotaId, @Res() res){
        const deletedMascota = await this.mascotaService.deleteMascota(mascotaId);
        if(!deletedMascota) throw new NotFoundException("La mascota no existe");
        return res.status(HttpStatus.OK).json({
            message: 'Mascota eliminada correctamente',
            deletedMascota
        });  
    }


}
