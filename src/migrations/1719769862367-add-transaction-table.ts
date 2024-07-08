import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class addTransactionTable1719769862367 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'transactions',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'fromUserWallet',
                    type: 'int'
                },
                {
                    name: 'toUserWallet',
                    type: 'int'
                },
                {
                    name: 'quantity',
                    type: 'decimal',
                    precision: 10,
                    scale: 2
                },
                {
                    name: 'status',
                    type: 'varchar',
                    length: '20'
                },
                {
                    name: 'nounce',
                    type: 'varchar',
                    length: '255'
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP'
                },
                {
                    name: 'updatedAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP'
                }
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('transactions');
    }

}
