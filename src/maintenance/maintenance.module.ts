import { Module } from '@nestjs/common';
import { MaintenanceController } from './maintenance.controller';
import { MaintenanceService } from './maintenance.service';
import { MaintenanceBasicService } from './maintenace.basic.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Maintenance, MaintenanceSchema } from './schema/maintenance.schema';
import ModuleDefiner from 'src/utils/module_definer';

@Module({
  controllers: [MaintenanceController],
  providers: [MaintenanceService, MaintenanceBasicService],
  exports: [MaintenanceService, MaintenanceBasicService, MongooseModule.forFeature(
    [
      {
        name: Maintenance.name,
        schema: MaintenanceSchema,
      }
    ],
    ModuleDefiner.carDB,
  )],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Maintenance.name,
          schema: MaintenanceSchema,
        }
      ],
      ModuleDefiner.carDB,
    )
  ]
})
export class MaintenanceModule {}
