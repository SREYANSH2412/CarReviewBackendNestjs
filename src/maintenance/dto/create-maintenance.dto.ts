import { IsDate, IsMongoId, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMaintenanceDto{
    @IsMongoId()
    @IsNotEmpty()
    carID: string;

    @IsNotEmpty()
    service_date: Date;

    @IsString()
    @IsNotEmpty()
    details: string;

    @IsNumber()
    @IsNotEmpty()
    cost: number;
}