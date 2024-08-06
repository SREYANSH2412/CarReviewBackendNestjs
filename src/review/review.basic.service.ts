import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from 'src/helpers/crud';
import { Review, ReviewDocument } from './schema/review.schema';
import ModuleDefiner from 'src/utils/module_definer';
import { CreateReviewDto } from './dto/create-review.dto';
import { plainToInstance } from 'class-transformer';


@Injectable()
export class ReviewBasicService extends GenericService<ReviewDocument> {
  constructor(
    @InjectModel(Review.name, ModuleDefiner.carDB)
    model: Model<ReviewDocument>,
  ) {
    super(model);
  }

  async createReview(createReviewDto: CreateReviewDto): Promise<ReviewDocument> {
    const review = plainToInstance(Review, createReviewDto);
    return this.create(review as ReviewDocument);
  }
}
