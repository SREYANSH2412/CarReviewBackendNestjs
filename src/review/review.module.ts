import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { ReviewBasicService } from './review.basic.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Review, ReviewSchema } from './schema/review.schema';
import ModuleDefiner from 'src/utils/module_definer';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService, ReviewBasicService],
  exports: [ReviewService, ReviewBasicService],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Review.name,
          schema: ReviewSchema,
        }
      ],
      ModuleDefiner.carDB,
    )
  ]
})
export class ReviewModule {}
