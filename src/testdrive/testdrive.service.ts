import { Injectable } from '@nestjs/common';
import { TestdriveBasicService } from './testdrive.basic.service';
import { CreateTestdriveDto } from './dto/create-testdrive.dto';
import { Testdrive, TestdriveDocument } from './schema/testdrive.schema';
import { InjectModel } from '@nestjs/mongoose';
import ModuleDefiner from 'src/utils/module_definer';
import { Model } from 'mongoose';
import { UpdateTestdriveDto } from './dto/update-testdrive.dto';

@Injectable()
export class TestdriveService {
  constructor(
    @InjectModel(Testdrive.name, ModuleDefiner.carDB)
    private readonly testdriveModel: Model<TestdriveDocument>,

    private readonly testdriveBasicService: TestdriveBasicService,
  ) {}

  async createTestdrive(
    createTestdriveDto: CreateTestdriveDto,
  ): Promise<TestdriveDocument> {
    try {
      return this.testdriveBasicService.createTestdrive(createTestdriveDto);
    } catch (e) {
      console.log(e);
    }
  }

  async findbyUser(id: string) {
    try {
      return this.testdriveModel.find({ userID: id });
    } catch (e) {
      console.log(e);
    }
  }

  async findbyCar(id: string) {
    try {
      return this.testdriveModel.find({ carID: id });
    } catch (e) {
      console.log(e);
    }
  }

  async remove(id: string) {
    return this.testdriveModel.findByIdAndDelete(id);
  }

  async updateDate(id: string, updateTestdriveDto: UpdateTestdriveDto) {
    try {
      return this.testdriveModel.findByIdAndUpdate(id, updateTestdriveDto, {
        new: true,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async findforCarnUser(id1: string, id2: string) {
    return this.testdriveModel.find({ carID: id1, userID: id2 });
  }
}
