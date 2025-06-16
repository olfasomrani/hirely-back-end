import { Module } from '@nestjs/common';
import { DomainEtudeService } from './domain-etude.service';
import { DomainEtudeController } from './domain-etude.controller';

@Module({
  providers: [DomainEtudeService],
  controllers: [DomainEtudeController]
})
export class DomainEtudeModule {}
