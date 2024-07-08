//se chover então fico em casa

/*let chover = true;

if (chover) {
  console.log("Vou é dormir");
}*/

// == é para a comparação
// se = if
//senão = else

/*let idade = 19;

if (idade >= 18) {
  alert("Pode entrar");
} else {
  alert("sai fora");
}*/

/*let nomeUsuario = "Jeffinho";

if (nomeUsuario == "Carlos") {
  console.log("Preencha seu nome");
} else if (nomeUsuario == "Jeffinho") {
  alert("Não é o Jeffinho");
}*/

//Exercicio
/*let num = prompt("Digite o numero de  1 a 5");
num = parseInt(num);

if (num == 1) {
  alert("um");
} else if (num == 2) {
  alert("dois");
} else if (num == 3) {
  alert("tres");
} else if (num == 4) {
  alert("quatro");
} else if (num == 5) {
  alert("cinco");
} else {
  alert("Este numero não esta no range");
}*/
/*____________________________________________________________________________________*/

//Aula de função

//Função comum
/*function soma(num1, num2) {
  return console.log(num1 + num2);
}

soma(10, 60);*/

/*function mostraNome() {
  const nome = prompt("informe seu nome");
  console.log(nome);
}

mostraNome();*/

// função anonima
/*let numPar = function () {
  let num = parseInt(prompt("digite um numero"));
  if (num % 2 === 0) {
    alert("esse numero é par");
  } else {
    alert("esse numero é impar");
  }
};
numPar();*/

//arrow function
/*let sub = () => {
  let num1 = parseInt(prompt("digite um numero"));
  let num2 = parseInt(prompt("digite um numero"));
  return alert(num1 - num2);
};
sub();*/

//calculadora com arrow function
let somar = (a, b) => {
  return a + b;
};

let sub = (a, b) => {
  return a - b;
};

let mult = (a, b) => {
  return a * b;
};

let div = (a, b) => {
  return a / b;
};

alert(somar(15, 5));
alert(sub(15, 5));
alert(mult(15, 5));
alert(div(15, 5));
