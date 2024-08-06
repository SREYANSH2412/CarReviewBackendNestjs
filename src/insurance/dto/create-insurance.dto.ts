import { IsDate, IsMongoId, IsNotEmpty, IsString } from "class-validator";

export class CreateInsuranceDto {
    @IsMongoId()
    @IsNotEmpty()
    carID: string;

    @IsString()
    @IsNotEmpty()
    provider: string;

    @IsString()
    @IsNotEmpty()
    policy_no: string;

    @IsString()
    @IsNotEmpty()
    coveragedetails: string;

    @IsDate()
    @IsNotEmpty()
    expiration_date: Date;
}