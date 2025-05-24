import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add a simple GET route at "/"
  app.getHttpAdapter().get('/', (req, res) => {
    res.send('hello I am setup for this');
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
