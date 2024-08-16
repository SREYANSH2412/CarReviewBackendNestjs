import { Module } from '@nestjs/common';
import { DealerController } from './dealer.controller';
import { DealerService } from './dealer.service';
import { DealerBasicService } from './dealer.basic.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Dealer, DealerSchema } from './schema/dealer.schema';
import ModuleDefiner from 'src/utils/module_definer';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { CarModule } from 'src/car/car.module';

@Module({
  controllers: [DealerController],
  providers: [DealerService, DealerBasicService],
  exports: [DealerService, DealerBasicService],
  imports: [
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: configService.get<string | number>('JWT_EXPIRRES')
          }
        }
      }
    }),
    MongooseModule.forFeature(
      [
        {
          name: Dealer.name,
          schema: DealerSchema,
        }
      ],
      ModuleDefiner.carDB,
    ),
    CarModule,
  ]
})
export class DealerModule {}
