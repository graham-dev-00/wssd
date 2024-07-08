import { USER_STATUS } from 'src/modules/transaction/const/files.const';
import { EntityRepository, IsNull, Repository } from 'typeorm';
import { UserBasicDTO } from '../../modules/transaction/dtos/user.basic.dto';
import { Transaction } from '../entities/transaction.entity';

@EntityRepository(Transaction)
export class TransactionRepository extends Repository<Transaction> {
 
}
