import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dealer, DealerDocument } from './schema/dealer.schema';
import ModuleDefiner from 'src/utils/module_definer';
import { Model } from 'mongoose';
import { DealerBasicService } from './dealer.basic.service';
import { CreateDealerDto } from './dto/create-dealer.dto';

@Injectable()
export class DealerService {
    constructor(
        @InjectModel(Dealer.name, ModuleDefiner.carDB)
        private dealerModel: Model<DealerDocument>,

        private readonly dealerBasicService: DealerBasicService,
    ) {}

    async create(createDealerDto: CreateDealerDto): Promise<DealerDocument> {
        return this.dealerBasicService.createDealer(createDealerDto);
    }
}
