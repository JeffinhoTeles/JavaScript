//Aula de objetos

/*let xicara = {
  cor: "branca",
  forma: "redonda",
  peso: "10 gramas",
  capacidade: "20ml",
};

console.log(xicara);
console.log(xicara.capacidade);
console.log(xicara["cor"]);

xicara.cor = "rosa";

console.log(xicara.cor);*/

//para praticar
/*const garrafa = {
  forma: "cilindrica",
  cor: "cinza",
  peso: "10 gramas",
  capacidade: "250ml",
  material: "aluminio",
};

console.log(garrafa);
console.log(garrafa.capacidade);
console.log(garrafa["cor"]);*/

//Função construtora
function xicara(cor, forma, peso, capacidade) {
  this.cor = cor;
  this.forma = forma;
  this.peso = peso;
  this.capacidade = capacidade;
}

const xicara1 = new xicara("branca", "redonda", 5, 10);

console.log(xicara1);

//Para praticar
function garrafa(forma, cor, peso, capacidade, material) {
  this.forma = forma;
  this.cor = cor;
  this.peso = peso;
  this.capacidade = capacidade;
  this.material = material;
  this.preta = function () {
    console.log("Garrafa" + this.cor);
  };
}

const garrafa1 = new garrafa("oval", "azul", 20, 500, "plastico");
garrafa1.preta();
console.log(garrafa1);

//para praticar (consegui não)
/*console.log(this.peso.length);
console.log(this.cor.toLowerCase());
console.log(this.material.toUpperCase());*/

//Para praticar
const celular = {
  cor: "preta",
  capacidadeGb: 512,
  marca: "xiaomi",
};

for (const propriedade in celular) {
  console.log(`${propriedade}=${celular[propriedade]}`);
}

//Classes e metodos

class Alimento {
  constructor(nome, cor, peso, tipo) {
    (this.nome = nome),
      (this.cor = cor),
      (this.peso = peso),
      (this.tipo = tipo);
  }
  descricao = () => {
    return `${this.nome}, possui a cor :${this.cor}, tem o peso : ${this.peso}, do tipo : ${this.tipo}`;
  };
}

const fruta = new Alimento("Tomate", "vermelho", 100, "fruta");
const verdura = new Alimento("Alface", "verde", 100, "verdura");

console.log(fruta.descricao());
console.log(verdura.descricao());
