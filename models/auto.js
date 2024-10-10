export const crearAuto = (marca, modelo, año, precio, kilometraje, combustible, transmision) => {
    return {
      marca,
      modelo,
      año,
      precio,
      kilometraje,
      combustible,
      transmision,
      createdAt: new Date(),
    };
  };
  