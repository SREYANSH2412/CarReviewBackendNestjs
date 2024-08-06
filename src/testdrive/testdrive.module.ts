import { Module } from '@nestjs/common';
import { TestdriveController } from './testdrive.controller';
import { TestdriveService } from './testdrive.service';
import { TestdriveBasicService } from './testdrive.basic.service';
import ModuleDefiner from 'src/utils/module_definer';
import { MongooseModule } from '@nestjs/mongoose';
import { Testdrive, TestdriveSchema } from './schema/testdrive.schema';

@Module({
  controllers: [TestdriveController],
  providers: [TestdriveService, TestdriveBasicService],
  exports: [TestdriveService, TestdriveBasicService],
  imports:[
    MongooseModule.forFeature(
      [
        {
          name: Testdrive.name,
          schema: TestdriveSchema,
        }
      ],
      ModuleDefiner.carDB
    )
  ]
})
export class TestdriveModule {}
