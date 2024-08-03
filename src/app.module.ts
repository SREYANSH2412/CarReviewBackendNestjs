import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CarModule } from './car/car.module';
import { UserModule } from './user/user.module';
import { TransactionModule } from './transaction/transaction.module';
import { ReviewModule } from './review/review.module';
import { DealerModule } from './dealer/dealer.module';
import { LogsModule } from './logs/logs.module';
import { FavoriteModule } from './favorite/favorite.module';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { InsuranceModule } from './insurance/insurance.module';
import { TestdriveModule } from './testdrive/testdrive.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV == 'prod' ? 'env/.env.prod' : 'env/.env.dev',
    }),
    CarModule,
    UserModule,
    TransactionModule,
    ReviewModule,
    DealerModule,
    LogsModule,
    FavoriteModule,
    MaintenanceModule,
    InsuranceModule,
    TestdriveModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
