import { CacheInterceptor, CacheModule, CACHE_MANAGER, CACHE_MODULE_OPTIONS, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import * as config from 'config';
import { RedisModule } from 'nestjs-redis';
import { TransactionRepository } from 'src/models/repositories/transaction.repository';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';

@Module({
  imports: [
    JwtModule.register({
      secret: config.get<string>('app.jwt_access_token_secret'),
      signOptions: {
        expiresIn: config.get<string | number>('app.jwt_access_token_expiration_time'),
      },
    }),
    RedisModule.register({
      host: process.env.REDIS_HOST,
      port: +process.env.REDIS_PORT,
    }),
  ],

  providers: [TransactionService ,TransactionRepository],
  exports: [TransactionService],
  controllers: [TransactionController],
})
export class TransactionModule {}
