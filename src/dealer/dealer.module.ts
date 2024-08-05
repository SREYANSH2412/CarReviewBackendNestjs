import { Module } from '@nestjs/common';
import { DealerController } from './dealer.controller';
import { DealerService } from './dealer.service';
import { DealerBasicService } from './dealer.basic.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Dealer, DealerSchema } from './schema/dealer.schema';
import ModuleDefiner from 'src/utils/module_definer';

@Module({
  controllers: [DealerController],
  providers: [DealerService, DealerBasicService],
  exports: [DealerService, DealerBasicService],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Dealer.name,
          schema: DealerSchema,
        }
      ],
      ModuleDefiner.carDB,
    )
  ]
})
export class DealerModule {}
