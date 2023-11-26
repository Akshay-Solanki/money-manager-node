import httpStatusCodes from 'http-status-codes';

import IController from '../../interfaces/IController'

import incomeTypeService from '../../services/income_type/income_type.service'

import ApiResponse from '../../utilities/api-response.utility'

const list: IController = async (req, res) => {
	try {
		const data = await incomeTypeService.list()

		return ApiResponse.result(res, data, httpStatusCodes.OK)
	} catch (e) {
	    ApiResponse.exception(res, e);
	}
}

export default {
	list
}