//Arrays

//percorrer um array
/*const numeros = [1, 2, 3, 4, 5];

for (let index = 0; index < 5; index++) {
  console.log(numeros[index]);
}*/

//usando o length
/*const cores = ["rosa", "preto", "azul"];
console.log(cores.length);

for (let i = 0; i < cores.length; i++) {
  console.log(cores[i]);
}*/

//Acrescentar elementos

//método push acrescenta elementos ao final do array
/*const cores = ["rosa", "preto", "azul"];
console.log(cores.length);

cores.push("branco");
console.log(cores.length);
console.log(cores);*/

//método unchift acrescenta elementos no inicio do array
/*const cores = ["rosa", "preto", "azul"];
console.log(cores.length);

cores.unshift("branco");
console.log(cores.length);
console.log(cores);*/

//Eliminar elementos
/*const cores = ["rosa", "preto", "azul", "bege", "marrom", "cinza"];
console.log(cores);

//elimina o ultimo elemento do array
cores.pop();
console.log(cores);
//elimina o primeiro elemento do array/
cores.shift();
console.log(cores);*/

//Splice elimina um ou varios elementos de um array

/*const cores = ["rosa", "preto", "azul", "bege", "marrom", "cinza"];
//funciona com dois paramentros o 1º é o indice que determina a posição em que o metodo será executado
//o segundo é a quantidade de elementos a serem eliminados a partir dessa posição
cores.splice(1, 2);
console.log(cores);*/

//Join, gera uma string com todos os elementos, separados pelo valor que ultilizamos como parametro
/*const cores = ["rosa", "preto", "azul"];
console.log(cores.join(","));
console.log(cores.join("*"));*/

//Concat combina dois arrays em um unico
/*const cores = ["rosa", "preto", "azul"];
const roupas = ["camiseta", "camisa", "calça"];

const vestuario = cores.concat(roupas);

console.log(vestuario);*/

//Slice, retorna uma parte do array para um novo array

/*const cores = ["rosa", "preto", "azul"];
const roupas = cores.slice(1, 3);*/

//Includes, retorna o valor booleano caso o parametro exista ou não no array

/*const cores = ["rosa", "preto", "azul"];
console.log(cores.includes("preto"));
console.log(cores.includes("branco"));*/

//IndexOf ele recebe o parmametro e retorna o numero do indice que esta, se existir, obs: se não existir retorna -1
/*const cores = ["rosa", "preto", "azul"];

console.log(cores.indexOf("preto"));
console.log(cores.indexOf("branco"));*/

//Reverse inverte a ordem dos elementos dentro do array
/*const cores = ["rosa", "preto", "azul"];
cores.reverse();
console.log(cores);*/

//Array de Objeto
/*const pessoas = [
  {
    nome: "jeffinho",
    idade: 34,
    cidade: "São paulo",
    corFavorita: "branco",
  },
];*/

//Para praticar
/*const cores = [];

let entrada = prompt("Digite uma cor: ");
while (cores.length < 5) {
  if (cores.includes(entrada) !== entrada) {
    cores.push(entrada);
  } else {
    console.log("essa cor já existe");
  }
  entrada = prompt("digite uma cor");

  const remover = (nome) => {
    let index = cores.indexOf(nome);
    if (index === -1) {
      console.log("Essa cor nao foi encontrada");
    } else {
      cores.splice(ondex, 1);
    }
  };
  let removerItem = prompt(`Das seguintes cores: ${cores}, remova uma`);

  remover(removerItem);

  for (let i = 0; i < cores.length; i++) {
    console.log(`Na posição "{i} temos a cor[i]}`);
  }
}*/
