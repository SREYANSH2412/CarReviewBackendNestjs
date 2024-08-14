import { IsNotEmpty, IsString } from "class-validator";

export class LoginDealer {
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}