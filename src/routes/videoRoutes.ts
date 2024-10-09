import { Router } from 'express';
import { getVideoById } from '../controllers/videoController';

const router = Router();

router.get('/video/:videoId', getVideoById);

export default router;