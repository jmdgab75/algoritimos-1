// Solicitar ao usuário um número
const numero = parseInt(prompt("Digite um número:"));

// Verificar se o número é divisível por 3 e 5 ao mesmo tempo
if (numero % 3 === 0 && numero % 5 === 0) {
  console.log(numero + " é divisível por 3 e 5 ao mesmo tempo.");
} else {
  console.log(numero + " não é divisível por 3 e 5 ao mesmo tempo.");
}
