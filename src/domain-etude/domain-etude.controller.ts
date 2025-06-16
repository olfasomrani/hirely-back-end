import { Controller, Get } from '@nestjs/common';
import { DomainEtudeService } from './domain-etude.service';

@Controller('domain-etude')
export class DomainEtudeController {
  constructor(private readonly domainService: DomainEtudeService) {}
  @Get()
  findAll() {
    return this.domainService.findAll();
  }
}
