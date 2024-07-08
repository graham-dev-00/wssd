import {  HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from 'src/models/entities/transaction.entity';
import { httpErrors } from 'src/shares/exceptions';
import * as AWS from 'aws-sdk';
import { generateKeyUploadFiles } from 'src/shares/helpers/generate-upload-key-files.helper';
import { getKeyFileFromUrl } from 'src/shares/helpers/get-key-file-from-url.helper';
import { AVATAR_DEFAULT_URLS, FOLDER_AVATAR, USER_STATUS, USE_AVATAR_DEFAULT } from './const/files.const';
import { DATE_TIME_FORMAT, DELETE_IMAGE, PROVIDER_USER } from 'src/shares/constants';
import * as moment from 'moment';
import { UpdateProfileReq } from './dtos/update-profile.dto';
import { UserBasicDTO } from './dtos/user.basic.dto';
import { In, Repository } from 'typeorm';
import { RedisService } from 'nestjs-redis';
import { TransactionRepository } from 'src/models/repositories/transaction.repository';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionRepository, 'report')
    public readonly readTransactionRepository: TransactionRepository,
    @InjectRepository(TransactionRepository, 'master')
    public readonly writeTransactionRepository: TransactionRepository,

    // @InjectRepository(TransactionRepository)
    // private readonly writeTransactionRepository: Repository<Transaction>,

  ) {}
  async insertRandomTransactions(numTransactions: number): Promise<void> {
    for (let i = 0; i < numTransactions; i++) {
        const newTransaction = this.writeTransactionRepository.create({
            fromUserWallet: Math.floor(Math.random() * 100) + 1, // Assuming wallet IDs range from 1 to 100
            toUserWallet: Math.floor(Math.random() * 100) + 1,
            quantity: parseFloat((Math.random() * 1000).toFixed(2)),
            status: Math.random() > 0.5 ? 'completed' : 'pending',
            nonce: Math.random().toString(36).substring(2, 15),
            createdAt: new Date(),
            updatedAt: new Date()
        });

        await this.writeTransactionRepository.save(newTransaction);
    }
}
async findOne(){
  return await this.writeTransactionRepository.find({
    where: {
      status: "pending"
    }
  })
}
}