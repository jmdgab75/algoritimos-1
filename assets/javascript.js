console.log('aaaaaaaaaa');

//variavel
var a = 0;
let b = 2;
//constante
const c = 4; 
console.log(a);


// verifique se um dado número é positivo ou negativo

let numero = 5;

if (numero > 0) {  // quando a condição é verdadeira
    console.log('É positivo');
} else {   // quando a condição é falsa
    console.log('É negativo');
}


// verifique se uma valor é par ou impar

let valor = 3

if (valor % 2 === 0) {
    console.log('É par');
} else {
    console.log('É impar');
}


// determine qual é o maior entre três números

let num1 = 10;
let num2 = 5;
let num3 = 8;
let maior = 0;

if (num1 >= num2 && num1 >= num3) {
    maior = num1;
} else if(num2 >= nem1 && num2 >= num3) {
    maior = num2;
} else{
   maior = num3;
}

console.log('O maior número é: ' +maior  );


// verificar se um ano é bissexto

let ano = 2020;

if ((ano %4 ===0 && ano % 100 !==0)  || (ano % 400 === 0)) {
    console.log('O ano é bissexto');
} else {
 console.log('O ano não é bissexto');
}



// estruturas de repetição

let contador = 1;

while(contador  <= 100){
    console.log(contador);
      contador++;
}


//perguntar ao usuario se um número entre 1 e 10

let num4;

do{
    num4 = parseInt(prompt('Digite um número entre 1 e 10'));
} while (num4 <1 || num4 > 10);

console.log('Voçe digitou o número ' +num4);


// repetição ultilizando a estrutura for
//executando soma

let soma =0;

for(let i = 1; i <= 10; i++){
  soma += i;
}

console.log('O valor da soma é: ' +soma);


// interação sobre array usando for

const numeros = [1, 2, 3, 4, 5];

for (let num of numeros){
    console.log(num);
}

const pessoa ={
  nome: 'João da Silva',
  idade: '71',
  cidade: 'Nova Andradina'
};

for(let atributo in pessoa){
   console.log(atributo + " : " + pessoa[atributo]);
}