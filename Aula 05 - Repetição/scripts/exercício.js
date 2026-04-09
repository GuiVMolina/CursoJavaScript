// * Exercício 1 - De 1 a 10
console.log(`Exercício 1 - De 1 a 10`);
for (let i = 1; i <= 10; i++) {
  console.log(`${i}º Número`);
}

/*---------------------------------------------------*/

// * Exercício 2 - Tabuada até número determinado
console.log(`\n\nExercício 2 - Tabuada até 10`);
let ex2num1 = Number(prompt(`Digite o número:`));
let ex2num2 = Number(prompt(`Digite até quanto será multiplicado:`));

for (let i = 1; i <= ex2num2; i++) {
  console.log(`${ex2num1} * ${i} = ${ex2num1 * i}`);
}

/*---------------------------------------------------*/

// * Exercício 3 - Soma total
console.log(`\n\nExercício 3 - Soma total`);
let ex3num1 = Number(prompt(`Digite o número:`));
let ex3num2 = Number(prompt(`Digite até quanto será somado:`));
let ex3total = 0;

for (let i = 1; i <= ex3num2; i++) {
  console.log(`${i} + `);
  ex3total += i;
}
console.log(`= ${ex3total}`);

/*---------------------------------------------------*/

// * Exercício 4 - Pares até número determinado
console.log(`\n\nExercício 4 - Números pares até número determinado`);
let ex4inicio = Number(prompt(`Digite o número inicial:`));
let ex4fim = Number(prompt(`Digite o número limite:`));

for (let i = ex4inicio; i <= ex4fim; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

/*---------------------------------------------------*/

// * Exercício 5 - Jogo aleatório
console.log(`\n\nExercício 5 - Jogo aleatório`);
let ex5aleatorio = Math.floor(Math.random() * 10) + 1;
let ex5num = Number(prompt(`Digite um número entre 1 e 10 (${ex5aleatorio}):`));
while (ex5num != ex5aleatorio) {
  if (ex5num < ex5aleatorio) {
    console.log(`O número é maior... Tente novamente!`);
  } else if (ex5num > ex5aleatorio) {
    console.log(`O número é menor... Tente novamente!`);
  }
  ex5num = Number(prompt(`Digite um número entre 1 e 10 (${ex5aleatorio}):`));
}
console.log(`Parabéns! Você acertou o número ${ex5aleatorio}!`);

/*---------------------------------------------------*/

// * Exercício 6 - Contagem regressiva
console.log(`\n\nExercício 6 - Contagem regressiva`);
let ex6num = Number(
  prompt(`Digite um número para iniciar a contagem regressiva:`),
);
for (let i = ex6num; i >= 0; i--) {
  console.log(i);
}

/*---------------------------------------------------*/

//* Exercício 7 - Validação de senha
console.log(`\n\nExercício 7 - Validação de senha`);
let ex7senha = prompt(`Digite a senha:`);

while (ex7senha != "123456") {
  if (ex7senha != "123456") {
    console.log(`Senha errada! Tente novamente...`);
    ex7senha = prompt(`Digite a senha:`);
  } else {
    console.log(`Senha correta!`);
  }
}

/*---------------------------------------------------*/

//* Exercício 8 - Soma até parar
console.log(`\n\nExercício 8 - Soma até parar`);
let ex8soma = 0;
let ex8entrada;

while (ex8entrada != 0) {
  ex8entrada = Number(prompt(`Adicione algo a soma (digite 0 para parar):`));
  ex8soma += ex8entrada;
  if (ex8entrada == "0") {
    console.log(`Resultado: ${ex8soma}`);
  }
}

/*---------------------------------------------------*/

//* Exercício 9 - Média de 3 valores
console.log(`\n\nExercício 9 - Média de 3 valores`);
let ex9soma = 0;

for (let i = 1; i <= 3; i++) {
  let ex9num = Number(prompt(`Digite o ${i}º número:`));
  ex9soma += ex9num;
}

console.log(`A média dos números digitados é: ${ex9soma / 3}`);

/*---------------------------------------------------*/

//* Exercício 10 - Soma de digitos
console.log(`\n\nExercício 10 - Soma de digitos`);

let ex10num = Number(prompt(`Digite um número positivo:`));
let ex10total = 0;

while (ex10num != 0) {
  ex10num %= 10;
  ex10total += ex10num;
}
console.log(`Valor da soma dos digitos: ${ex10total}`);

/*---------------------------------------------------*/

//* Exercício 11 - Tabuada dinâmica
console.log(`\n\nExercício 11 - Tabuada dinâmica`);
let ex11num1 = Number(prompt(`Digite o número:`));
let ex11num2 = Number(prompt(`Digite até quanto será multiplicado:`));

for (let i = 1; i <= ex11num2; i++) {
  console.log(`${ex11num1} * ${i} = ${ex11num1 * i}`);
}

/*---------------------------------------------------*/

//* Exercício 12 - Inverter número
console.log(`\n\nExercício 12 - Inverter número`);

let ex12num = Number(prompt(`Digite um número positivo:`));
let ex12concat;

while (ex12num != 0) {
  ex12num %= 10;
  ex12concat += `${ex12num}`;
}
console.log(`Número invertido: ${ex12concat}`);

/*---------------------------------------------------*/

//* Exercício 13 - Maior número digitado entre 5
console.log(`\n\nExercício 13 - Maior número digitado`);
let ex13maior = 0;

for (let i = 1; i <= 5; i++) {
  let ex13num = [Number(prompt(`Digite o ${i}º número:`))];
  if (ex13num[i] > ex13num[i--]) {
    ex13maior = ex13num[i];
  }
}

/*---------------------------------------------------*/

//* Exercício 14 - Lista de nomes
console.log(`\n\nExercício 14 - Lista de nomes`);
let ex14nomes = ["A", "B", "C", "D", "E"];
let ex14contador = 1;

ex14nomes.forEach((nome) => {
  console.log(`Nome: ${nome} | Posição ${ex14contador}`);
  ex14contador++;
});

/*---------------------------------------------------*/

//* Desafio - Sistema de pedidos
console.log(`\n\nDesafio - Sistema de pedidos`);
let desafioArray = ["A", "B", "C"];
let desafioContador = 1;

desafioArray.forEach((produto) => {
  console.log(`Produto: ${produto} | Posição ${desafioContador}`);
  desafioContador++;
});

let desafioEscolha = prompt(`Escolha um produto:`);

while (desafioEscolha != "A" || desafioEscolha != "B" || desafioEscolha != "C"){
  console.log(`Opção inválida! Tente novamente...`)
  desafioEscolha = prompt(`Escolha um produto:`);
}

console.log(`Ótima escolha! o produto ${desafioEscolha} é ótimo`);