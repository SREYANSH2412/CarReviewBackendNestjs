import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from 'src/helpers/crud';
import { Insurance, InsuranceDocument } from './schema/insurance.schema';
import ModuleDefiner from 'src/utils/module_definer';
import { CreateInsuranceDto } from './dto/create-insurance.dto';
import { plainToInstance } from 'class-transformer';


@Injectable()
export class InsuranceBasicService extends GenericService<InsuranceDocument> {
  constructor(
    @InjectModel(Insurance.name, ModuleDefiner.carDB)
    model: Model<InsuranceDocument>,
  ) {
    super(model);
  }

  async createInsurance(createInsuranceDto: CreateInsuranceDto): Promise<InsuranceDocument> {
    const insurance = plainToInstance(Insurance, createInsuranceDto);
    return this.create(insurance as InsuranceDocument);
  }
}
