import { Test, TestingModule } from '@nestjs/testing';
import { TestdriveService } from './testdrive.service';

describe('TestdriveService', () => {
  let service: TestdriveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestdriveService],
    }).compile();

    service = module.get<TestdriveService>(TestdriveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
