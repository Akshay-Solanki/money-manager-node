import { TransactionType } from "../enums/category";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategory1700896808996 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'categories',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'type',
                        type: 'enum',
                        enum: [TransactionType.INCOME, TransactionType.EXPENSE, TransactionType.TRANSFER],
                        default: `"${TransactionType.EXPENSE}"`,
                        isNullable: false,
                    },
                    {
                        name: 'createdAt',
                        type: 'datetime',
                        default: 'CURRENT_TIMESTAMP',
                    },
                    {
                        name: 'updatedAt',
                        type: 'datetime',
                        default: 'CURRENT_TIMESTAMP',
                    },
                    {
                        name: 'isDeleted',
                        type: 'tinyint',
                        default: '0',
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('categories');
    }

}
