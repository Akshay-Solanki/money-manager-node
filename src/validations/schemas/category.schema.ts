import { TransactionType } from '../../enums/category';
import joi from 'joi';

export default {
  create: {
    body: {
      name: joi.string().min(2).max(15).required(),
      type: joi.only([TransactionType.EXPENSE, TransactionType.INCOME, TransactionType.TRANSFER]),
    }
  }
}