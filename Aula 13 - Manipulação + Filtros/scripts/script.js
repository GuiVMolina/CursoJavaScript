const produtos = [
  {
    id: 1,
    nome: "Teclado gamer",
    categoria: "Periféricos",
    preco: 120.9,
    imagem: "teclado",
  },
  {
    id: 2,
    nome: "Mouse sem fio",
    categoria: "Periféricos",
    preco: 90.9,
    imagem: "mouse",
  },
  {
    id: 3,
    nome: "Monitor 24 polegadas",
    categoria: "Monitores",
    preco: 799.9,
    imagem: "monitor",
  },
  {
    id: 4,
    nome: "Headset Bluetooth",
    categoria: "Áudio",
    preco: 149.9,
    imagem: "headset",
  },
  {
    id: 5,
    nome: "Notebook",
    categoria: "Computadores",
    preco: 3299.9,
    imagem: "notebook",
  },
  {
    id: 6,
    nome: "Webcam HD",
    categoria: "Acessórios",
    preco: 199.9,
    imagem: "webcam",
  },
  {
    id: 7,
    nome: "Cadeira Ergonômica",
    categoria: "Móveis",
    preco: 850.0,
    imagem: "cadeiraErgonomica",
  },
  {
    id: 8,
    nome: "SSD 1TB NVMe",
    categoria: "Hardware",
    preco: 450.0,
    imagem: "ssd",
  },
  {
    id: 9,
    nome: "Placa de Vídeo RTX 3060",
    categoria: "Hardware",
    preco: 1899.0,
    imagem: "placaVideo",
  },
  {
    id: 10,
    nome: "Microfone Condensador",
    categoria: "Áudio",
    preco: 320.5,
    imagem: "microfone",
  },
  {
    id: 11,
    nome: "Roteador Wi-Fi 6",
    categoria: "Redes",
    preco: 499.9,
    imagem: "roteador",
  },
  {
    id: 12,
    nome: "Suporte para Monitor",
    categoria: "Acessórios",
    preco: 150.0,
    imagem: "suporteMonitor",
  },
  {
    id: 13,
    nome: "Caixa de Som Bluetooth",
    categoria: "Áudio",
    preco: 210.0,
    imagem: "caixaSom",
  },
  {
    id: 14,
    nome: "Hub USB-C 7 em 1",
    categoria: "Acessórios",
    preco: 180.0,
    imagem: "hub",
  },
  {
    id: 15,
    nome: "Fonte 750W 80 Plus",
    categoria: "Hardware",
    preco: 580.0,
    imagem: "fonte",
  },
  {
    id: 16,
    nome: "Cooler Fan RGB 120mm",
    categoria: "Hardware",
    preco: 45.9,
    imagem: "cooler",
  },
  {
    id: 17,
    nome: "Controle sem fio PS5",
    categoria: "Periféricos",
    preco: 350.0,
    imagem: "controle",
  },
  {
    id: 18,
    nome: "Luminária de Mesa LED",
    categoria: "Acessórios",
    preco: 89.9,
    imagem: "luminaria",
  },
  {
    id: 19,
    nome: "Placa Mãe B550M",
    categoria: "Hardware",
    preco: 980.0,
    imagem: "placaMae",
  },
  {
    id: 20,
    nome: "Memória RAM 16GB DDR4",
    categoria: "Hardware",
    preco: 320.0,
    imagem: "memoriaRam",
  },
];

const campoBusca = document.getElementById("campoBusca");
const ordenacao = document.getElementById("ordenacao");
const listaProdutos = document.getElementById("listaProdutos");
const filtrosCategoria = document.querySelectorAll(".check-categoria");

function mostrarProdutos() {
  const textoBusca = campoBusca.value.toLowerCase();

  // 1. Captura as categorias marcadas
  const categoriasSelecionadas = Array.from(filtrosCategoria)
    .filter((input) => input.checked)
    .map((input) => input.value);

  // 2. Filtra os produtos
  let produtosFiltrados = produtos.filter((produto) => {
    const condicaoNome = produto.nome.toLowerCase().includes(textoBusca);

    // Se nada estiver marcado ignora o filtro de categoria
    const semFiltro =
      categoriasSelecionadas.length === 0;
    const condicaoCategoria =
      semFiltro || categoriasSelecionadas.includes(produto.categoria);

    return condicaoNome && condicaoCategoria;
  });

  // 3. Ordenação
  const order = ordenacao.value;
  if (order === "nome-az")
    produtosFiltrados.sort((a, b) => a.nome.localeCompare(b.nome));
  else if (order === "nome-za")
    produtosFiltrados.sort((a, b) => b.nome.localeCompare(a.nome));
  else if (order === "preco-menor")
    produtosFiltrados.sort((a, b) => a.preco - b.preco);
  else if (order === "preco-maior")
    produtosFiltrados.sort((a, b) => b.preco - a.preco);

  // 4. Renderização Eficiente
  if (produtosFiltrados.length === 0) {
    listaProdutos.innerHTML =
      "<p class='mensagem'>Nenhum produto encontrado</p>";
    return;
  }
  const htmlProdutos = produtosFiltrados
    .map(
      (produto) => `
      <div class="card">
        <img src="img/${produto.imagem}.webp" alt="${produto.nome}" />
        <div>
          <h2>${produto.nome}</h2>
          <p>Categoria: ${produto.categoria}</p>
          <p>Preço: R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
        </div>
      </div>
  `,
    )
    .join("");

  listaProdutos.innerHTML = htmlProdutos;
}

// Event Listeners
campoBusca.addEventListener("input", mostrarProdutos);
ordenacao.addEventListener("change", mostrarProdutos);
filtrosCategoria.forEach((checkbox) => {
  checkbox.addEventListener("change", mostrarProdutos);
});

// Inicialização
mostrarProdutos();
