import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Insurance, InsuranceDocument } from './schema/insurance.schema';
import ModuleDefiner from 'src/utils/module_definer';
import { Model } from 'mongoose';
import { InsuranceBasicService } from './insurance.basic.service';
import { CreateInsuranceDto } from './dto/create-insurance.dto';
import { UpdateInsuranceDto } from './dto/update-insurance.dto';

@Injectable()
export class InsuranceService {
    constructor(
        @InjectModel(Insurance.name, ModuleDefiner.carDB)
        private insuranceModel: Model<InsuranceDocument>,

        private readonly insuranceBasicService: InsuranceBasicService,
    ){}

    async create(createInsuranceDto: CreateInsuranceDto): Promise<InsuranceDocument>{
        return this.insuranceBasicService.createInsurance(createInsuranceDto);
    }

    async updateInsurance(id: string, updateInsuranceDto: UpdateInsuranceDto){
        try{
            return this.insuranceModel.findByIdAndUpdate(
                id,
                { ...updateInsuranceDto, updated_at: new Date() },
                { new: true, },
            );
        } catch(e){
            console.log(e);
        }
    }

    async getLatestInsuranceByCar(id: string){
        return this.insuranceModel.findOne({ carID: id });
    }
}
