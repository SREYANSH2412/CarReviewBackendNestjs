import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { CreateTestdriveDto } from './dto/create-testdrive.dto';
  import { TestdriveService } from './testdrive.service';

@Controller('testdrive')
export class TestdriveController {
    constructor (private readonly testdriveService: TestdriveService) {}

    @Post()
    create(@Body() createTestdriveDto: CreateTestdriveDto){
        return this.testdriveService.createTestdrive(createTestdriveDto);
    }

    @Get('user/:id')
    findbyUser(@Param('id') id: string){
        return this.testdriveService.findbyUser(id);
    }

    @Get('car/:id')
    findbyCar(@Param('id') id: string){
        return this.testdriveService.findbyCar(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.testdriveService.remove(id);
    }

    @Patch(':id')
    updateDate(@Param('id') id: string, @Body() updateTestdriveDto){
        return this.testdriveService.updateDate(id, updateTestdriveDto);
    }

    @Get('car/:id1/user/:id2')
    findforCarnUser(@Param('id1') id1: string, @Param('id2') id2: string){
        return this.testdriveService.findforCarnUser(id1, id2);
    }
}
