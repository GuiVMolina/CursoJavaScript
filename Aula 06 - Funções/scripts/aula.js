//? ========== FUNÇÕES NATIVAS DO JS ============== ?//
//* 1. Mantém o código limpo e organizado
//* 2. Evita repetição
//* 3. Usamos (principalmente) ao trabalhar com array

/*---------------------------------------------------*/

//? MAP
let numerosMap = [1, 2, 3, 4];
let numerosDobrados = numerosMap.map((num) => num * 2);

//[2, 4, 3, 8]
console.log(numerosDobrados);

// Quando precisamos usar o return?
// ↳ Quando a função precisar ter mais de uma linha...

numerosMap.map((num) => {
  let resultado = num * 2;
  return resultado;
});

/*---------------------------------------------------*/

//? FILTER
let numerosFilter = [5, 10, 15, 20];
let maioresQueDez = numerosFilter.filter((num) => num > 10);

//[15, 20]
console.log(maioresQueDez);

/*---------------------------------------------------*/

//? REDUCE
let numerosReduce = [1, 2, 3, 4];
let soma = numerosReduce.reduce((total, num) => total + num);

// 10
console.log(soma);

/*---------------------------------------------------*/

//? FIND
let produtos = [
  { id: 1, nome: "Teclado", preco: 50 },
  { id: 2, nome: "Mouse", preco: 30 },
];
let item = produtos.find((produto) => produto.id === 2);

// {id: 2, nome: 'Mouse', preco: 30}
console.log(item);

/*---------------------------------------------------*/

//? SPLIT
let frase = "JS é muito bom!";
let palavras = frase.split(" ");
let letras = frase.split("");

// ['JS', 'é', 'muito', 'bom!']
console.log(palavras);

// ['J', 'S', ' ', 'é', ' ', 'm', 'u', 'i', 't', 'o', ' ', 'b', 'o', 'm', '!']
console.log(letras);

/*---------------------------------------------------*/

//? TRIM
let nomeTrim = "   João Pedro   ";
let nomeLimpo = nomeTrim.trim();

// João Pedro
console.log(nomeLimpo);

/*---------------------------------------------------*/

//? INCLUDES
let frutas = ["Maçã", "Banana"];
let frutasIncludes = frutas.includes("Banana");

// true
console.log(frutasIncludes);

/*---------------------------------------------------*/

//? TOLOWERCASE / TOUPPERCASE
let nome = "KÉSSIA";
let cargo = "instrutora";

// késsia
console.log(nome.toLowerCase());

// INSTRUTORA
console.log(cargo.toUpperCase());

/*---------------------------------------------------*/

//? FOREACH
let nomesForeach = ["Pedro", "João", "Guilherme"];

// Seu nome é: nome
nomesForeach.forEach((nome) => console.log("Seu nome é: " + nome));

/*---------------------------------------------------*/

//? SOME
let numerosSome = [1, 3, 5, 8];
let temPar = numerosSome.some((num) => num % 2 === 0);

// true
console.log(temPar);

/*---------------------------------------------------*/

//? EVERY
let numerosEvery = [1, 3, 5, 8];
let todosPares = numerosEvery.every((num) => num % 2 === 0);

// false
console.log(todosPares);

/*---------------------------------------------------*/

//? SORT
let letrasSort = ["c", "a", "x", "h"];
let numerosSort = [3, 5, 2, 4];

// ['a', 'c', 'h', 'x']
letrasSort.sort();
console.log(letrasSort);

// [2, 3, 4, 5]
numerosSort.sort((a, b) => a - b);
console.log(numerosSort);

/*---------------------------------------------------*/

//? REVERSE
let numerosReverse = [1, 2, 3];

// [3, 2, 1]
numerosReverse.reverse();
console.log(numerosReverse);

/*---------------------------------------------------*/

//? JOIN
let palavrasJoin = ["JS", "é", "muito", "bom"];
let fraseJoin = palavras.join(" ");

// JS é muito bom!
console.log(fraseJoin);

/*---------------------------------------------------*/

//? PUSH / POP
let lista1 = ["A", "B"];

// ['A', 'B', 'C']
lista1.push("C"); // Adiciona
console.log(lista1);

// ['A', 'B']
lista1.pop(); // Remove
console.log(lista1);

/*---------------------------------------------------*/

//? SHIFT / UNSHIFT
let lista2 = ["B", "C"];

// ['A', 'B']
lista2.unshift("A"); // Adiciona
console.log(lista2);

// ['A', 'B', 'C']
lista2.shift(); // Remove
console.log(lista2);

/*---------------------------------------------------*/

//? SLICE
let numerosSlice = [1, 2, 3, 4];
let parteSlice = numerosSlice.slice(1, 3);

// [2, 3]
console.log(parteSlice);

/*---------------------------------------------------*/

//? SPLICE
let numerosSplice = [1, 2, 3, 4];
numerosSplice.splice(1, 1);

// [1, 3, 4]
console.log(numerosSplice);

let frutasSplice = ["Banana", "Laranja", "Maçã", "Manga"];
frutasSplice.splice(0, 3, "Limão", "Kiwi");

// ['Limão', 'Kiwi', 'Manga']
console.log(frutasSplice);

let frutasNovas = ["Banana", "Laranja", "Maçã", "Manga"];
frutasNovas.splice(2, 0, "Limão", "Kiwi");

// ['Banana', 'Laranja', 'Limão', 'Kiwi', 'Maçã', 'Manga']
console.log(frutasNovas);

/*---------------------------------------------------*/

//? REPLACE
let texto = "Olá mundo!";
let novoTexto = texto.replace("mundo", "cliente");

// Olá cliente!
console.log(novoTexto);