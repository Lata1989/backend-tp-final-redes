import express from 'express';
import { obtenerRecomendaciones } from '../controllers/recomendacionesController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, obtenerRecomendaciones);

export default router;
