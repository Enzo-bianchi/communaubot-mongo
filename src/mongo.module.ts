import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Search, SearchSchema } from './entities/search';
import { Sector, SectorSchema } from './entities/sector';
import { MongoController } from './mongo.controller';
import { MongoService } from './mongo.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([
      { name: Sector.name, schema: SectorSchema },
      { name: Search.name, schema: SearchSchema },
    ]),
  ],
  controllers: [MongoController],
  providers: [MongoService],
})
export class MongoModule {}
