import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    Name: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsNumber()
    @IsNotEmpty()
    phone: number;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString({each: true})
    @IsOptional()
    userprefrences: string[];
}