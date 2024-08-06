import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from 'src/helpers/crud';
import { Testdrive, TestdriveDocument } from './schema/testdrive.schema';
import ModuleDefiner from 'src/utils/module_definer';
import { CreateTestdriveDto } from './dto/create-testdrive.dto';
import { plainToInstance } from 'class-transformer';


@Injectable()
export class TestdriveBasicService extends GenericService<TestdriveDocument> {
  constructor(
    @InjectModel(Testdrive.name, ModuleDefiner.carDB)
    model: Model<TestdriveDocument>,
  ) {
    super(model);
  }

  async createTestdrive(createTestdriveDto: CreateTestdriveDto): Promise<TestdriveDocument> {
    const testdrive = plainToInstance(Testdrive, createTestdriveDto);
    return this.create(testdrive as TestdriveDocument);
  }
}
