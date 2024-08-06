import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from 'src/helpers/crud';
import { Transaction, TransactionDocument } from './schema/transaction.schema';
import ModuleDefiner from 'src/utils/module_definer';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { plainToInstance } from 'class-transformer';


@Injectable()
export class TransactionBasicService extends GenericService<TransactionDocument> {
  constructor(
    @InjectModel(Transaction.name, ModuleDefiner.carDB)
    model: Model<TransactionDocument>,
  ) {
    super(model);
  }

  async createTransaction(createTransactionDto: CreateTransactionDto): Promise<TransactionDocument> {
    const transaction = plainToInstance(Transaction, createTransactionDto);
    return this.create(transaction as TransactionDocument);
  }
}
