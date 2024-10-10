export const crearUsuario = (nombre, email, passwordHash) => {
    return {
      nombre,
      email,
      passwordHash,
      createdAt: new Date(),
    };
  };
  