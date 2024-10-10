import jwt from 'jsonwebtoken';
import { getDB } from '../utils/db.js';
import { crearUsuario } from '../models/usuario.js';

const db = getDB();

export const registroUsuario = async (req, res) => {
  const { nombre, email, password } = req.body;
  
  // Verificar si el usuario ya existe
  const usuarioExistente = await db.collection('usuarios').findOne({ email });
  if (usuarioExistente) {
    return res.status(400).json({ mensaje: 'El usuario ya existe' });
  }

  // Crear nuevo usuario (sin encriptación de contraseña)
  const nuevoUsuario = crearUsuario(nombre, email, password); // Aquí no se encripta la contraseña
  await db.collection('usuarios').insertOne(nuevoUsuario);

  res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
};

export const loginUsuario = async (req, res) => {
  const { email, password } = req.body;

  // Buscar el usuario
  const usuario = await db.collection('usuarios').findOne({ email });
  if (!usuario) {
    return res.status(400).json({ mensaje: 'Credenciales incorrectas' });
  }

  // Verificar contraseña (sin bcrypt)
  if (password !== usuario.password) {
    return res.status(400).json({ mensaje: 'Credenciales incorrectas' });
  }

  // Generar JWT
  const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.json({ token });
};
