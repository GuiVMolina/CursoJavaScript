//* Desafio1 - Lista de produtos
console.log(`\n\nDesafio1 - Lista de produtos`);
const produtoD1 = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse", preco: 150 },
  { id: 3, nome: "Teclado", preco: 200 },
  { id: 4, nome: "Monitor", preco: 1200 },
];

//* Filtrar produtos com preço acima de 500
// [{ id: 1, nome: "Notebook", preco: 3500 }, { id: 4, nome: "Monitor", preco: 1200 }]
let filter = produtoD1.filter((filter) => filter.preco > 500);
console.log(filter);

//* Encontrar o primeiro produto chamado "Mouse"
// { id: 2, nome: "Mouse", preco: 150 }
let find = produtoD1.find((produto) => produto.nome == "Mouse");
console.log(find);

//* Criar um array apenas com os nomes dos produtos
// ["Notebook", "Mouse", "Teclado", "Monitor"]
let map = produtoD1.map((produto) => " " + produto.nome);
console.log("Produtos:" + map);

//* Somar todos os preços dos produtos usando reduce
// 5050
let reduce = produtoD1.reduce((total, produto) => total + produto.preco, 0);
console.log("Total dos preços: R$" + reduce.toFixed(2));

/*---------------------------------------------------*/

//* Desafio2 - Sistema de escolha
console.log(`\n\nDesafio2 - Sistema de escolha`);

const produtoD2 = [
  { id: 1, nome: "Notebook", cor: "Azul", preco: 3500 },
  { id: 2, nome: "Mouse", cor: "Roxo", preco: 150 },
  { id: 3, nome: "Teclado", cor: "Vermelho", preco: 200 },
  { id: 4, nome: "Monitor", cor: "Preto", preco: 1200 },
  { id: 5, nome: "Notebook", cor: "Preto", preco: 3500 },
  { id: 6, nome: "Mouse", cor: "Vermelho", preco: 150 },
  { id: 7, nome: "Teclado", cor: "Roxo", preco: 200 },
  { id: 8, nome: "Monitor", cor: "Azul", preco: 1200 },
];

const opcoesValidas = ["id", "nome", "cor", "preco", "preço"];
let escolha = prompt("Pelo que deseja filtrar? (ID, Nome, Cor ou Preço)").toLowerCase();

while (!opcoesValidas.includes(escolha)) {
  escolha = prompt("Opção inválida! Digite ID, Nome, Cor ou Preço:").toLowerCase();
}

let listaParaExibir = [];

if (escolha !== "id") {
  let chave = escolha === "preço" ? "preco" : escolha;
  let busca = prompt(`Qual ${escolha} você está procurando?`);
  
  listaParaExibir = produtoD2.filter((produto) => {
    return produto[chave].toString().toLowerCase() === busca.toLowerCase();
  });

  if (listaParaExibir.length > 0) {
    console.log(`\nProdutos encontrados com ${escolha} "${busca}":`);
    listaParaExibir.forEach((produto, index) => {
      console.log(`${index + 1} - ${produto.nome} (${produto[chave]})`);
    });
  } else {
    console.log(`\nNenhum item encontrado para ${escolha}: ${busca}`);
  }
} else {
  listaParaExibir = produtoD2;
  console.log(`\nLista completa de produtos:`);
  listaParaExibir.forEach((prod, i) => {
    console.log(`${i + 1} - ${prod.nome} (ID: ${prod.id})`);
  });
}

if (listaParaExibir.length > 0) {
  let indiceEscolhido = Number(prompt(`Escolha o item pelo número (1 a ${listaParaExibir.length}):`)) - 1;

  while (isNaN(indiceEscolhido) || indiceEscolhido < 0 || indiceEscolhido >= listaParaExibir.length) {
    indiceEscolhido = Number(prompt(`Índice inválido! Digite um número entre 1 e ${listaParaExibir.length}:`)) - 1;
  }

  console.log("\n✅ Resultado da sua escolha:");
  console.log(listaParaExibir[indiceEscolhido]);
}