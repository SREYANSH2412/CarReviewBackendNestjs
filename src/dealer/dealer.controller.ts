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

@Controller('dealer')
export class DealerController {
    constructor (private readonly dealerService: DealerService) {}

    @Post()
    create(@Body() createDealerDto: CreateDealerDto){
        return this.dealerService.create(createDealerDto);
    }
}
