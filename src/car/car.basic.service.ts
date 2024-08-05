import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from 'src/helpers/crud';
import { Car, CarDocument } from './schema/car.schema';
import ModuleDefiner from 'src/utils/module_definer';
import { CreateCarDto } from './dto/create-car.dto';
import { plainToInstance } from 'class-transformer';


@Injectable()
export class CarBasicService extends GenericService<CarDocument> {
  constructor(
    @InjectModel(Car.name, ModuleDefiner.carDB)
    model: Model<CarDocument>,
  ) {
    super(model);
  }

  async createCar(createCarDto: CreateCarDto): Promise<CarDocument> {
    const car = plainToInstance(Car, createCarDto);
    return this.create(car as CarDocument);
  }
}
