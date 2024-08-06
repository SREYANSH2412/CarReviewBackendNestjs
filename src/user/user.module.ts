import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserBasicService } from './user.basic.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Transaction, TransactionSchema } from 'src/transaction/schema/transaction.schema';
import ModuleDefiner from 'src/utils/module_definer';

@Module({
  controllers: [UserController],
  providers: [UserService, UserBasicService],
  exports: [UserService, UserBasicService],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Transaction.name,
          schema: TransactionSchema,
        },
      ],
      ModuleDefiner.carDB,
    )
  ]
})
export class UserModule {}
