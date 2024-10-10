import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './utils/db.js';
import autosRoutes from './routes/autosRoutes.js';
import recomendacionesRoutes from './routes/recomendacionesRoutes.js';
import usuariosRoutes from './routes/usuariosRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

// Rutas
app.use('/api/autos', autosRoutes);
app.use('/api/recomendaciones', recomendacionesRoutes);
app.use('/api/usuarios', usuariosRoutes);

// Conexión a la base de datos y arranque del servidor
const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar con la base de datos', error);
    process.exit(1);
  }
};

startServer();
