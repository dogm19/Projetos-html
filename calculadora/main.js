let titulo = document.querySelector("h1");

//titulo.textContent = "1";

let acumulado = 0;
let operacao = '';
let novoNumero = true;

function numero(valor) {
  if (novoNumero) {
    titulo.textContent = valor;
    novoNumero = false;
  } else if (titulo.textContent.length < 6) {
    titulo.textContent += valor;
  }
}

function pressiona(operador) {
  let valorAtual = parseFloat(titulo.textContent);

  if (operacao !== '') {
    switch (operacao) {
      case '-':
        acumulado -= valorAtual;
        break;
      case '+':
        acumulado += valorAtual;
        break;
      case '*':
        acumulado *= valorAtual;
        break;
      case '/':
        if (valorAtual !== 0) {
          acumulado /= valorAtual;
        } else {
          titulo.textContent = "Erro";
          return;
        }
        break;
    }
    titulo.textContent = acumulado;
  } else {
    acumulado = valorAtual;
  }

  operacao = operador;
  novoNumero = true;

  if (operador === '=') {
    operacao = '';
  }
}
function resetar() {
  acumulado = 0;
  operacao = '';
  novoNumero = true;
  titulo.textContent = '0';
}
