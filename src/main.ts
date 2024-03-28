import { NestFactory } from '@nestjs/core';
import { MongoModule } from './mongo.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(MongoModule,{
    transport: Transport.TCP,
    options: {
        port: 3001
    }
    });
    await app.listen();
}
bootstrap();
