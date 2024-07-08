import { CacheModule, Module } from '@nestjs/common';
import { CacheService } from './cache.service';
import * as redisStore from 'cache-manager-redis-store';
import { redisConfig } from '../../configs/redis.config';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      ...redisConfig,
      isGlobal: true,
    }),
  ],
  providers: [CacheService],
  controllers: [],
})
export class CachesModule {}
