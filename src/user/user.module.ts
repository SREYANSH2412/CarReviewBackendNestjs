import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserBasicService } from './user.basic.service';
import { MongooseModule } from '@nestjs/mongoose';
import ModuleDefiner from 'src/utils/module_definer';
import { User, UserSchema } from './schema/user.schema';

@Module({
  controllers: [UserController],
  providers: [UserService, UserBasicService],
  exports: [UserService, UserBasicService],
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: User.name,
          schema: UserSchema,
        },
      ],
      ModuleDefiner.carDB,
    )
  ]
})
export class UserModule {}
