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
}
