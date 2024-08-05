import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from 'src/helpers/crud';
import { Favorite, FavoriteDocument } from './schema/favorite.schema';
import ModuleDefiner from 'src/utils/module_definer';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { plainToInstance } from 'class-transformer';


@Injectable()
export class FavoriteBasicService extends GenericService<FavoriteDocument> {
  constructor(
    @InjectModel(Favorite.name, ModuleDefiner.carDB)
    model: Model<FavoriteDocument>,
  ) {
    super(model);
  }

  async createFavorite(createDealerDto: CreateFavoriteDto): Promise<FavoriteDocument> {
    const favorite = plainToInstance(Favorite, createDealerDto);
    return this.create(favorite as FavoriteDocument);
  }
}
