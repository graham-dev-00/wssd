import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
export const TableName = 'transactions';

@Entity(TableName)
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fromUserWallet: number;

    @Column()
    toUserWallet: number;

    @Column('decimal', { precision: 10, scale: 2 })
    quantity: number;

    @Column()
    status: string;

    @Column()
    nonce: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
