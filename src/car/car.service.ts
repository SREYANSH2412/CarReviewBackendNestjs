import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { CarDocument, Car } from './schema/car.schema';
import { InjectModel } from '@nestjs/mongoose';
import ModuleDefiner from 'src/utils/module_definer';
import mongoose, { Model } from 'mongoose';
import { CarBasicService } from './car.basic.service';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarService {
    constructor(
        @InjectModel(Car.name, ModuleDefiner.carDB)
        private carModel: Model<CarDocument>,

        private readonly carBasicService: CarBasicService,
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
}