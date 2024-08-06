import { Injectable } from '@nestjs/common';
import { TransactionBasicService } from './transaction.basic.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionService {
    constructor(
        private readonly transactionBasicService: TransactionBasicService,
    ) {}

    async createTransaction(createTransactionDto: CreateTransactionDto){
        return this.transactionBasicService.createTransaction(createTransactionDto)
    }
}
