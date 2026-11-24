// 1. Recebe a quantidade de termos do usuário
const n = +prompt("Digite a quantidade de números da Sequência de Fibonacci que deseja exibir:");

// 2. Validação da entrada
if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
  alert("Por favor, digite um número inteiro positivo válido.");
} else {
  let fibonacci = [];
  let i = 0;

  // 3. Geração da sequência com WHILE
  while (i < n) {
    if (i === 0) {
      fibonacci.push(0); // O primeiro termo é sempre 0
    } else if (i === 1) {
      fibonacci.push(1); // O segundo termo é sempre 1
    } else {
      let proximoTermo = fibonacci[i - 1] + fibonacci[i - 2];
      fibonacci.push(proximoTermo);
    }
    i++; // Incremento manual obrigatório no while
  }

  // 4. Exibe o resultado formatado
  alert(`Os primeiros ${n} números da Sequência de Fibonacci são:\n\n` + fibonacci.join(", "));
}

