import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso denegado, no token proporcionado' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = verified;
    next();
  } catch (err) {
    res.status(400).json({ mensaje: 'Token no válido' });
  }
};
