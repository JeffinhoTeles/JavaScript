// Funções de ordem superior

const mostrarResultado = (resultado) => {
  console.log(`O resultado da soma: ${resultado}`);
};

const somaConjunta = (num1, num2, showresult) => {
  showresult(num1 + num2);
};

somaConjunta(10, 50, mostrarResultado);
