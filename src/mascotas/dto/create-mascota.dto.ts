import { ApiProperty } from "@nestjs/swagger";

export class CreateMascotaDTO{

    @ApiProperty({
        description: 'Nombre de la mascota',
        example: 'Copito'
    })
    nombre: string;

    @ApiProperty({
        description: 'Que tipo de animal es la mascota',
        example: 'gato'
    })
    tipoAnimal: string;

    @ApiProperty({
        description: 'Que tipo de raza es la mascota',
        example: 'Devon Rex'
    })
    raza: string;

    @ApiProperty({
        description: 'Nombre del dueño de la mascota',
        example: 'Fernando Murgueytio'
    })
    nombreDuenio: string;

    @ApiProperty({
        description: 'Documento de identidad del dueño de la mascota',
        example: '72372488'
    })
    dniDuenio: string;

    @ApiProperty({
        description: 'Celular del dueño de la mascota',
        example: '997332635'
    })
    celularDuenio: number;
}
