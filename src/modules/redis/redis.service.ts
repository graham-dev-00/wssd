import { Injectable } from '@nestjs/common';
import * as Redis from 'ioredis';
import * as dotenv from 'dotenv';
import { DEFAULT_VALUE_LEADER_BOARD } from 'src/shares/constants';
import { RangeScore } from 'src/shares/enums/common.enum';
dotenv.config();


@Injectable()
export class RedisService {
  private readonly client: Redis.Redis;

  constructor() {
    this.client = new Redis.default({
      host: process.env.REDIS_HOST,
      port: +process.env.REDIS_PORT,
    });

    this.client.on('connect', () => {
      console.log('Connected to Redis');
    });

    this.client.on('error', (error) => {
      console.error('Error connecting to Redis:', error);
    });
  }

  getClient(): Redis.Redis {
    return this.client;
  }

  async setValue(key: string, value: number): Promise<any> {
    await this.client.set(key, value);
  }

  async setValueWithTTL(
    key: string,
    value: number | string,
    ttl: number,
  ): Promise<any> {
    await this.client.set(key, value, 'PX', ttl);
  }

  async setValueNoTTL(key: string, value: any): Promise<any> {
    await this.client.set(key, value);
  }

  async getValue(key: string): Promise<string | null> {
    return await this.client.get(key);
  }

  async updateValue(key: string): Promise<any> {
    await this.client.incr(key);
  }

  async cacheForever(key: string, value: string): Promise<any> {
    return await this.client.set(key, value);
  }

  async setDefaultLeaderBoard(key: string, token: string){
    return await this.client.zadd(key, DEFAULT_VALUE_LEADER_BOARD, token)
  }

  async removeTokenOfLeaderBoard(key: string, token: string){
    return await this.client.zrem(key, token);
  }

  async setLeaderBoard(key: string, token: string, value: any){
    return await this.client.zadd(key, value, token)
  }

  async deleteValue(key: string): Promise<void> {
    await this.client.del(key);
  }

  async getMultipleKey(key:string): Promise<string[]>{
    return await this.client.keys(key);
  }

  async getRevRangeByScore(key:string){
    return await this.client.zrevrange(key,0,-1);
  }

  async getRangeByScore(key:string){
    return await this.client.zrange(key, RangeScore.Min, RangeScore.MAX);
  }

  async incrementsScore(key: string, value: number, token: string){
    return this.client.zincrby(key, value, token);
  }

  async decrementsScore(key: string, value: number, token: string){
    return this.client.zincrby(key, -value, token);
  }

  async getScoreByKey(key: string, token: string){
    return this.client.zscore(key, token);
  }

  async getMultipleKeyAndValue(key:string[]): Promise<string[]>{
    return await this.client.mget(key);
  }
}
