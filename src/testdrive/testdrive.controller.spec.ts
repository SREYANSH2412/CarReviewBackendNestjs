import { Test, TestingModule } from '@nestjs/testing';
import { TestdriveController } from './testdrive.controller';

describe('TestdriveController', () => {
  let controller: TestdriveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestdriveController],
    }).compile();

    controller = module.get<TestdriveController>(TestdriveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
