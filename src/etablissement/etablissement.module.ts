import { Module } from '@nestjs/common';
import { EtablissementService } from './etablissement.service';
import { EtablissementController } from './etablissement.controller';

@Module({
  providers: [EtablissementService],
  controllers: [EtablissementController]
})
export class EtablissementModule {}
