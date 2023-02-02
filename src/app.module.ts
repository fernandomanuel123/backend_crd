import { Module } from '@nestjs/common';

import { MascotasModule } from './mascotas/mascotas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MascotasModule,MongooseModule.forRoot('mongodb://localhost/crdBackend')],
  controllers: [],
  providers: [],
})
export class AppModule {}
