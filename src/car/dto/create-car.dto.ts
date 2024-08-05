import { IsBoolean, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCarDto   {
    @IsString()
    @IsNotEmpty()
    make: String;

    @IsString()
    @IsNotEmpty()
    model: String;

    @IsString()
    @IsNotEmpty()
    typeofcar: String;

    @IsNumber()
    @IsNotEmpty()
    year: number;

    @IsNotEmpty()
    price: Float64Array;

    @IsString()
    @IsNotEmpty()
    specification: String;

    @IsString()
    @IsNotEmpty()
    description: String;

    @IsOptional()
    images: string[];

    @IsNotEmpty()
    @IsMongoId()
    DealerID: string;
    
    @IsBoolean()
    @IsNotEmpty()
    accidental: boolean;

    @IsBoolean()
    @IsNotEmpty()
    sold: boolean;
}