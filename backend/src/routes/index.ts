import { Router } from 'express';
import { createResponse } from '../utils/helpers';

const router = Router();

router.get('/health', (req, res) => {
  res.json(createResponse(true, {
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  }, 'Server is running'));
});

export default router;