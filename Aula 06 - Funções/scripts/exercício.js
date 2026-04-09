//* Exercício 1 - Lista numerada
console.log(`Exercício 1 - Lista numerada`);
let ex1array = ["Ana", "Carlos", "Eduardo", "Gustavo", "Iago"];
for (let i = 0; i < 5; i++) {
  console.log(`${i} - ${ex1array[i]}`);
}

/*---------------------------------------------------*/

//* Exercício 2 - Exibir posições
console.log(`\n\nExercício 2 - Exibir posições`);
let ex2array = ["Azul", "Vermelho", "Amarelo", "Verde"];
let ex2posicao = 1;
for (let i = 0; i < 4; i++) {
  console.log(`A cor ${ex2array[i]} está na ${ex2posicao++}º posição`);
}

/*---------------------------------------------------*/

//* Exercício 3 - Primeiro e último
console.log(`\n\nExercício 3 - Primeiro e último`);
let ex3array = ["A", "B", "C", "D", "E"];
let ex3first = ex3array.at(0);
let ex3last = ex3array.at(-1);
console.log(
  `O primeiro e o último são respectivamente: ${ex3first} e ${ex3last}`,
);

/*---------------------------------------------------*/

//* Exercício 4 - Contagem de itens
console.log(`\n\nExercício 4 - Contagem de itens`);
let ex4array = ["Pera", "Uva", "Maçã", "Lanraja", "Melancia"];
console.log(`Há ${ex4array.length} frutas: ${ex4array.join(", ")}`);

/*---------------------------------------------------*/

//* Exercício 5 - Filtrar por posição
console.log(`\n\nExercício 5 - Filtrar por posição`);
let ex5array = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
let ex5arrayPar = [];
for (let i = 0; i < ex5array.length; i++) {
  i % 2 == 0 ? ex5arrayPar.push(ex5array[i]) : "";
}
console.log(ex5arrayPar.join(", "));

/*---------------------------------------------------*/

//* Exercício 6 - Destacar item específico
console.log(`\n\nExercício 6 - Destacar item específico`);
let ex6array = ["NomeA", "NomeB"];
ex6array.push("NomeEspecial");
console.log(`Nomes: ${ex6array.join(", ")}`);

/*---------------------------------------------------*/

//* Exercício 7 - Transformar com índice
console.log(`\n\nExercício 7 - Transformar com índice`);
let ex7array = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
let ex7map = ex7array.map((num) => num * 10);
console.log(`${ex7map.join(", ")}`);

/*---------------------------------------------------*/

//* Exercício 8 - Verificar posição
console.log(`\n\nExercício 8 - Verificar posição`);
let ex8array = ["Mouse", "Teclado", "Notebook", "Monitor", "Fone"];
let ex8slice = ex8array.slice(2, ex8array.length);
console.log(`Produtos: ${ex8slice.join(", ")}`);

/*---------------------------------------------------*/

//* Exercício 9 - Verificar posição
console.log(`\n\nExercício 9 - Verificar posição`);
let ex9array = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
let ex9find = ex9array.find((num) => num > 50);
console.log(`Posição > 50: ${ex9find}`);

/*---------------------------------------------------*/

//* Exercício 10 - Ranking simples
console.log(`\n\nExercício 10 - Ranking simples`);
let ex10array = ["Ana", "Carlos", "Eduardo", "Gustavo", "Iago"];
let ex10posicao = 1;
for (let i = 0; i < 5; i++) {
  console.log(`${ex10posicao++}º posição: ${ex10array[i]}`);
}

/*---------------------------------------------------*/

//* Exercício 11 - Separar por posição
console.log(`\n\nExercício 11 - Separar por posição`);
let ex11array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let ex11arrayPar = [];
let ex11arrayImpar = [];
for (let i = 0; i < ex11array.length; i++) {
  ex11array[i] % 2 == 0
    ? ex11arrayPar.push(ex11array[i])
    : ex11arrayImpar.push(ex11array[i]);
}
console.log(`Números pares: ${ex11arrayPar.join(", ")}`);
console.log(`Números ímpares: ${ex11arrayImpar.join(", ")}`);

/*---------------------------------------------------*/

//* Exercício 12 - Montar frase
console.log(`\n\nExercício 12 - Montar frase`);
let ex12array = ["JS", "é", "muito", "bom", "!"];
console.log(`Frase concatenada: ${ex12array.join(" ")}`);

/*---------------------------------------------------*/

// //* Exercício 13 - Buscar e mostrar posição
// console.log(`\n\nExercício 13 - Buscar e mostrar posição`);
// let ex13array = ["Ana", "Carlos", "Eduardo", "Gustavo", "Iago"];
// let ex13prompt = prompt(`De qual posição deseja ver o nome? (1-5)`);
// while (ex13prompt < 1 || ex13prompt > 5) {
//   ex13prompt = prompt(`Valor inválido. Digite um número entre 1 e 5:`);
// }
// console.log(`Nome Escolhido (${ex13prompt}): ${ex13array[--ex13prompt]}`);

/*---------------------------------------------------*/

//* Exercício 14 - Marcar itens
console.log(`\n\nExercício 14 - Marcar itens`);
let ex14array = ["Banco de dados", "MVC", "API", "Daily", "Kanban", "Scaffold"];
let ex14posicao = 1;
for (let i = 0; i < ex14array.length; i++) {
  console.log(`${ex14array[i]} - tarefa[${ex14posicao++}]`);
}
