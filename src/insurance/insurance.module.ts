import { Module } from '@nestjs/common';
import { InsuranceController } from './insurance.controller';
import { InsuranceService } from './insurance.service';
import { InsuranceBasicService } from './insurance.basic.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Insurance, InsuranceSchema } from './schema/insurance.schema';
import ModuleDefiner from 'src/utils/module_definer';

@Module({
  controllers: [InsuranceController],
  providers: [InsuranceService, InsuranceBasicService],
  exports: [InsuranceBasicService, InsuranceService],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Insurance.name,
          schema: InsuranceSchema,
        }
      ],
      ModuleDefiner.carDB,
    )
  ]
})
export class InsuranceModule {}
