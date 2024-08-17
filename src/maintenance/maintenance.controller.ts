import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';

import { CreateMaintenanceDto } from './dto/create-maintenance.dto';
import { MaintenanceService } from './maintenance.service';

@Controller('maintenance')
export class MaintenanceController {
    constructor (private readonly maintenanceService: MaintenanceService) {}

    @Post()
    create(@Body() createMaintenanceDto: CreateMaintenanceDto){
        return this.maintenanceService.create(createMaintenanceDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.maintenanceService.findOne(id);
    }
}
