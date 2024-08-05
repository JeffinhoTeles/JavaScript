// Aula de Date e Math

/*const numAleatory = () => {
  return Math.floor(Math.random() * 30 + 20);
};

const number = prompt("digite um numero");

const numbers = [];
const geraArray = () => {
  for (let i = 0; i < numAleatory; i++) {
    number.push(numAleatory);
  }
};

geraArray();*/

const dataAniversario = new Date("april 26,2025");
const hoje = new Date();

const miliSegundosPorDia = 86400000;

console.log((dataAniversario - hoje) / miliSegundosPorDia);
