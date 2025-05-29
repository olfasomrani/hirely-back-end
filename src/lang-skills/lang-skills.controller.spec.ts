import { Test, TestingModule } from '@nestjs/testing';
import { LangSkillsController } from './lang-skills.controller';

describe('LangSkillsController', () => {
  let controller: LangSkillsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LangSkillsController],
    }).compile();

    controller = module.get<LangSkillsController>(LangSkillsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
