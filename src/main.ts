import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync(
      '/etc/letsencrypt/live/chizlab.duckdns.org/privkey.pem',
    ),
    cert: fs.readFileSync(
      '/etc/letsencrypt/live/chizlab.duckdns.org/fullchain.pem',
    ),
  };

  const app = await NestFactory.create(AppModule, { httpsOptions });
  const PORT = process.env.PORT ?? 3000;

  console.log(`Server is running on ${PORT}`);

  await app.listen(PORT);
}
bootstrap();
