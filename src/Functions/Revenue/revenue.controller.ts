import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { revenueService } from './revenue.service';
import { CreateRevenueDto } from './Dto/index.dto';

@Controller('events')
export class marqeesController {
  constructor(private readonly appService: revenueService) {}

  @Post('/create')
  create(@Body() body: CreateRevenueDto) {
    return this.appService.create(body);
  }
}
