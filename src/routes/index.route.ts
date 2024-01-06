import * as express from 'express';

import defaultRouter from './default/default.route';
import authRouter from './auth/auth.route';
import meRouter from './me/me.route';
import userRouter from './user/user.route';
import CategoryRouter from './category/category.route'

const router = express.Router();

router.use('/', defaultRouter);
router.use('/auth', authRouter);
router.use('/me', meRouter);
router.use('/user', userRouter);
router.use('/categories', CategoryRouter)

export default router;
