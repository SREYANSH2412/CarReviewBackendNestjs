import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Favorite, FavoriteDocument } from './schema/favorite.schema';
import ModuleDefiner from 'src/utils/module_definer';
import { Model } from 'mongoose';
import { FavoriteBasicService } from './favorite.basic.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';

@Injectable()
export class FavoriteService {
    constructor(
        @InjectModel(Favorite.name, ModuleDefiner.carDB)
        private favoriteModel: Model<FavoriteDocument>,

        private readonly favoriteBasicService: FavoriteBasicService,
    ){}

    async create(createFavoriteDto: CreateFavoriteDto): Promise<FavoriteDocument> {
        return this.favoriteBasicService.createFavorite(createFavoriteDto);
    }

    async updateFavCar(id: string, updateFavoriteDto: UpdateFavoriteDto){
        try{
            return this.favoriteModel.findByIdAndUpdate(
                id,
                { ...updateFavoriteDto, updated_at: new Date() },
                { new: true, },
            )
        }
        catch(e){
            console.log(e);
        }
    }

    async getFavCar( id: string ){
        return this.favoriteModel.find({ userID: id });
    }
}
