import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UsePipes,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { marqeesService } from './marqees.service';
import { CreateMarqueDto } from './Dto/index.dto';
import { InvalidRequestValidator } from 'src/Pipes/invalidate-request';

@Controller('marque')
export class revenueController {
  constructor(private readonly appService: marqeesService) {}
  protected readonly logger = new Logger(this.constructor.name);

  @Post('/create')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new InvalidRequestValidator())
 async create(@Body() body: CreateMarqueDto) {
    try {
        const marque = await this.appService.create(body);

        return {
            status:true,
            data:marque
        }
        
    } catch (error) {
        this.logger.error(error);
        throw error
    }
  }

  @Get('/all')
  @HttpCode(HttpStatus.OK)
 async getAll() {
    try {
        const marque = await this.appService.getAll();

        return {
            status:true,
            data:marque
        }
        
    } catch (error) {
        this.logger.error(error);
        throw error
    }
  }
}
