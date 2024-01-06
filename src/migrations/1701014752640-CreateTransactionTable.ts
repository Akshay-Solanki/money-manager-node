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
            name: 'categoryId',
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
          referencedTableName: 'user',
          onDelete: 'cascade'
        }),
        new TableForeignKey({
          columnNames: ['accountId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'user_accounts',
          onDelete: 'cascade'
        }),
        new TableForeignKey({
          columnNames: ['categoryId'],
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
        || fk.columnNames.indexOf('categoryId') !== -1
        || fk.columnNames.indexOf('accountId') !== -1
    )

    await queryRunner.dropForeignKeys('transactions',foreignKeys)

    await queryRunner.dropTable('transactions')
  }

}
