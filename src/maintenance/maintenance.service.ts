import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Maintenance, MaintenanceDocument } from './schema/maintenance.schema';
import ModuleDefiner from 'src/utils/module_definer';
import { Model } from 'mongoose';
import { MaintenanceBasicService } from './maintenace.basic.service';
import { CreateMaintenanceDto } from './dto/create-maintenance.dto';

@Injectable()
export class MaintenanceService {
    constructor(
        @InjectModel(Maintenance.name, ModuleDefiner.carDB)
        private readonly maintenanceModel: Model<Maintenance>,

        private readonly maintenanceBasicService: MaintenanceBasicService,
    ){}

    async create(createMaintenanceDto: CreateMaintenanceDto): Promise<MaintenanceDocument>{
        return this.maintenanceBasicService.createMaintenance(createMaintenanceDto);
    }

    async findOne( id: string ) {
        return this.maintenanceModel.find({ carID: id });
    }
}
