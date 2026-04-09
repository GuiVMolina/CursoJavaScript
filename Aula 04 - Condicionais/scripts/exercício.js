// * Exercício 01 - Idade
console.log(`Exercício 01 - Idade`);
let ex1idade = Number(prompt(`Digite a sua idade:`));
if (ex1idade > 0 && ex1idade < 18) {
  console.log(`Menor de idade`);
} else if (ex1idade >= 18) {
  console.log(`Maior de idade`);
} else {
  console.log(`Opção inválida`);
}

/*---------------------------------------------------*/

// * Exercício 02 - Positivo ou Negativo
console.log(`\n\nExercício 02 - Positivo ou Negativo`);
let ex2numero = Number(prompt(`Digite um número:`));
if (ex2numero >= 0) {
  console.log(`O número é positivo`);
} else {
  console.log(`O número é negativo`);
}

/*---------------------------------------------------*/

// * Exercício 03 - Prova
console.log(`\n\nExercício 03 - Prova`);
let ex3nota = Number(prompt(`Qual a sua nota?`));
if (ex3nota >= 0 && ex3nota < 60) {
  console.log(`Aluno Reprovado!`);
} else if (ex3nota >= 60 && ex3nota <= 100) {
  console.log(`Aluno Aprovado!`);
} else {
  console.log(`Opção inválida`);
}

/*---------------------------------------------------*/

// * Exercício 04 - Positivo, Negativo ou Zero
console.log(`\n\nExercício 04 - Positivo, Negativo ou Zero`);
let ex4numero = Number(prompt(`Digite um número:`));
if (ex4numero > 0) {
  console.log(`O número é positivo`);
} else if (ex4numero < 0) {
  console.log(`O número é negativo`);
} else {
  console.log(`O número é zero`);
}

/*---------------------------------------------------*/

// * Exercício 05 - Classificação
console.log(`\n\nExercício 05 - Classificação`);
let ex5idade = Number(prompt(`Qual a sua idade?`));
if (ex5idade > 0 && ex5idade <= 12) {
  console.log(`Pela sua idade, você é Criança`);
} else if (ex5idade > 12 && ex5idade <= 17) {
  console.log(`Pela sua idade, você é Adolescente`);
} else if (ex5idade > 17) {
  console.log(`Pela sua idade, você é Adulto`);
} else {
  console.log(`Opção inválida`);
}

/*---------------------------------------------------*/

// * Exercício 06 - Par ou Ímpar
console.log(`\n\nExercício 06 - Par ou Ímpar`);
let ex6numero = Number(prompt(`Digite um número:`));
if (ex6numero & 0) {
  console.log(`Número Par`);
} else {
  console.log(`Número Ímpar`);
}

/*---------------------------------------------------*/

// * Exercício 07 - Calculadora
console.log(`\n\nExercício 07 - Calculadora`);
let ex7a = Number(prompt(`Digite o primeiro valor:`));
let ex7b = Number(prompt(`Digite o segundo valor:`));
let ex7operacao = Number(prompt(`Escolha a operação desejada:
(1) Adição
(2) Subtração
(3) Multiplicação
(4) Divisão`));

switch (ex7operacao) {
  case 1:
    console.log(`${ex7a} + ${ex7b} = ${ex7a + ex7b}`);
    break;
  case 2:
    console.log(`${ex7a} - ${ex7b} = ${ex7a - ex7b}`);
    break;
  case 3:
    console.log(`${ex7a} * ${ex7b} = ${ex7a * ex7b}`);
    break;
  case 4:
    console.log(`${ex7a} / ${ex7b} = ${ex7a / ex7b}`);
    break;
  default:
    console.log(`Operação desconhecida...`);
    break;
}

/*---------------------------------------------------*/

// * Exercício 08 - Maior entre 3
console.log(`\n\nExercício 08 - Maior entre 3`);
let ex8a = Number(prompt(`Digite o primeiro valor:`));
let ex8b = Number(prompt(`Digite o segundo valor:`));
let ex8c = Number(prompt(`Digite o terceiro valor:`));

if ((ex8a >= ex8b && ex8a > ex8c) || (ex8a > ex8b && ex8a >= ex8c)) {
  console.log(`O maior número é ${ex8a}`);
} else if ((ex8b >= ex8a && ex8b > ex8c) || (ex8b > ex8a && ex8b >= ex8c)) {
  console.log(`O maior número é ${ex8b}`);
} else if ((ex8c >= ex8a && ex8c > ex8b) || (ex8c > ex8a && ex8c >= ex8a)) {
  console.log(`O maior número é ${ex8c}`);
} else {
  console.log(`Todos os valores são iguais (${ex8a})`);
}

/*---------------------------------------------------*/

// * Exercício 09 - Desconto
console.log(`\n\nExercício 09 - Desconto`);
let ex9valor = Number(prompt(`Qual o valor da compra?`));

if (ex9valor > 100) {
  console.log(`Você recebe desconto! (10%)`);
  ex9valor *= 0.9;
}
console.log(`Preço final: ${ex9valor.toFixed(2)}`);

/*---------------------------------------------------*/

// * Exercício 10 - Login
console.log(`\n\nExercício 10 - Login`);
let ex10user = prompt(`Usuário:`);
let ex10pass = prompt(`Senha:`);

if (ex10user == "admin" && ex10pass == "1234") {
  console.log(`Login bem-sucedido!`);
} else {
  console.log(`Acesso negado`);
}

/*---------------------------------------------------*/

// * Exercício 11 - Frete
console.log(`\n\nExercício 11 - Frete`);
let ex11valor = Number(prompt(`Qual o valor da compra?`));

if (ex11valor >= 100) {
  console.log(`Frete grátis!`);
} else if (ex11valor >= 50 && ex11valor < 100) {
  console.log(`Frete de R$10,00`);
  ex11valor += 10;
} else if (ex11valor >= 0 && ex11valor < 50) {
  console.log(`Frete de R$20,00`);
  ex11valor += 20;
} else {
  console.log(`Opção inválida`);
}
console.log(`Valor total: ${ex11valor.toFixed(2)}`);

/*---------------------------------------------------*/

// * Exercício 12 - Idade para convite
console.log(`\n\nExercício 12 - Idade para convite`);
let ex12idade = Number(prompt(`Digite a sua idade:`));
if (ex12idade > 0 && ex12idade < 18) {
  console.log(`Você não pode entrar!`);
} else if (ex12idade >= 18) {
  let ex12convite = String(prompt(`Você tem o convite?`)).toLowerCase();
  if (ex12convite == "sim" || ex12convite == "s") {
    console.log(`Então você pode entrar`);
  } else if (
    ex12convite == "não" ||
    ex12convite == "nao" ||
    ex12convite == "n"
  ) {
    console.log(`Então você não pode entrar`);
  } else {
    console.log(`Opção inválida`);
  }
} else {
  console.log(`Opção inválida`);
}

/*---------------------------------------------------*/

// * Exercício 13 - Notas para conceitos
console.log(`\n\nExercício 13 - Notas para conceitos`);
let ex13nota = Number(prompt(`Digite a sua nota:`));

if (ex13nota >= 90 && ex13nota <= 100) {
  console.log(`Nota A`);
} else if (ex13nota >= 80 && ex13nota < 90) {
  console.log(`Nota B`);
} else if (ex13nota >= 70 && ex13nota < 80) {
  console.log(`Nota C`);
} else if (ex13nota >= 60 && ex13nota < 70) {
  console.log(`Nota D`);
} else if (ex13nota >= 0 && ex13nota < 60) {
  console.log(`Nota F`);
} else {
  console.log(`Opção inválida`);
}

/*---------------------------------------------------*/

// * Exercício 14 - IMC
console.log(`\n\nExercício 14 - IMC`);
let ex14peso = Number(prompt(`Digite a seu peso (em Kg):`));
let ex14altura = Number(prompt(`Digite a sua altura (em cm):`)) / 100.0;
let ex14imc = ex14peso / (ex14altura ** 2);

if (ex14imc < 18.5) {
  console.log(`Abaixo do peso`);
} else if (ex14imc >= 18.5 && ex14imc < 25.0) {
  console.log(`Peso normal`);
} else if (ex14imc >= 25.0 && ex14imc < 30.0) {
  console.log(`Sobrepeso`);
} else if (ex14imc >= 30.0 && ex14imc < 35.0) {
  console.log(`Obesidade I`);
} else if (ex14imc >= 35.0 && ex14imc < 40.0) {
  console.log(`Obesidade II`);
} else {
  console.log(`Obesidade III`);
}

/*---------------------------------------------------*/

// * Exercício 15 - Estoque
console.log(`\n\nExercício 15 - Estoque`);
let ex15estoque = Number(prompt(`Quantos produtos há no estoque?`));

if (ex15estoque >= 10) {
  console.log(`Produto disponível`);
} else if (ex15estoque > 0 && ex15estoque < 10) {
  console.log(`Ultimas unidades!`);
} else if (ex15estoque == 0) {
  console.log(`Esgotado...`);
} else {
  console.log(`Opção inválida`);
}