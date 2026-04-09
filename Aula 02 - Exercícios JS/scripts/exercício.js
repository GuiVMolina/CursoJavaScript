// * Exercício 1 — Perfil
let nome = "Guilherme";
let idade = 20;
let profissao = "Dev. Fullstack";
let cidade = "São Paulo";

console.log(`Meu nome é ${nome}, tenho ${idade} anos, sou ${profissao} e moro em ${cidade}`);

/*---------------------------------------------------*/

// * Exercício 2 — Produto
let produto = "Notebook";
let preco = 2500.00;
let quantidade = 3;

console.log(`Comprei ${quantidade} unidades de ${produto}s por R$${preco.toFixed(2)} cada
Totalizando R$${(preco * quantidade).toFixed(2)}`);

/*---------------------------------------------------*/

// * Exercício 3 — Calculando valores
let valor1 = 10;
let valor2 = 5;

console.log(`${valor1} + ${valor2} = ${valor1 + valor2}
${valor1} - ${valor2} = ${valor1 - valor2}
${valor1} * ${valor2} = ${valor1 * valor2}
${valor1} / ${valor2} = ${valor1 / valor2}`);

/*---------------------------------------------------*/

// * Exercício 4 — Tipos
let tipo1 = "10";
console.log(`O valor é: ${tipo1}
Seu tipo é: ${typeof tipo1}`);

var tipo2 = 10;
console.log(`O valor é: ${tipo2}
Seu tipo é: ${typeof tipo2}`);

const tipo3 = true;
console.log(`O valor é: ${tipo3}
Seu tipo é: ${typeof tipo3}`);

var tipo4 = null;
console.log(`O valor é: ${tipo4}
Seu tipo é: ${typeof tipo4}`);

let tipo5;
console.log(`O valor é: ${tipo5}
Seu tipo é: ${typeof tipo5}`);

/*---------------------------------------------------*/

// * Exercício 5 — Conversões
let numero = "100";
console.log(`Número original: ${numero}
Seu tipo é: ${typeof numero}`);

let numeroConvertido = Number(numero);
console.log(`Número original: ${numeroConvertido}
Seu tipo é: ${typeof numeroConvertido}`);

numeroConvertido = String(numero);
console.log(`Número original: ${numeroConvertido}
Seu tipo é: ${typeof numeroConvertido}`);

/*---------------------------------------------------*/

// * Desafio - Mini-cadastro
let nomeUsuario = "Giuliano";
let idadeUsuario = 19;
let alturaUsuario = 1.70;
let pesoUsuario = 100.00;
let cidadeUsuario = "São Bernado";
let profissaoUsuario = "Dev. Fullstack";

console.log(`Cadastro do usuário:
Nome: ${nomeUsuario}
Idade: ${idadeUsuario} anos
Altura: ${alturaUsuario.toFixed(2)}m
Peso: ${pesoUsuario}Kg
Cidade: ${cidadeUsuario}
Profissão: ${profissaoUsuario}`);