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
import { UpdateInsuranceDto } from './dto/update-insurance.dto';

@Controller('insurance')
export class InsuranceController {
    constructor (private readonly insuranceService: InsuranceService) {}

    @Post()
    create(@Body() createInsuranceDto: CreateInsuranceDto){
        return this.insuranceService.create(createInsuranceDto);
    }

    @Patch('updateInsurance/:id')
    updateInsurance(@Param('id') id: string, @Body() updateInsuranceDto: UpdateInsuranceDto){
        return this.insuranceService.updateInsurance(id, updateInsuranceDto);
    }

    @Get('get-latest-insurance-by-car/:id')
    getLatestInsuranceByCar(@Param('id') id: string){
        return this.insuranceService.getLatestInsuranceByCar(id);
    }
}
