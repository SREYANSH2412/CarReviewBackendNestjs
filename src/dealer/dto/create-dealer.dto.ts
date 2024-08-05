import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateDealerDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    location: string;

    @IsNumber()
    @IsNotEmpty()
    phone: number;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    @IsOptional()
    images: string;
}