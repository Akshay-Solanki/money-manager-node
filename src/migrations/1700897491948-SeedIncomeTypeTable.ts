import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { IncomeType } from '../entities/income_type/income_type.entity'
import {incomeTypeSeed} from '../seeds/income_type.seed'

export class SeedIncomeTypeTable1700897491948 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await getRepository(IncomeType).save(incomeTypeSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
