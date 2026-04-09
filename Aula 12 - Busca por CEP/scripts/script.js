//* Dados mockados
// const cepsMockados = {
//   "01001000": {
//     logradouro: "Praça da Sé",
//     bairro: "Sé",
//     localidade: "São Paulo",
//     uf: "SP",
//   },
//   "20040002": {
//     logradouro: "Rua da Assembleia",
//     bairro: "Centro",
//     localidade: "Rio de Janeiro",
//     uf: "RJ",
//   },
//   "30140071": {
//     logradouro: "Avenida Brasil",
//     bairro: "Santa Efigênia",
//     localidade: "Belo Horizonte",
//     uf: "MG",
//   },
//   "80010000": {
//     logradouro: "Praça Tiradentes",
//     bairro: "Centro",
//     localidade: "Curitiba",
//     uf: "PR",
//   },
// };

const campoCep = document.getElementById("cep");
const campoRua = document.getElementById("rua");
const campoBairro = document.getElementById("bairro");
const campoCidade = document.getElementById("cidade");
const campoEstado = document.getElementById("estado");
const botaoBuscar = document.getElementById("botao-buscar");

function preencherCampos(dados) {
  campoRua.value = dados.logradouro;
  campoBairro.value = dados.bairro;
  campoCidade.value = dados.localidade;
  campoEstado.value = dados.uf;
}

function limparCampos() {
  campoRua.value = "";
  campoBairro.value = "";
  campoCidade.value = "";
  campoEstado.value = "";
}

//* Com dados mockados
// D - Pega o valor digitado e remove tudo o que não for número
// d - Pega o valor digitado e remove tudo o que for número (0 - 9)
// g - Serve como um "global", passando a informação para todos os caracteres
// function buscarCep() {
//   const cep = campoCep.value.replace(/\D/g, "").trim();

//   if (cep.length !== 8) {
//     alert("CEP inválido");
//     limparCampos();
//     return;
//   }

//   Pega o CEP e o armazena dentro de dados
//   const dadosCep = cepsMockados[cep];

//   if (!dadosCep) {
//     alert("CEP não encontrado na base de dados");
//     limparCampos();
//     return;
//   }

//   preencherCampos(dadosCep);
// }

function buscarCep() {
  const cep = campoCep.value.replace("-", "");

  if (cep.length !== 8) {
    alert("CEP inválido");
    limparCampos();
    return;
  }

  const url = `https://viacep.com.br/ws/${cep}/json/`;

  // Faz a requisição HTTP para a URL da API
  fetch(url)
    // Converte a resposta para JSON
    .then((response) => response.json())
    //Verifica se a API retornou um erro (CEP não existe)
    .then((dados) => {
      if (dados.erro) {
        alert("CEP não encontrado");
        limparCampos();
        return;
      }
      preencherCampos(dados);
    })
    // Caso aconteça algum erro na requisição (ex. sem internet)
    .catch(() => {
      alert("Erro ao buscar o CEP");
    });
}

botaoBuscar.addEventListener("click", buscarCep);
