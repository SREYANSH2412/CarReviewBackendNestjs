import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AbcdModule } from './abcd/abcd.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV == 'prod' ? 'env/.env.prod' : 'env/.env.dev',
    }),
    AbcdModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
