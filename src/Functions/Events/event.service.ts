import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Revenue } from 'src/models/Revenue.modal';
import { Event } from 'src/models/event.modal';
import { Repository } from 'typeorm';

@Injectable()
export class eventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
    @InjectRepository(Revenue)
    private revenueRepository: Repository<Revenue>,
  ) {}
  async create(createEventDto: Partial<Event>) {
    return await this.eventRepository.save(createEventDto);
  }

  async createRevenue(createRevenueDto: Partial<Revenue>) {
    return await this.revenueRepository.save(createRevenueDto);
  }
}
