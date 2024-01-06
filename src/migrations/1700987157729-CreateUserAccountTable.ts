import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUserAccountTable1700987157729 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_accouts',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'account',
            type: 'varchar',
            length: '100',
            isNullable: false
          },
          {
            name: 'createdAt',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'typeId',
            type: 'int'
          },
          {
            name: 'userId',
            type: 'int'
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

    await queryRunner.createForeignKeys(
      'user_accounts',
      [
        new TableForeignKey({
          columnNames: ['typeId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'categories',
          onDelete: "cascade"
        }),
        new TableForeignKey({
          columnNames: ['userId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'users',
          onDelete: 'cascade'
        })
      ]
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("user_accounts")
    const foreignKeys = table.foreignKeys.filter(
      (fk) => fk.columnNames.indexOf('typeId') !== -1 
      || fk.columnNames.indexOf('userId') !== -1
    )
    await queryRunner.dropForeignKeys('user_accounts', foreignKeys)
    await queryRunner.dropTable('user_accouts');
  }

}
