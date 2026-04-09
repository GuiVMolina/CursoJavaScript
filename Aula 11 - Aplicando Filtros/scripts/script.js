const produtos = [
  { id: 1, nome: "Teclado gamer", categoria: "Periféricos", preco: 120.9 },
  { id: 2, nome: "Mouse sem fio", categoria: "Periféricos", preco: 90.9 },
  { id: 3, nome: "Monitor 24 polegadas", categoria: "Monitores", preco: 799.9 },
  { id: 4, nome: "Headset USB", categoria: "Áudio", preco: 149.9 },
  { id: 5, nome: "Notebook", categoria: "Computadores", preco: 3299.9 },
  { id: 6, nome: "Webcam HD", categoria: "Acessórios", preco: 199.9 },
  { id: 7, nome: "Cadeira Ergonômica", categoria: "Móveis", preco: 850.0 },
  { id: 8, nome: "SSD 1TB NVMe", categoria: "Hardware", preco: 450.0 },
  {
    id: 9,
    nome: "Placa de Vídeo RTX 3060",
    categoria: "Hardware",
    preco: 1899.0,
  },
  { id: 10, nome: "Microfone Condensador", categoria: "Áudio", preco: 320.5 },
  { id: 11, nome: "Roteador Wi-Fi 6", categoria: "Redes", preco: 499.9 },
  {
    id: 12,
    nome: "Suporte para Monitor",
    categoria: "Acessórios",
    preco: 150.0,
  },
  { id: 13, nome: "Caixa de Som Bluetooth", categoria: "Áudio", preco: 210.0 },
  { id: 14, nome: "Hub USB-C 7 em 1", categoria: "Acessórios", preco: 180.0 },
  { id: 15, nome: "Fonte 750W 80 Plus", categoria: "Hardware", preco: 580.0 },
  { id: 16, nome: "Cooler Fan RGB 120mm", categoria: "Hardware", preco: 45.9 },
  { id: 17, nome: "Controle sem fio", categoria: "Periféricos", preco: 350.0 },
  {
    id: 18,
    nome: "Luminária de Mesa LED",
    categoria: "Acessórios",
    preco: 89.9,
  },
  { id: 19, nome: "Placa Mãe B550M", categoria: "Hardware", preco: 980.0 },
  {
    id: 20,
    nome: "Memória RAM 16GB DDR4",
    categoria: "Hardware",
    preco: 320.0,
  },
];

const campoBusca = document.getElementById("campoBusca");
const ordenacao = document.getElementById("ordenacao");
const listaProdutos = document.getElementById("listaProdutos");

function mostrarProdutos() {
  let textoBusca = campoBusca.value.toLowerCase();

  let produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(textoBusca),
  );

  switch (ordenacao.value) {
    case "nome-az":
      produtosFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
      break;
    case "nome-za":
      produtosFiltrados.sort((a, b) => b.nome.localeCompare(a.nome));
      break;
    case "preco-menor":
      produtosFiltrados.sort((a, b) => a.preco - b.preco);
      break;
    case "preco-maior":
      produtosFiltrados.sort((a, b) => b.preco - a.preco);
      break;
  }

  listaProdutos.innerHTML = "";

  if (produtosFiltrados.length === 0) {
    listaProdutos.innerHTML =
      "<p class='mensagem'>Nenhum produto encontrado</p>";
    return;
  }

  for (let i = 0; i < produtosFiltrados.length; i++) {
    let produto = produtosFiltrados[i];
    listaProdutos.innerHTML += `
      <div class="card">
        <h2>${produto.nome}</h2>
        <p>Categoria: ${produto.categoria}</p>
        <p>Preço: R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
      </div>`;
  }
}

campoBusca.addEventListener("input", mostrarProdutos);
ordenacao.addEventListener("change", mostrarProdutos);

// Eventos
campoBusca.addEventListener("input", () => {
  mostrarProdutos();
});

ordenacao.addEventListener("change", () => {
  mostrarProdutos();
});

mostrarProdutos();
