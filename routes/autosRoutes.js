import express from 'express';
import { obtenerAutos, agregarAuto, eliminarAuto, actualizarAuto } from '../controllers/autosController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, obtenerAutos);
router.post('/', authMiddleware, agregarAuto);
router.delete('/:id', authMiddleware, eliminarAuto);
router.put('/:id', authMiddleware, actualizarAuto);

export default router;
