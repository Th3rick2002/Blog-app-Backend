import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      logLevels: ['log', 'debug', 'warn', 'error', 'fatal', 'verbose'],
    }),
  });

  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api/v1/');

  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(configService.get('APP_PORT') ?? 3000);
}
bootstrap();
