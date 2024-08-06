console.log("Script funcionando");

function sum(num1, num2) {
  return num1 + num2;
}

function gerarResultado(event) {
  event.preventDefault();

  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  let resultado = sum(num1, num2);

  alert(`O resultado é ${resultado}.`);
  document.getElementById("txt-result").innerText = `Resultado ${resultado}`;
}

document.getElementById("formSoma").addEventListener("submit", gerarResultado);
