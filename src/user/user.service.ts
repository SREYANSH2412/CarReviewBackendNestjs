import { Injectable } from '@nestjs/common';
import { UserBasicService } from 'src/user/user.basic.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        private readonly userBasicService: UserBasicService,
    ){}

    async createUser(createUserDto: CreateUserDto){
        return this.userBasicService.createUser(createUserDto);
    }
}
