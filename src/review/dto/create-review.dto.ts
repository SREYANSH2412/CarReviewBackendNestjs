import { IsMongoId, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateReviewDto{
    @IsMongoId()
    @IsNotEmpty()
    userID: string;

    @IsMongoId()
    @IsNotEmpty()
    carID: string;

    @IsNumber()
    @IsNotEmpty()
    rating: number;

    @IsString()
    @IsNotEmpty()
    reviewtext: string;
}