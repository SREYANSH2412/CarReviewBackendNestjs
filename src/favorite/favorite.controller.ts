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


@Controller('favorite')
export class FavoriteController {
    constructor(private readonly favoriteService: FavoriteService){}

    @Post()
    create(@Body() createFavoriteDto: CreateFavoriteDto){
        return this.favoriteService.create(createFavoriteDto);
    }
}
