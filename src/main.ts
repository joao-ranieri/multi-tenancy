import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get('server.port');
  
  
  await app.listen(port).then(() => {
    const logger = new Logger('Application');
    logger.log(`Aplicação executando na porta ${port}`);
  });
}
bootstrap();
