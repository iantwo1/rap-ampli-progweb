const somar = require("./somar");
const subtrair = require("./subtrair");
const multiplicar = require("./multiplicar");
const dividir = require("./dividir");

function calcular(numero1, numero2, operacao) {
  let resultado = 0;
  switch (operacao) {
    case "soma":
      resultado = somar(numero1, numero2);
      break;
    case "subtracao":
      resultado = subtrair(numero1, numero2);
      break;
    case "multiplicacao":
      resultado = multiplicar(numero1, numero2);
      break;
    case "divisao":
      if (numero2 === 0) {
        alert("Número 2 precisa ser maior que zero!");
        break;
      }
      resultado = dividir(numero1, numero2);
      break;
  }
  console.log(
    "O resultado da operação " +
      operacao +
      " entre " +
      numero1 +
      " e " +
      numero2 +
      " é: " +
      resultado
  );
}

calcular(100, 250, "soma");
calcular(100, 250, "subtracao");
calcular(100, 250, "multiplicacao");
calcular(100, 250, "divisao");
