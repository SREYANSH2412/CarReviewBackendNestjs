import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from 'src/helpers/crud';
import { Dealer, DealerDocument } from './schema/dealer.schema';
import ModuleDefiner from 'src/utils/module_definer';
import { CreateDealerDto } from './dto/create-dealer.dto';
import { plainToInstance } from 'class-transformer';


@Injectable()
export class DealerBasicService extends GenericService<DealerDocument> {
  constructor(
    @InjectModel(Dealer.name, ModuleDefiner.carDB)
    model: Model<DealerDocument>,
  ) {
    super(model);
  }

  async createDealer(createDealerDto: CreateDealerDto): Promise<DealerDocument> {
    const dealer = plainToInstance(Dealer, createDealerDto);
    return this.create(dealer as DealerDocument);
  }
}
