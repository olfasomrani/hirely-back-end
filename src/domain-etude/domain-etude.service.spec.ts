import { Test, TestingModule } from '@nestjs/testing';
import { DomainEtudeService } from './domain-etude.service';

describe('DomainEtudeService', () => {
  let service: DomainEtudeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DomainEtudeService],
    }).compile();

    service = module.get<DomainEtudeService>(DomainEtudeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
