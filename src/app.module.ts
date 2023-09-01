import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'nestjs-dotenv';
import * as os from 'os';
import { configService } from './config/config.service';
import * as dotenv from 'dotenv';
import { Event } from './models/event.modal';
import { Marquees } from './models/marque.modal';
import { Revenue } from './models/Revenue.modal';
import { eventController } from './Functions/Events/event.controller';
import { revenueController } from './Functions/Marqees/marqees.controller';
import { marqeesController } from './Functions/Revenue/revenue.controller';
import { eventService } from './Functions/Events/event.service';
import { revenueService } from './Functions/Revenue/revenue.service';
import { marqeesService } from './Functions/Marqees/marqees.service';

dotenv.config();
@Module({
  imports: [
    MulterModule.register({
      dest: os.tmpdir(),
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([Event]),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([Marquees]),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([Revenue]),
  ],
  controllers: [eventController, revenueController, marqeesController],
  providers: [eventService, revenueService, marqeesService],
})
export class AppModule {}
