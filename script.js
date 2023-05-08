let resultado = 0;
const textoResult = "O resultado é: ";

function atribuirValor(id) {
  return parseFloat(document.getElementById(id).value);
}

function adicionar() {
  resultado = atribuirValor("inputValorA") + atribuirValor("inputValorB");
  alert(textoResult + resultado);
}

function subtrair() {
  resultado = atribuirValor("inputValorA") - atribuirValor("inputValorB");
  alert(textoResult + resultado);
}

function multiplicar() {
  resultado = atribuirValor("inputValorA") * atribuirValor("inputValorB");
  alert(textoResult + resultado);
}

function dividir() {
  const valorB = atribuirValor("inputValorB");
  if (valorB == 0) {
    alert('Valor 2 deve ser diferente de zero');
  } else {
    resultado = atribuirValor("inputValorA") / valorB;
    alert(textoResult + resultado);
  }
}

function selecionarOperacao(nomeOperacao) {
  var dropdownButton = document.getElementById("dropdown");
  dropdownButton.innerText = nomeOperacao;
}

