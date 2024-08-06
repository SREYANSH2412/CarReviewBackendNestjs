import { IsMongoId, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTransactionDto{
    @IsMongoId()
    @IsNotEmpty()
    userID: string;

    @IsMongoId()
    @IsNotEmpty()
    carID: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    paymentmethod: string;

    @IsString()
    @IsNotEmpty()
    status: string;
}