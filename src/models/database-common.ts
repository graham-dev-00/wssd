import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionRepository } from './repositories/transaction.repository';

const commonRepositories = [
  TransactionRepository,
];


@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature(commonRepositories, 'master'),
    TypeOrmModule.forFeature(commonRepositories, 'report'),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseCommonModule {}
