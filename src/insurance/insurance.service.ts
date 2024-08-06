import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Insurance, InsuranceDocument } from './schema/insurance.schema';
import ModuleDefiner from 'src/utils/module_definer';
import { Model } from 'mongoose';
import { InsuranceBasicService } from './insurance.basic.service';
import { CreateInsuranceDto } from './dto/create-insurance.dto';

@Injectable()
export class InsuranceService {
    constructor(
        @InjectModel(Insurance.name, ModuleDefiner.carDB)
        private readonly insuranceModel: Model<Insurance>,

        private readonly insuranceBasicService: InsuranceBasicService,
    ){}

    async create(createInsuranceDto: CreateInsuranceDto): Promise<InsuranceDocument>{
        return this.insuranceBasicService.createInsurance(createInsuranceDto);
    }
}
