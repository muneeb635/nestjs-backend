import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Revenue } from 'src/models/Revenue.modal';
import { Event } from 'src/models/event.modal';
import { Marquees } from 'src/models/marque.modal';
import { Repository } from 'typeorm';


@Injectable()
export class revenueService {
    constructor(
        @InjectRepository(Revenue)
        private revenueRepository: Repository<Revenue>,
      ) {}
      async create(revenueDto: Partial<Revenue>) {
    
        return await this.revenueRepository.save(revenueDto);
      }
    
}
