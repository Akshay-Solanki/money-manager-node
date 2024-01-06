import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTransactionTable1701014752640 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
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
            name: 'userId',
            type: 'int'
          },
          {
            name: 'accountId',
            type: 'int'
          },
          {
            name: 'typeId',
            type: 'int'
          },
          {
            name: 'date',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'amount',
            type: 'bigint',
            isNullable: false
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'description',
            type: 'text',
            isNullable: true
          }
        ]
      })
    )

    await queryRunner.createForeignKeys(
      'transactions',
      [
        new TableForeignKey({
          columnNames: ['userId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'users',
          onDelete: 'cascade'
        }),
        new TableForeignKey({
          columnNames: ['accountId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'user_accouts',
          onDelete: 'cascade'
        }),
        new TableForeignKey({
          columnNames: ['typeId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'categories',
          onDelete: 'cascade'
        }),
      ]
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('transactions')
    const foreignKeys = table.foreignKeys.filter(
      fk => fk.columnNames.indexOf('userId') !== -1
        || fk.columnNames.indexOf('typeId') !== -1
        || fk.columnNames.indexOf('accountId') !== -1
    )

    await queryRunner.dropForeignKeys('transactions',foreignKeys)

    await queryRunner.dropTable('transactions')
  }

}
