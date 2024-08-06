console.log("Script funcionando");

function sum(num1, num2) {
  return num1 + num2;
}

function gerarResultado(event) {
  event.preventDefault();

  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  let resultado = sum(num1, num2);

  alert(resultado);
}
