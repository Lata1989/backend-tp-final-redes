import { MongoClient } from 'mongodb';

let db;

export const connectDB = async () => {
  const client = new MongoClient(process.env.MONGO_URI);

  await client.connect();
  db = client.db('vendedor-autos-usados');
  console.log('Conexión a la base de datos exitosa');
};

export const getDB = () => {
  if (!db) {
    throw new Error('No hay conexión a la base de datos');
  }
  return db;
};
