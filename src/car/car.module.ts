import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { CarBasicService } from './car.basic.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from './schema/car.schema';
import ModuleDefiner from 'src/utils/module_definer';

@Module({
  controllers: [CarController],
  providers: [CarService, CarBasicService],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Car.name,
          schema: CarSchema,
        }
      ],
      ModuleDefiner.carDB,
    )
  ],
  exports: [CarService, CarBasicService],
})
export class CarModule {}
