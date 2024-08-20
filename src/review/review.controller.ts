import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';

import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
    constructor (private readonly reviewService: ReviewService) {}

    @Post()
    create(@Body() createReviewDto: CreateReviewDto){
        return this.reviewService.create(createReviewDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateReviewDto: CreateReviewDto){
        return this.reviewService.updateReview(id, updateReviewDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.reviewService.removeReview(id);
    }

    @Get('forUser/:id')
    findforUser(@Param('id') id: string){
        return this.reviewService.findforUser(id);
    }

    @Get('forCar/:id')
    findforCar(@Param('id') id: string){
        return this.reviewService.findforCar(id);
    }
}
