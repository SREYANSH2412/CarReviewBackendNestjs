import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Review, ReviewDocument } from './schema/review.schema';
import ModuleDefiner from 'src/utils/module_definer';
import { Model } from 'mongoose';
import { ReviewBasicService } from './review.basic.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewService {
    constructor(
        @InjectModel(Review.name, ModuleDefiner.carDB)
        private readonly reviewModel: Model<ReviewDocument>,

        private readonly reviewBasicService: ReviewBasicService,
    ){}

    async create(createReviewDto: CreateReviewDto): Promise<ReviewDocument>{
        return this.reviewBasicService.createReview(createReviewDto);
    }

    async updateReview(id: string, updateReviewDto: UpdateReviewDto): Promise<ReviewDocument>{
        try{
            return this.reviewModel.findByIdAndUpdate(
                id,
                { ...updateReviewDto, updated_at: new Date() },
                { new: true },
            );
        }
        catch(e){
            console.log(e);
        }
    }

    async removeReview(id: string): Promise<ReviewDocument>{
        try{return this.reviewModel.findByIdAndDelete(id);}
        catch(e){console.log(e);}
        
    }

    async findforUser(id: string){
        return this.reviewModel.find({ userID: id });
    }

    async findforCar(id: string){
        return this.reviewModel.find({ carID: id });
    }
}
