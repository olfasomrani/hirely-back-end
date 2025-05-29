import { Test, TestingModule } from '@nestjs/testing';
import { PersoSkillsController } from './perso-skills.controller';

describe('PersoSkillsController', () => {
  let controller: PersoSkillsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersoSkillsController],
    }).compile();

    controller = module.get<PersoSkillsController>(PersoSkillsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
