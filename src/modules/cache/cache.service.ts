import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cache: Cache) {}

  public async deleteKeysByPattern(pattern: string): Promise<void> {
    // Retrieve keys matching pattern
    const keys = await this.cache.store.keys(pattern);

    // Delete keys
    const deletePromises = keys.map((key: string) => this.cache.del(key));
    await Promise.all(deletePromises);
  }
}
