import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  // const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Test Api example')
    .setDescription('The Test API description')
    .setVersion('1.0')
    .addServer('http://')
    .addBearerAuth()
    .addApiKey()
    .setContact('Harmony Alabi', '', 'harmonizerblinks@gmail.com')
    .setTermsOfService('https://github.com/harmonizerblinks/Basic-TypeScript-Api')
    .setLicense('MIT','https://github.com/harmonizerblinks/Basic-TypeScript-Api')
    .addTag('Auth')
    .addTag('Integration')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  
  app.enableVersioning({
    type: VersioningType.URI,
  });
  
  await app.listen(3000);
}
bootstrap();
