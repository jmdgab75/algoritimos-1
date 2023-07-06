const quantidadeNotas = parseInt(prompt("Digite a quantidade de notas:"));

let somaNotas = 0;

for (let i = 1; i <= quantidadeNotas; i++) {
  const nota = parseFloat(prompt("Digite a nota " + i + ":"));
  somaNotas += nota;
}

const media = somaNotas / quantidadeNotas;

console.log("A média das notas é: " + media.toFixed(2));
