import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/models/event.modal';
import { Marquees } from 'src/models/marque.modal';
import { Repository } from 'typeorm';


@Injectable()
export class marqeesService {
    constructor(
        @InjectRepository(Marquees)
        private marqeesRepository: Repository<Marquees>,
      ) {}
      async create(marqeeDto: Partial<Marquees>) {
    
        return await this.marqeesRepository.save(marqeeDto);
      }
    
}
