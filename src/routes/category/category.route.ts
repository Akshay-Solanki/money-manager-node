import express from 'express';
const schemaValidator = require('express-joi-validator');

// Controller
import categoryController from '../../controllers/category/category.controller';

// Schema
// import CategorySchema from '../../validations/schemas/category.schema';

// Middleware
import { isAdmin } from '../../middlewares/permission-handler.middleware';

const router = express.Router();

router.get(
  '/list',
  isAdmin(),
  categoryController.list,
);

export default router;
