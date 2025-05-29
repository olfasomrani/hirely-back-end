import { Test, TestingModule } from '@nestjs/testing';
import { LangSkillsService } from './lang-skills.service';

describe('LangSkillsService', () => {
  let service: LangSkillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LangSkillsService],
    }).compile();

    service = module.get<LangSkillsService>(LangSkillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
