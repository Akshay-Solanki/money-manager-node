import express from 'express';
const schemaValidator = require('express-joi-validator');

// Controller
import incomeTypeController from '../../controllers/income_type/income_type.controller';

// Schema
// import incomeTypeSchema from '../../validations/schemas/income_type.schema';

// Middleware
import { isAdmin } from '../../middlewares/permission-handler.middleware';

const router = express.Router();

router.get(
  '/list',
  incomeTypeController.list,
);

export default router;
