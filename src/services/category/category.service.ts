import { getRepository } from 'typeorm'

import { Category } from '../../entities/category/category.entity'
import { ICreateCategory } from 'category.interface';
import ApiUtility from '../../utilities/api.utility';

const list = async () => {
  let categoryRepo = getRepository(Category).createQueryBuilder('categories')

  categoryRepo = categoryRepo.where('categories.isDeleted = :isDeleted', { isDeleted: false });

  const response = await categoryRepo.getMany()

  return { response: [...response] }
}


const store = async (params: ICreateCategory) => {
  const item = new Category();
  item.name = params.name;
  item.type = params.type;

  const categoryData = await getRepository(Category).save(item);
  return ApiUtility.sanitizeData(categoryData);
}

export default {
  list,
  store
}