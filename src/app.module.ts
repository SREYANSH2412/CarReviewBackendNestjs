import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CarModule } from './car/car.module';
import { UserModule } from './user/user.module';
import { TransactionModule } from './transaction/transaction.module';
import { ReviewModule } from './review/review.module';
import { DealerModule } from './dealer/dealer.module';
import { LogsModule } from 'src/logs/logs.module';
import { FavoriteModule } from './favorite/favorite.module';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { InsuranceModule } from './insurance/insurance.module';
import { TestdriveModule } from './testdrive/testdrive.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import ModuleDefiner from './utils/module_definer';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV == 'prod' ? 'env/.env.prod' : 'env/.env.dev',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        // const uri = configService.get<string>('MONGODB_URL');
        const uri = configService.get<string>('MONGODB_URL_CAR');
        console.log(uri);
        return {
          uri: uri,
        };
      },
      inject: [ConfigService],
      connectionName: ModuleDefiner.carDB,
    }),
    CarModule,
    UserModule,
    TransactionModule,
    ReviewModule,
    DealerModule,
    FavoriteModule,
    MaintenanceModule,
    InsuranceModule,
    TestdriveModule,
    LogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
