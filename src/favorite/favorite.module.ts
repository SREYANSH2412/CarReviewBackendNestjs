import { Module } from '@nestjs/common';
import { FavoriteController } from './favorite.controller';
import { FavoriteService } from './favorite.service';
import { FavoriteBasicService } from './favorite.basic.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Favorite, FavoriteSchema } from './schema/favorite.schema';
import ModuleDefiner from 'src/utils/module_definer';

@Module({
  controllers: [FavoriteController],
  providers: [FavoriteService, FavoriteBasicService],
  exports: [FavoriteService, FavoriteBasicService, MongooseModule.forFeature(
    [
      {
        name: Favorite.name,
        schema: FavoriteSchema,
      }
    ],
    ModuleDefiner.carDB,
  )],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Favorite.name,
          schema: FavoriteSchema,
        }
      ],
      ModuleDefiner.carDB,
    )
  ]
})
export class FavoriteModule {}
