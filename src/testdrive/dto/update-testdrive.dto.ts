import { PartialType } from '@nestjs/swagger';
import { CreateTestdriveDto } from './create-testdrive.dto';

export class UpdateTestdriveDto extends PartialType(CreateTestdriveDto) {}
