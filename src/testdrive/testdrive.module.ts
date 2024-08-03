import { Module } from '@nestjs/common';
import { TestdriveController } from './testdrive.controller';
import { TestdriveService } from './testdrive.service';

@Module({
  controllers: [TestdriveController],
  providers: [TestdriveService]
})
export class TestdriveModule {}
