import { Injectable, NotFoundException } from "@nestjs/common";
import { Model, FilterQuery, Document } from "mongoose";

@Injectable()
export class GenericService<T extends Document> {
    private model: Model<T>;
    constructor(consModel: Model<T>) {
        this.model = consModel;
    }

    async create(createDto: Partial<T>): Promise<T> {
        const created = new this.model(createDto);
        return await created.save();
    }

    async findOne(filter: FilterQuery<T>): Promise<T | null> {
        return await this.model.findOne(filter).exec();
    }

    async find(filter: FilterQuery<T> = {}): Promise<T[]> {
        return await this.model.find(filter).exec();
    }

    async update(id: string, updateDto: Partial<T>): Promise<T> {
        const updated = await this.model
          .findByIdAndUpdate(id, updateDto, { new: true })
          .exec();
        if (!updated) {
          throw new NotFoundException(`Document with ID ${id} not found`);
        }
        return updated;
    }

    async delete(id: string): Promise<T> {
        const deleted = await this.model.findByIdAndDelete(id).exec();
        if (!deleted) {
          throw new NotFoundException(`Document with ID ${id} not found`);
        }
        return deleted;
    }
    
      async count(filter: FilterQuery<T> = {}): Promise<number> {
        return await this.model.countDocuments(filter).exec();
    }
}
