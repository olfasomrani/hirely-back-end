import { Module } from '@nestjs/common';
import { TechSkillsService } from './tech-skills.service';
import { TechSkillsController } from './tech-skills.controller';

@Module({
  providers: [TechSkillsService],
  controllers: [TechSkillsController]
})
export class TechSkillsModule {}
