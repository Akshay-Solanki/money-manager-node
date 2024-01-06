import { getRepository } from 'typeorm'

import { Category } from '../../entities/category/category.entity'

const list = async () => {
  let categoryRepo = getRepository(Category).createQueryBuilder('categories')

  categoryRepo = categoryRepo.where('categories.isDeleted = :isDeleted', { isDeleted: false });

  const response = await categoryRepo.getMany()

  return { response: [...response] }
}


const store = async () => {
  
}

export default {
  list
}