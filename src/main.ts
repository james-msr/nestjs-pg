import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe, ClassSerializerInterceptor } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as soap from 'soap';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  const config = new DocumentBuilder()
    .setTitle('CRUD example')
    .setDescription('The CRUD API description')
    .setVersion('1.0')
    .addTag('CRUD')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const service = {
    BMI_Service: {
      BMI_Port: {
        calculateBMI(args) {
          //console.log(Date().getFullYear())
          const year = new Date().getFullYear();
          const n = args.weight / (args.height * args.height);
          console.log(n);
          return { bmi: n };
        }
      }
    }
  };
  const xml = fs.readFileSync('src/wsdls/bmicalculator.wsdl', 'utf8');
  const server = await app.listen(3000);
  await soap.listen(server, '/bmicalculator', service, xml);
}
bootstrap();
