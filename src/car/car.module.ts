import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { CarBasicService } from './car.basic.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from './schema/car.schema';
import ModuleDefiner from 'src/utils/module_definer';
import { MaintenanceModule } from 'src/maintenance/maintenance.module';
import { InsuranceModule } from 'src/insurance/insurance.module';

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
    ),
    MaintenanceModule,
    InsuranceModule,
  ],
  exports: [CarService, CarBasicService, MongooseModule.forFeature(
    [
      {
        name: Car.name,
        schema: CarSchema,
      }
    ],
    ModuleDefiner.carDB,
  )],
})
export class CarModule {}
