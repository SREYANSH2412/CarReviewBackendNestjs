import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { LoginDto } from './dto/login.dto';

@Controller('user')
export class UserController {
    constructor (private readonly userService: UserService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto){
        console.log(createUserDto)
        return this.userService.createUser(createUserDto);
    }

    @Post('login')
    login(@Body() loginDto: LoginDto){
        return this.userService.login(loginDto);
    }
}
