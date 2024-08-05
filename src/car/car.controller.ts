import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('car')
export class CarController {
    constructor (private readonly carService: CarService) {}

    @Post()
    create(@Body() createCarDto: CreateCarDto) {
        return this.carService.create(createCarDto)
    }
}
