import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Request,
  } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('car')
export class CarController {
    constructor (private readonly carService: CarService) {}

    @Post()
    create(@Body() createCarDto: CreateCarDto) {
        return this.carService.create(createCarDto)
    }

    @Get(':id')
    // findOne(@Body() getId: {id: string}){
    findOne(@Param('id') id: string){
        return this.carService.findOne(id);
    }

    @Get('findall')
    findAll(){
        return this.carService.findAll();
    }

    @Get('get-maintenance/:id')
    findCarMaintenance(@Param('id') id: string){
        return this.carService.findCarMaintenance(id);
    }
    
    @Patch('update/:id')
    update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto){
        return this.carService.update(id, updateCarDto);
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return this.carService.delete(id);
    }
}
