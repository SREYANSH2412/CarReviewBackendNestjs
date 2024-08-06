import { IsDate, IsMongoId, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTestdriveDto{
    @ApiProperty({description: 'Testdrive name'})
    @IsMongoId()
    @IsNotEmpty()
    userID: string;

    @IsMongoId()
    @IsNotEmpty()
    carID: string;

    @IsMongoId()
    @IsNotEmpty()
    dealerID: string;

    @IsDate()
    @IsNotEmpty()
    scheduled_date: Date;
}