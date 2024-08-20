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

    @Get('user/:id')
    findUser(@Param('id') id: string){
        return this.userService.fetchUser(id);
    }

    @Get('users/reviews/:id')
    findUserReviews(@Param('id') id: string){
        return this.userService.fetchReviews(id);
    }

    @Get('users/Fav/:id')
    findUserFav(@Param('id') id: string){
        return this.userService.fetchFav(id);
    }

    @Patch('user/testdrives/:id')
    updateTestDrives(@Param('id') id: string){
        return this.userService.fetchTestdrive(id);
    }
}
