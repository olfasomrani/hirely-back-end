import { Test, TestingModule } from '@nestjs/testing';
import { PersoSkillsService } from './perso-skills.service';

describe('PersoSkillsService', () => {
  let service: PersoSkillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersoSkillsService],
    }).compile();

    service = module.get<PersoSkillsService>(PersoSkillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
