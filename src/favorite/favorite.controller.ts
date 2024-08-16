import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';


@Controller('favorite')
export class FavoriteController {
    constructor(private readonly favoriteService: FavoriteService){}

    @Post()
    create(@Body() createFavoriteDto: CreateFavoriteDto){
        return this.favoriteService.create(createFavoriteDto);
    }

    @Patch('updateFavCar/:id')
    updateFavCar(@Param('id') id: string, @Body() updateFavoriteDto: UpdateFavoriteDto){
        return this.favoriteService.updateFavCar(id, updateFavoriteDto);
    }

    @Get(':id')
    getFavCar(@Param('id') id: string){
        return this.favoriteService.getFavCar(id);
    }
}
