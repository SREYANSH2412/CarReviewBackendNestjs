import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { CreateDealerDto } from './dto/create-dealer.dto';
import { DealerService } from './dealer.service';
import { LoginDealer } from './dto/login.dto';

@Controller('dealer')
export class DealerController {
    constructor (private readonly dealerService: DealerService) {}

    @Post()
    create(@Body() createDealerDto: CreateDealerDto){
        return this.dealerService.create(createDealerDto);
    }

    @Post('login')
    login(@Body() loginDealer: LoginDealer){
        return this.dealerService.login(loginDealer);
    }

    @Get('fetch-cars/:id')
    fetchCars(@Param('id') id:string){
        return this.dealerService.fetchCars(id);
    }
}
