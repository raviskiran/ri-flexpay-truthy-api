import { Test, TestingModule } from '@nestjs/testing';
import { CardholderService } from './cardholder.service';

describe('CardholderService', () => {
  let service: CardholderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardholderService]
    }).compile();

    service = module.get<CardholderService>(CardholderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
