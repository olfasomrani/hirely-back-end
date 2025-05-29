import { Module } from '@nestjs/common';
import { PersoSkillsService } from './perso-skills.service';
import { PersoSkillsController } from './perso-skills.controller';

@Module({
  providers: [PersoSkillsService],
  controllers: [PersoSkillsController]
})
export class PersoSkillsModule {}
