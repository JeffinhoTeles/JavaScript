//Exercicio For

/*const recebeNumero = (numero) => {
  for (let i = 0; i < numero; i++) {
    console.log(i);
  }
};
recebeNumero(10);*/

//Exercicio while
/*const valor = 4;
let resultado = 1;
let i = 1;

while (i <= valor) {
  resultado = resultado * i;
  console.log(resultado);
  i++;
}*/

//do while, não é tão usado, ele ainda permite que entre no laço pelo menos uma vez

//Exercicio switch

let numero = 35;

switch (Math.floor(numero / 10)) {
  case 0:
    console.log("Está na familia das unidades");
    break;

  case 1:
    console.log("Está na familia do 10");
    break;

  case 2:
    console.log("Está na familia do 20");
    break;

  case 3:
    console.log("Está na familia do 30");
    break;

  case 4:
    console.log("Está na familia do 40");
    break;

  case 5:
    console.log("Está na familia do 50");
    break;

  case 6:
    console.log("Está na familia do 60");
    break;

  case 7:
    console.log("Está na familia do 70");
    break;

  case 8:
    console.log("Está na familia do 80");
    break;

  case 9:
    console.log("Está na familia do 90");
    break;

  case 10:
    console.log("Está na familia do 100");
    break;

  default:
    "Nenhum numero ta no range";
    break;
}
