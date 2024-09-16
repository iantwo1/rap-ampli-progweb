function calcular() {
  event.preventDefault();
  const numero1 = parseFloat(document.getElementsByName("numero1")[0].value);
  const numero2 = parseFloat(document.getElementsByName("numero2")[0].value);

  const operacao = document.getElementsByName("operacao")[0].value;
  let resultado = 0;
  switch (operacao) {
    case "soma":
      resultado = numero1 + numero2;
      break;
    case "subtracao":
      resultado = numero1 - numero2;
      break;
    case "multiplicacao":
      resultado = numero1 * numero2;
      break;
    case "divisao":
      if (numero2 === 0) {
        alert("Número 2 precisa ser maior que zero!");
        break;
      }
      resultado = numero1 / numero2;
      break;
  }
  document.getElementsByName("resultado")[0].innerHTML =
    "O resultado é: " + resultado;
}
