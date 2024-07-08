import { CacheModule, Logger } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { MongooseModule } from '@nestjs/mongoose';
import * as redisStore from 'cache-manager-redis-store';
import { ConsoleModule } from 'nestjs-console';
import { masterConfig, reportConfig } from 'src/configs/database.config';
import { redisConfig } from 'src/configs/redis.config';
import { DatabaseCommonModule } from 'src/models/database-common';
import { HttpClientModule } from 'src/shares/http-clients/http.module';
import { BullModule } from '@nestjs/bull';
import { TransactionModule } from './modules/transaction/transaction.module';

const Modules = [
  Logger,

  TypeOrmModule.forRoot(masterConfig),
  TypeOrmModule.forRoot(reportConfig),
  ScheduleModule.forRoot(),
  DatabaseCommonModule,
  ConsoleModule,
  HttpClientModule,
  CacheModule.register({
    store: redisStore,
    ...redisConfig,
    isGlobal: true,
  }),
  BullModule.forRoot({
    redis: {
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT) || 6379,
    },
  }),
  TransactionModule
];
export default Modules;
