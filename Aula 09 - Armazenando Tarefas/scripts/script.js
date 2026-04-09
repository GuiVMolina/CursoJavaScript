const inputTarefa = document.getElementById("input-tarefa");
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");
const botaoLimpar = document.getElementById("limpar");
const num = document.getElementById("num");

let tarefas = [{ nome: "", status: false }];

// localStorage
// ↳ Armazenamento local do navegador
// setItem
// ↳ Salva no armazenamento o conteúdo recebido
// JSON.stringify(tarefas)
// ↳ Pega a lista de tarefas, converte para texto (string), e armazena esse texto
function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function mostrarTarefas() {
  listaTarefas.innerHTML = "";
  num.innerText = tarefas.length;

  for (let i = 0; i < tarefas.length; i++) {
    const li = document.createElement("li");

    li.innerText = tarefas[i].nome;

    if (tarefas[i].status === true) {
      li.style.backgroundColor = "hsl(120, 100%, 15%)";
      li.style.textDecoration = "line-through";
    }

    const divBotoes = document.createElement("div");

    // Botão de remover 🗑️
    const botaoRemover = document.createElement("button");
    botaoRemover.innerText = "🗑️";
    botaoRemover.className = "botao-remover";
    botaoRemover.addEventListener("click", () => {
      removerTarefas(i);
    });

    // Botão de concluído ✅
    const botaoConcluido = document.createElement("button");
    botaoConcluido.innerText = "✅";
    botaoConcluido.className = "botao-concluido";
    botaoConcluido.addEventListener("click", () => {
      marcarConcluido(i);
    });

    divBotoes.appendChild(botaoRemover);
    divBotoes.appendChild(botaoConcluido);
    li.appendChild(divBotoes);
    listaTarefas.appendChild(li);
  }
}

// Função para remover tarefas
// splice - (posição inicial, quantidade de itens)
// ↳ Nesse caso, vai remover um item
function removerTarefas(posicaoTarefa) {
  tarefas.splice(posicaoTarefa, 1);

  // Salva o estado atual das tarefas
  salvarTarefas();

  // Mostra as tarefas atualizadas, sem as que foram removidas
  mostrarTarefas();
}

// Função para adicionar tarefas
function adicionarTarefas() {
  const valorTarefa = inputTarefa.value;

  if (tarefas.some((tarefa) => tarefa.nome === valorTarefa)) {
    alert("Já existe uma tarefa assim!");
    return;
  }

  if (valorTarefa === "") {
    alert("Digite uma tarefa!");
    return;
  }

  // Adiciona a tarefa digitada dentro do array
  tarefas.push({
    nome: valorTarefa,
    status: false,
  });

  inputTarefa.value = "";
  salvarTarefas();
  mostrarTarefas();
}

// Função para carregar tarefas salvas no localStorage
function carregarTarefas() {
  // Pega as tarefas e armazena na varável
  const tarefasSalvas = localStorage.getItem("tarefas");

  // Se existir alguma coisa dentro de tarefas salvas
  // ↳ Converte a tarefa e mostra na tela
  if (tarefasSalvas) {
    // Transforma o texto em array
    tarefas = JSON.parse(tarefasSalvas);
    mostrarTarefas();
  }
}

function marcarConcluido(posicao) {
  tarefas[posicao].status = !tarefas[posicao].status;
  salvarTarefas();
  mostrarTarefas();
}

function limparTudo() {
  tarefas = [];
  salvarTarefas();
  mostrarTarefas();
}

botaoAdicionar.addEventListener("click", adicionarTarefas);
botaoLimpar.addEventListener("click", limparTudo);
carregarTarefas();
