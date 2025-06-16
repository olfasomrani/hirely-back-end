import { Test, TestingModule } from '@nestjs/testing';
import { DomainEtudeController } from './domain-etude.controller';

describe('DomainEtudeController', () => {
  let controller: DomainEtudeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DomainEtudeController],
    }).compile();

    controller = module.get<DomainEtudeController>(DomainEtudeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
