import { Test, TestingModule } from '@nestjs/testing';
import { CardholderController } from './cardholder.controller';

describe('CardholderController', () => {
  let controller: CardholderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardholderController]
    }).compile();

    controller = module.get<CardholderController>(CardholderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
