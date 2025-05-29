import { Module } from '@nestjs/common';
import { LangSkillsService } from './lang-skills.service';
import { LangSkillsController } from './lang-skills.controller';

@Module({
  providers: [LangSkillsService],
  controllers: [LangSkillsController]
})
export class LangSkillsModule {}
