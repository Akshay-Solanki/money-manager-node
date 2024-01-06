import httpStatusCodes from 'http-status-codes';

import IController from '../../interfaces/IController'

import categoryService from '../../services/category/category.service'

import ApiResponse from '../../utilities/api-response.utility'
import { ICreateCategory } from 'category.interface';

const list: IController = async (req, res) => {
  try {
    const data = await categoryService.list()

    return ApiResponse.result(res, data, httpStatusCodes.OK)
  } catch (e) {
    ApiResponse.exception(res, e);
  }
}

const create: IController = async (req, res) => {
  try {
    const params: ICreateCategory = {
      name: req.body.name,
      type: req.body.type,
    }

    const category = await categoryService.store(params);

    return ApiResponse.result(res, category, httpStatusCodes.CREATED)
  } catch (e) {
    return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST);
  }
}

export default {
  list,
  create
}