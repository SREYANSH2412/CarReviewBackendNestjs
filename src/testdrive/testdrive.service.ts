import { Injectable } from '@nestjs/common';
import { TestdriveBasicService } from './testdrive.basic.service';
import { CreateTestdriveDto } from './dto/create-testdrive.dto';
import { TestdriveDocument } from './schema/testdrive.schema';

@Injectable()
export class TestdriveService {
    constructor(
        private readonly testdriveBasicService: TestdriveBasicService,
    ){}

    async createTestdrive(createTestdriveDto: CreateTestdriveDto): Promise<TestdriveDocument>{
        return this.testdriveBasicService.createTestdrive(createTestdriveDto);
    }
}
