import { Router } from 'express';
import { walletController } from '../controllers/walletController.js';

const router = Router();

router.get('/user/:userId', walletController.getWallets);
router.post('/', walletController.createWallet);
router.get('/:walletId/balance', walletController.getBalance);
router.patch('/:walletId/balance', walletController.updateBalance);

export default router;