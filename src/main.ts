import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('Mascotas')
  .setDescription('Esta API utiliza un CRUD de mascotas')
  .setVersion('1.0')
  .addTag('mascotas')
  .build();

  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api/docs',app,document,{
    explorer: true,
    swaggerOptions:{
      filter: true,
    },
  });

  app.enableCors();
  await app.listen(5000);
}
bootstrap();
