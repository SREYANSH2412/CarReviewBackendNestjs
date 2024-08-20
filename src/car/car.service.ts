import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { CarDocument, Car } from './schema/car.schema';
import { InjectModel } from '@nestjs/mongoose';
import ModuleDefiner from 'src/utils/module_definer';
import mongoose, { Model } from 'mongoose';
import { CarBasicService } from './car.basic.service';
import { UpdateCarDto } from './dto/update-car.dto';
import { FavoriteService } from 'src/favorite/favorite.service';
import { MaintenanceService } from 'src/maintenance/maintenance.service';
import { InsuranceService } from 'src/insurance/insurance.service';

@Injectable()
export class CarService {
    constructor(
        @InjectModel(Car.name, ModuleDefiner.carDB)
        private carModel: Model<CarDocument>,

        private readonly carBasicService: CarBasicService,

        private readonly maintenanceService: MaintenanceService,

        private readonly insuranceService: InsuranceService,
    ) {}

    async create (createCarDto: CreateCarDto): Promise<Car>{
        return this.carBasicService.createCar(createCarDto);
    }

    // async findOne(getId: {id: string}){
    async findOne(getId: string){
        // const gid = getId.id;
        const fone = await this.carModel.findOne({ _id: getId }).exec();

        if (fone){
            return fone;
        } 

        return 'Not found';
    }

    async findCarMaintenance(id: string){
        const fone = await this.carModel.findOne({ _id: id }).exec();
        const maint = await this.maintenanceService.findOne(id);

        if (fone){
            return {
                car: fone,
                maintenance: maint,
            }
        }
    }

    async findAll(): Promise<Car []>{
        return this.carModel.find().exec();
    }

    async update(id: string, updateCarDto: UpdateCarDto){
        return this.carModel.findByIdAndUpdate(
            id,
            { ...updateCarDto, updated_at: new Date() },
            { new: true, },
        );
    }

    async delete(id: string){
        return this.carModel.findByIdAndDelete(id);
    }

    async fetchInsurance(id: string){
        return this.insuranceService.getLatestInsuranceByCar(id);
    }
}