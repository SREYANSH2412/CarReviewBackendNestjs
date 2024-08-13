import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { CarDocument, Car } from './schema/car.schema';
import { InjectModel } from '@nestjs/mongoose';
import ModuleDefiner from 'src/utils/module_definer';
import mongoose, { Model } from 'mongoose';
import { CarBasicService } from './car.basic.service';

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

    async findOne(getId: {id: string}){
        const gid = getId.id;
        return this.carModel.findOne({ _id : gid });
    }

    async findAll(): Promise<Car []>{
        return this.carModel.find().exec();
    }
}