import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()); // global validation decorator

  // Swagger API
  const config = new DocumentBuilder()
  .setTitle('Nest Api')
  .setDescription('Dope Api lol')
  .setVersion('1.0')
  .build();

  // Tie in app and swagger config
  const document = SwaggerModule.createDocument(app, config)

  // complete setup
  SwaggerModule.setup('/', app, document);

  // npm run start:dev
  await app.listen(3000); // listening on localhost:3000
}
bootstrap();
