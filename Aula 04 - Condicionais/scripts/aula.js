//? ========== CONDICIONAIS ======================= ?//
//* if      -> Se
//* else    -> Senão
//* else if -> Senão se
//* switch  -> Escolha

//? ========== OPERADORES LÓGICOS ================= ?//
/*
  ?  Operador   Símbolo   Descrição
  *  AND        &&        Igual a (com conversão de tipo)
  *  OR         ||        Estritamente igual a (sem conversão de tipo)
  *  NOT        !         Diferente de (com conversão de tipo)
  */

// AND           //true   //true
let operadorAnd = 5 > 3 && 2 < 4; //* true
console.log(operadorAnd);

// OR            //false  //true
let operadorOu = 5 < 3 || 2 < 4; //* true
console.log(operadorOu);

// NOT            //true
let operadorNao = !(5 > 3); //! false
console.log(operadorNao);

/*---------------------------------------------------*/

//* Exemplo 1: Verificar a temperatura
let temperatura = Number(prompt("Digite a temperatura atual:"));
if (temperatura < 20) {
  alert(`Está frio!`);
} else {
  alert(`Está quente!`);
}

// Ternário
temperatura < 20 ? console.log(`Está frio!`) : console.log(`Está quente!`);

/*---------------------------------------------------*/

//* Exemplo 2: Verificar o nível da bateria (em %)
let bateria = Number(prompt(`Digite o nível da bateria (%):`));

if (bateria <= 50) {
  alert(`Bateria fraca!`);
} else {
  alert(`Bateria carregada!`);
}

bateria <= 50
  ? console.log(`Bateria fraca!`)
  : console.log(`Bateria carregada!`);

/*---------------------------------------------------*/

//* Exemplo 3: Sistema de acesso
let tipoUsuario = String(
  prompt(`Digite o tipo de usuário (admin, cliente):`),
).toLowerCase();

if (tipoUsuario == "admin") {
  alert(`Acesso total ao sistema`);
} else if (tipoUsuario == "cliente") {
  alert(`Acesso limitado ao sistema`);
} else {
  alert(`Tipo de usuário "${tipoUsuario}" inválido`);
}

tipoUsuario == "admin"
  ? console.log(`Acesso total ao sistema`)
  : tipoUsuario == "cliente"
    ? console.log(`Acesso limitado ao sistema`)
    : console.log(`Tipo de usuário "${tipoUsuario}" inválido`);

/*---------------------------------------------------*/

//* Exemplo 4: Classificar qualidade de conexão da internet
let velocidade = Number(prompt(`Digite a velocidade da internet:`));

if (velocidade >= 100) {
  alert(`Internet rápida!`);
} else if (velocidade >= 50) {
  alert(`Internet é média`);
} else {
  alert(`Internet lenta...`);
}

velocidade >= 100
  ? console.log(`Internet rápida!`)
  : velocidade >= 50
    ? console.log(`Internet é média`)
    : console.log(`Internet lenta...`);

/*---------------------------------------------------*/

//* Exemplo 5: Analisar volume de itens
let quantidade = 50;
if (quantidade === 0) {
  console.log(`Nenhum item selecionado`);
} else if (quantidade < 5) {
  console.log(`Poucos itens`);
} else if (quantidade >= 5 && quantidade < 10) {
  console.log(`Quantidade média de itens`);
} else if (quantidade >= 10) {
  console.log(`Muitos itens`);
} else {
  console.log(`Opção inválida`);
}

/*---------------------------------------------------*/

// Condicional Aninhada
//* Exemplo 6: Boletim de prova
const nota = 8;

if (nota >= 7) {
  if (nota === 10) {
    console.log(`Aprovado com premiação!`);
  } else {
    console.log(`Aprovado!`);
  }
} else if (nota >= 5) {
  console.log(`Em recuperação!`);
} else {
  console.log(`Reprovado!`);
}

/*---------------------------------------------------*/

//* Exemplo 7: Adaptação de tela de dispositivo
let dispositivo = String(prompt(
  `Você está usando: celular, tablet ou computador?`,
)).toLowerCase();

if (dispositivo == "celular" || dispositivo == "tablet") {
  console.log(`Modo mobile foi ativado`);
} else if (dispositivo == "computador") {
  console.log(`Modo desktop foi ativado`);
} else {
  console.log(`Dispositivo desconhecido`);
}

/*---------------------------------------------------*/

//* Exemplo 8: Mudar tema do sistema
let tema = prompt(`Digite um tema: claro, escuro ou azul`);

switch (tema) {
  case "claro":
    console.log(`Tema claro ativado!`);
    break;
  case "escuro":
    console.log(`Tema escuro ativado!`);
    break;
  case "azul":
    console.log(`Tema azul ativado!`);
    break;
  default:
    console.log(`Tema desconhecido`);
    break;
}