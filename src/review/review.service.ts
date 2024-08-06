import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Review, ReviewDocument } from './schema/review.schema';
import ModuleDefiner from 'src/utils/module_definer';
import { Model } from 'mongoose';
import { ReviewBasicService } from './review.basic.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
    constructor(
        @InjectModel(Review.name, ModuleDefiner.carDB)
        private readonly reviewModel: Model<Review>,

        private readonly reviewBasicService: ReviewBasicService,
    ){}

    async create(createReviewDto: CreateReviewDto): Promise<ReviewDocument>{
        return this.reviewBasicService.createReview(createReviewDto);
    }
}
