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
  Query,
} from '@nestjs/common';
import { eventService } from './event.service';
import { CreateEventDto, oneEventDto } from './Dto/index.dto';
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
      console.log('bod', body);

      let event = await this.appService.create(body);
      // console.log('res', revenue);
      let revenue = null;
      if (event) {
        // console.log('callled');
        body.revenue.event = event.id;
        revenue = await this.appService.createRevenue(body.revenue);
      }
      return {
        status: true,
        data: revenue,
      };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Get('/all')
  @HttpCode(HttpStatus.OK)
  async allEvents() {
    try {
      let event = await this.appService.allEvents();
      // console.log('res', revenue);

      return {
        status: true,
        data: event,
      };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }


  async getAdminEvents () {
    try {
      
      let event = await this.appService.findAdminevetns();
      // console.log('res', revenue);

      return {
        status: true,
        data: event,
      };
      

    }catch (error) {
      this.logger.error(error);
      throw error;
    }
  }



  @Get('/id')
  @HttpCode(HttpStatus.OK)
  async GetByID(@Query() q: oneEventDto) {
    try {
      let event = await this.appService.findById(q.id);
      // console.log('res', revenue);

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
