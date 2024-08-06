import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from 'src/helpers/crud';
import { Maintenance, MaintenanceDocument } from './schema/maintenance.schema';
import ModuleDefiner from 'src/utils/module_definer';
import { CreateMaintenanceDto } from './dto/create-maintenance.dto';
import { plainToInstance } from 'class-transformer';


@Injectable()
export class MaintenanceBasicService extends GenericService<MaintenanceDocument> {
  constructor(
    @InjectModel(Maintenance.name, ModuleDefiner.carDB)
    model: Model<MaintenanceDocument>,
  ) {
    super(model);
  }

  async createMaintenance(createMaintenanceDto: CreateMaintenanceDto): Promise<MaintenanceDocument> {
    const maintenance = plainToInstance(Maintenance, createMaintenanceDto);
    return this.create(maintenance as MaintenanceDocument);
  }
}
