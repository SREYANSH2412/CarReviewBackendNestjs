import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { TransactionBasicService } from './transaction.basic.service';
import { MongooseModule } from '@nestjs/mongoose';
import ModuleDefiner from 'src/utils/module_definer';
import { Transaction, TransactionSchema } from './schema/transaction.schema';

@Module({
  controllers: [TransactionController],
  providers: [TransactionService, TransactionBasicService],
  exports: [TransactionService, TransactionBasicService],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Transaction.name,
          schema: TransactionSchema,
        },
      ],
      ModuleDefiner.carDB
    )
  ]
})
export class TransactionModule {}
