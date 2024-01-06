import httpStatusCodes from 'http-status-codes';

import IController from '../../interfaces/IController'

import categoryService from '../../services/category/category.service'

import ApiResponse from '../../utilities/api-response.utility'

const list: IController = async (req, res) => {
	try {
		const data = await categoryService.list()

		return ApiResponse.result(res, data, httpStatusCodes.OK)
	} catch (e) {
	    ApiResponse.exception(res, e);
	}
}

const create:IController = async (req, res) => {
  try{
    const data = req;
  }catch(e){
    //
  }
}

export default {
	list
}