const inputPedido = document.getElementById("inputPedido");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnAtender = document.getElementById("btnAtender");
const btnLimpar = document.getElementById("btnLimpar");

const total = document.getElementById("total");
const listaPedidos = document.getElementById("listaPedidos");
const pedidosAtendidos = document.getElementById("pedidosAtendidos");
const pedidoAtual = document.getElementById("pedidoAtual");

let pedidos = [];
let atendidos = [];

//* Funcionando
function salvarPedidos() {
  localStorage.setItem("pedidos", JSON.stringify(pedidos));
  total.innerText = pedidos.length;
}

//* Funcionando
function mostrarPedidos() {
  listaPedidos.innerHTML = "";

  pedidos.forEach((pedido, i) => {
    const div = document.createElement("div");
    const li = document.createElement("li");
    const spanTexto = document.createElement("span");
    const botaoRemover = document.createElement("button");

    const spanData = document.createElement("small");

    div.className = "pedidos";

    spanTexto.innerText = pedido.texto;
    spanTexto.style.flex = "1";

    botaoRemover.innerText = "❌";
    botaoRemover.className = "botao-remover";

    spanData.innerText = pedido.hora;
    spanData.className = "data";

    li.addEventListener("click", () => {
      li.classList.toggle("finalizado");
    });

    botaoRemover.addEventListener("click", () => {
      pedidos.splice(i, 1);
      salvarPedidos();
      mostrarPedidos();
    });

    li.appendChild(spanTexto);
    li.appendChild(botaoRemover);

    div.appendChild(li);
    div.appendChild(spanData);

    listaPedidos.appendChild(div);
  });
}

//* Funcionando
function atenderPedido() {
  if (pedidos.length === 0) {
    alert("Não há pedidos para atender!");
    return;
  }
  const pedidoAtendido = pedidos.shift();
  atendidos.push(pedidoAtendido);

  const div = document.createElement("div");
  const li = document.createElement("li");
  const spanTexto = document.createElement("span");
  const spanData = document.createElement("small");
  const botaoRemover = document.createElement("button");

  botaoRemover.innerText = "❌";
  botaoRemover.className = "botao-remover";

  div.className = "pedidos";
  li.className = "concluido";

  spanTexto.innerText = pedidoAtendido.texto;

  const horaAtual = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  spanData.innerText = `Atendido em: ${horaAtual}`;
  spanData.className = "data";

  botaoRemover.addEventListener("click", () => {
    atendidos.splice(pedidos, 1);
    salvarPedidos();
    mostrarPedidos();
  });

  li.appendChild(spanTexto);
  li.appendChild(botaoRemover);

  div.appendChild(li);
  div.appendChild(spanData);

  pedidosAtendidos.appendChild(div);

  salvarPedidos();
  mostrarPedidos();
}

//* Funcionando
function adicionarPedido() {
  const valorPedido = inputPedido.value.trim();
  if (valorPedido === "") {
    return alert("Digite um pedido!");
  }

  const novoPedido = {
    texto: valorPedido,
    hora: new Date().toLocaleString([], {
      dateStyle: "short",
      timeStyle: "short",
      concluido: false,
    }),
  };

  pedidos.push(novoPedido);
  inputPedido.value = "";
  salvarPedidos();
  mostrarPedidos();
}

//* Funcionando
function carregarPedidos() {
  const pedidosSalvos = localStorage.getItem("pedidos");
  if (pedidosSalvos) {
    pedidos = JSON.parse(pedidosSalvos);
    total.innerText = pedidos.length;
    mostrarPedidos();
  }
}

//* Funcionando
function limparTudo() {
  pedidos = [];
  salvarPedidos();
  mostrarPedidos();
}

// Botões
btnAdicionar.addEventListener("click", adicionarPedido);
btnLimpar.addEventListener("click", limparTudo);
btnAtender.addEventListener("click", atenderPedido);
carregarPedidos();
