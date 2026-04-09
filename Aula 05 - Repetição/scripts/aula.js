//? ========== LAÇOS DE REPETIÇÃO ================= ?//
//* for
//* while
//* do while
//* foreach

//? FOR
for (let i = 1; i <= 5; i++) {
  console.log(`Retição FOR: ${i}`);
}

//? WHILE
let num = 0;
while (num <= 5) {
  console.log(`Retição WHILE: ${num}`);
  num++;
}

//? DO WHILE
let num2 = 0;
do {
  console.log(`Retição DO WHILE: ${num2}`);
  num2++;
} while (num2 <= 5);

//? FOREACH
let array = ["A", "B", "C", "D", "E"];
array.forEach((letra) => {
  console.log(`Retição FOREACH: ${letra}`);
});

/*---------------------------------------------------*/

//* Exemplo 1: Sistema de intervalo definido pelo usuário
let inicio = Number(prompt(`Digite o número inicial:`));
let fim = Number(prompt(`Digite o número final:`));

for (let i = inicio; i <= fim; i++) {
  console.log(i);
}

/*---------------------------------------------------*/

//* Exemplo 2: While com condição para sair do sistema
let valor = "";

while (valor != "sair") {
  valor = String(
    prompt(`Digite um valor (ou "sair" para encerrar):`),
  ).toLowerCase();
  if (valor != "sair") {
    console.log(`Você digitou: ${valor}`);
  } else {
    console.log(`Encerrando o sistema...`);
  }
}

/*---------------------------------------------------*/

//* Exemplo 3: Contador com regra
let limite = Number(prompt(`Mostrar número maiores que...`));

for (let i = 0; i <= 10; i++) {
  if (i > limite) {
    console.log(i);
  }
}

/*---------------------------------------------------*/

//* Exemplo 4: Percorrer um array usando FOR
let cor = ["Vermelho", "Azul", "Verde", "Amarelo", "Roxo"];

for (let i = 0; i < cor.length; i++) {
  console.log(`Posição da cor: ${i} - ${cor[i]}`);
}

/*---------------------------------------------------*/

//* Exemplo 5: Condição dentro do foreach
let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numero.forEach((num) => {
  if(num % 2 == 0) {
    console.log(`Número par: ${num}`);
  } else {
    console.log(`Número ímpar: ${num}`);
  }
});