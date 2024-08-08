import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'
import { ConfigService } from '@nestjs/config'
import { GlobalExceptionFilter } from './utils/exception.filter';
import { FirebaseModule } from './firebase/firebase';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true
  });
  const configService = app.get(ConfigService);

  FirebaseModule.init();

  app.enableCors({
    origin: true,
    methods: 'GET,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.set('trust proxy', true);

  app.useGlobalFilters(new GlobalExceptionFilter(app.get(HttpAdapterHost)));

  const port = configService.get<number>('PRODUCTION_PORT');

  await app.listen(port || 3000);
}
bootstrap();
