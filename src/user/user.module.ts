import { Inject, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserBasicService } from './user.basic.service';
import { MongooseModule } from '@nestjs/mongoose';
import ModuleDefiner from 'src/utils/module_definer';
import { User, UserSchema } from './schema/user.schema';
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ReviewModule } from 'src/review/review.module';
import { FavoriteModule } from 'src/favorite/favorite.module';
import { TestdriveModule } from 'src/testdrive/testdrive.module';

@Module({
  controllers: [UserController],
  providers: [UserService, UserBasicService],
  exports: [UserService, UserBasicService],
  imports: [
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SECRET'),
          signOptions:{
            expiresIn: configService.get<string | number>('JWT_EXPIRES'),
          }
        }
      }
    }),
    MongooseModule.forFeature(
      [
        {
          name: User.name,
          schema: UserSchema,
        },
      ],
      ModuleDefiner.carDB,
    ),
    ReviewModule,
    FavoriteModule,
    TestdriveModule,
  ]
})
export class UserModule {}
