import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Env } from './Env';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));
  const configdoc = new DocumentBuilder()
    .setTitle('Api para Gerenciamento da ASA.')
    .setDescription('')
    .setVersion('1.0')
    .addTag('Api users')
    .build();
    const document = SwaggerModule.createDocument(app, configdoc);
    SwaggerModule.setup('api', app, document);


  const configService = app.get<ConfigService<Env, true>>(ConfigService);
  const port = configService.get('PORT', { infer: true });

  await app.listen(port);
}
bootstrap();
  