import { Router } from 'express';
import { walletConnectionController } from '../controllers/walletConnectionController.js';

const router = Router();

router.post('/connect', walletConnectionController.connect);
router.delete('/:id', walletConnectionController.disconnect);
router.get('/user/:userId', walletConnectionController.getConnections);

export default router;