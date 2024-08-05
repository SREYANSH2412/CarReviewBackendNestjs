import { IsArray, IsBoolean, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCarDto   {
    @IsString()
    @IsNotEmpty()
    make: string;

    @IsString()
    @IsNotEmpty()
    model: string;

    @IsString()
    @IsNotEmpty()
    typeofcar: string;

    @IsNumber()
    @IsNotEmpty()
    year: number;

    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    specification: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsArray()
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