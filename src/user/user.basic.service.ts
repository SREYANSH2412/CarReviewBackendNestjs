import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from 'src/helpers/crud';
import { User, UserDocument } from './schema/user.schema';
import ModuleDefiner from 'src/utils/module_definer';
import { CreateUserDto } from './dto/create-user.dto';
import { plainToInstance } from 'class-transformer';


@Injectable()
export class UserBasicService extends GenericService<UserDocument> {
  constructor(
    @InjectModel(User.name, ModuleDefiner.carDB)
    model: Model<UserDocument>,
  ) {
    super(model);
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserDocument> {
    const user = plainToInstance(User, createUserDto);
    return this.create(user as UserDocument);
  }
}
