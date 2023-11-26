import { getRepository } from 'typeorm'

import {IncomeType} from '../../entities/income_type/income_type.entity'

const list = async () => {
	let incomeTypeRepo = getRepository(IncomeType).createQueryBuilder('income_type')

	incomeTypeRepo = incomeTypeRepo.where('income_type.isDeleted = :isDeleted', { isDeleted: false });

	const response = await incomeTypeRepo.getMany()

	return { response: [...response] }
}

export default {
	list
}