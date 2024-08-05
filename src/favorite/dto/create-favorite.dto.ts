import { IsMongoId, IsNotEmpty } from "class-validator";

export class CreateFavoriteDto {
    @IsMongoId()
    @IsNotEmpty()
    userID: string;

    @IsMongoId({ each: true })
    @IsNotEmpty()
    carID: string[];
}