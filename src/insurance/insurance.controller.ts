import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
import { CreateInsuranceDto } from './dto/create-insurance.dto';
import { InsuranceService } from './insurance.service';

@Controller('insurance')
export class InsuranceController {
    constructor (private readonly insuranceService: InsuranceService) {}

    @Post()
    create(@Body() createInsuranceDto: CreateInsuranceDto){
        return this.insuranceService.create(createInsuranceDto);
    }
}
