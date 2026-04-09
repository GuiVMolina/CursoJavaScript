//? ========== VARIÁVEIS ========================== ?//
//*  const - constante, ou seja, o valor não pode ser alterado
//*  let - variável, ou seja, o valor pode ser alterado
//*  var - variável, ou seja, o valor pode ser alterado (não recomendado)

// "Caixinha" idade recebe o valor 30
const idade = 20;

// "Caixinha" nome recebe o valor "Guilherme",
// ↳ mas pode ser alterado posteriormente
let nome = "Giuliano";

// "Caixinha" sobrenome recebe o valor "Molina",
// ↳ mas pode ser alterado posteriormente (não recomendado)
var sobrenome = "Chicarelli";

// Exibindo o valor das "caixinhas" no console do navegador
console.log(idade);     // Imprime o valor 30
console.log(nome);      // Imprime o valor 'Guilherme'
console.log(sobrenome); // Imprime o valor 'Molina'

/*---------------------------------------------------*/

//? ========== ALTERANDO VALORES ================== ?//
console.log("Alterando o valor da variável nome: " + nome);
nome = "Guilherme";
console.log("Novo valor da variável nome: " + nome);

console.log("Alterando o valor da variável sobrenome: " + sobrenome);
sobrenome = "Molina";
console.log("Novo valor da variável sobrenome: " + sobrenome);

//! Isso causará um erro, pois idade é uma constante
// console.log("Alterando o valor da variável idade: " + idade);
// idade = 19;
// console.log("Não é possível mudar a variável idade!");

/*---------------------------------------------------*/

//? ========== INTERPOLAÇÃO ======================= ?//
console.log(`O nome completo é: ${nome} ${sobrenome}\nTenho ${idade} anos`);
console.log(
  "O nome completo é: " + nome + " " + sobrenome + "\nTenho " + idade + " anos",
);

/*---------------------------------------------------*/

//? ========== TIPOS DE DADOS ===================== ?//
//* 1. String - texto, ou seja, uma sequência de caracteres
let mensagem = "Olá, mundo!";
console.log(mensagem);
console.log(typeof mensagem); // Imprime o tipo de dado da variável mensagem

//* 2. Number - números, ou seja, valores numéricos
let number = 42; // Número inteiro
console.log(number);
console.log(typeof number);

let pi = 3.14; // Número decimal
console.log(pi);

//* 3. Boolean - valores lógicos, ou seja, verdadeiro (true) ou falso (false)
let isJavaScriptFun = true;
console.log(isJavaScriptFun);
console.log(typeof isJavaScriptFun);

let isRaining = false;
console.log(isRaining);

//* 4. Undefined - valor indefinido, ou seja, uma variável que foi declarada mas não recebeu um valor
let valorIndefinido;
console.log(valorIndefinido);
console.log(typeof valorIndefinido);

//* 5. Null - valor nulo, ou seja, uma variável que foi declarada e recebeu o valor nulo
let valorNulo = null;
console.log(valorNulo);
console.log(typeof valorNulo); // Imprime 'object'
// ↳ null é considerado um tipo de objeto em JavaScript

/*---------------------------------------------------*/

//? ========== CONVERSÃO DE TIPOS ================= ?//
//* Conversão implícita
console.log("5" + 3);
console.log("5" - 3);

//* Conversão explícita
// String para número
let numero = "42";          // Variável do tipo string
console.log(numero);
console.log(typeof numero); // Imprime 'string'

let numeroConvertido = Number(numero); // Convertendo a string para número
console.log(numeroConvertido);
console.log(typeof numeroConvertido);  // Imprime 'number'

// Número para string
let num = 100;             // Variável do tipo number
console.log(num);
console.log(typeof num);   // Imprime 'number'

let texto = String(num);   // Convertendo o number para string
console.log(texto);
console.log(typeof texto); // Imprime 'string'

// Boolean para number
let trueConvertido = Number(true);   // Convertendo o boolean para number
console.log(trueConvertido);
console.log(typeof trueConvertido);  // Imprime 'number'

let falseConvertido = Number(false); // Convertendo o boolean para number
console.log(falseConvertido);
console.log(typeof falseConvertido); // Imprime 'number'

//? ========== OPERADORES RELACIONAIS ============= ?//
//* Servem para comparar valores e retornar um resultado booleano (true ou false)
/*
  ?  Operador   Descrição
  *  ==         Igual a (com conversão de tipo)
  *  ===        Estritamente igual a (sem conversão de tipo)
  *  !=         Diferente de (com conversão de tipo)
  *  !==        Estritamente diferente de (sem conversão de tipo)
  *  >          Maior que
  *  <          Menor que
  *  >=         Maior ou igual a
  *  <=         Menor ou igual a
  */

//* Exemplos:
console.log(10 > 5);    //* true
console.log(10 < 5);    //! false
console.log(5 == "5");  //* true   (com conversão de tipo)
console.log(5 === "5"); //! false  (sem conversão de tipo)

//? ========== OPERADORES MATEMÁTICOS  ============ ?//
//* Servem para fazer cálculos matemáticos e retornar um resultado numérico
// ↳ ex: Soma, Subtração, Multiplicação, Divisão, Resto da divisão, Incremento e Decremento
/*
  ?  Operador   Descrição
  *  +          Soma
  *  -          Subtração
  *  *          Multiplicação
  *  /          Divisão
  *  %          Resto da divisão
  *  **         Exponenciação (potenciação)
  *  ++         Incremento (aumenta o valor em 1)
  *  --         Decremento (diminui o valor em 1)
*/

//* Exemplos:
let a = 10;
let b = 2;


console.log(a + b);   // (+) Soma             // 12
console.log(a - b);   // (-) Subtração        // 8
console.log(a * b);   // (*) Multiplicação    // 20
console.log(a / b);   // (/) Divisão          // 5
console.log(a % b);   // (%) Resto da divisão // 0
console.log(a ** b);  // (**) Exponenciação   // 100
console.log(++a);     // (++) Incremento      // 11
console.log(--b);     // (--) Decremento      // 1

//OBS:
//* O operador de incremento (++) e decremento (--) pode ser usado antes ou depois da variável
// ↳ Ex: ++a ou a++

// A diferença é que quando usado antes da variável,
// ↳ O valor é incrementado ou decrementado antes de ser usado na expressão
// Quando usado depois da variável,
// ↳ O valor é incrementado ou decrementado depois de ser usado na expressão