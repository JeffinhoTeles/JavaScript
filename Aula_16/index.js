const tenis = [
  {
    id: 1,
    marca: "nike",
    modelo: "air force",
    tamanho: 35,
  },

  {
    id: 2,
    marca: "adidas",
    modelo: "super star",
    tamanho: 40,
  },

  {
    id: 3,
    marca: "vans",
    modelo: "classic",
    tamanho: 38,
  },
];

const getDados = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(tenis);
    }, 3000);
  });
};

getDados().then((Response) => {
  Response.forEach((tenis) => {
    console.log(`${tenis.marca},${tenis.modelo},${tenis.tamanho}`);
  });
});
