import { Router } from 'express';
import { transactionController } from '../controllers/transactionController.js';

const router = Router();

router.get('/wallet/:walletId', transactionController.getTransactions);
router.post('/', transactionController.createTransaction);
router.get('/user/:userId/recent', transactionController.getRecentTransactions);

export default router;