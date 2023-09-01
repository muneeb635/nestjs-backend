import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UsePipes,
  Logger,
} from '@nestjs/common';
import { eventService } from './event.service';
import { CreateEventDto } from './Dto/index.dto';
import { InvalidRequestValidator } from 'src/Pipes/invalidate-request';

@Controller('events')
export class eventController {
  constructor(private readonly appService: eventService) {}
  protected readonly logger = new Logger(this.constructor.name);

  @Post('/create')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new InvalidRequestValidator())
  async create(@Body() body: CreateEventDto) {
    try {
      let revenue = await this.appService.createRevenue(body.revenue);
      // console.log('res', revenue);
      let event = null;
      if (revenue) {
        // console.log('callled');

        event = await this.appService.create(body);
      }
      return {
        status: true,
        data: event,
      };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
