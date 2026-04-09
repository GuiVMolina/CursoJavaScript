const botao = document.getElementById("botaoTema");
const corpoPagina = document.body;
const caixa = document.getElementById("caixa");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");

// Atividade1
const botaoAtv1 = document.getElementById("botaoAtv1");
const tituloAtv1 = document.getElementById("tituloAtv1");
const caixaAtv1 = document.getElementById("caixaAtv1");
const heartPath = document.getElementById("heartPath");
let curtido = false;

// Atividade2
const botaoAtv2 = document.getElementById("botaoAtv2");
const tituloAtv2 = document.getElementById("tituloAtv2");
const caixaAtv2 = document.getElementById("caixaAtv2");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const formLogin = document.getElementById("formLogin");
const formText = document.getElementById("formText");

// Atividade 3
const botaoAdd = document.getElementById("botaoAdd");
const caixaAtv3 = document.getElementById("caixaAtv3");
const tituloAtv3 = document.getElementById("tituloAtv3");
const lixeira = document.getElementById("lixeira");
const apagarItem = document.getElementById("apagarItem");
let modoEscuroAtivo = false;

botao.addEventListener("click", () => {
  if (!modoEscuroAtivo) {
    modoEscuroAtivo = !modoEscuroAtivo;
    corpoPagina.style.backgroundColor = "hsl(0, 0%, 10%)";
    caixa.style.backgroundColor = "hsl(0, 0%, 20%)";
    titulo.style.color = "hsl(0, 0%, 100%)";
    texto.style.color = "hsl(0, 0%, 100%)";
    botao.style.color = "hsl(0, 0%, 100%)";
    botao.innerText = "Ativar Modo Claro";

    // Atividade1
    caixaAtv1.style.backgroundColor = "hsl(0, 0%, 20%)";
    tituloAtv1.style.color = "hsl(0, 0%, 100%)";
    botaoAtv1.style.color = "hsl(0, 0%, 100%)";

    // Atividade2
    caixaAtv2.style.backgroundColor = "hsl(0, 0%, 20%)";
    tituloAtv2.style.color = "hsl(0, 0%, 100%)";
    botaoAtv2.style.color = "hsl(0, 0%, 100%)";
    label1.style.color = "hsl(0, 0%, 100%)";
    label2.style.color = "hsl(0, 0%, 100%)";

    // Atividade3
    caixaAtv3.style.backgroundColor = "hsl(0, 0%, 20%)";
    tituloAtv3.style.color = "hsl(0, 0%, 100%)";
    botaoAdd.style.color = "hsl(0, 0%, 100%)";
    formText.style.color = "hsl(0, 0%, 100%)";
  } else {
    modoEscuroAtivo = !modoEscuroAtivo;
    corpoPagina.style.backgroundColor = "hsl(0, 0%, 90%)";
    caixa.style.backgroundColor = "hsl(0, 0%, 100%)";
    titulo.style.color = "hsl(0, 0%, 5%)";
    texto.style.color = "hsl(0, 0%, 5%)";
    botao.style.color = "hsl(0, 0%, 5%)";
    botao.innerText = "Ativar Modo Escuro";

    // Atividade1
    caixaAtv1.style.backgroundColor = "hsl(0, 0%, 100%)";
    tituloAtv1.style.color = "hsl(0, 0%, 5%)";
    botaoAtv1.style.color = "hsl(0, 0%, 5%)";

    // Atividade2
    caixaAtv2.style.backgroundColor = "hsl(0, 0%, 100%)";
    tituloAtv2.style.color = "hsl(0, 0%, 5%)";
    botaoAtv2.style.color = "hsl(0, 0%, 5%)";
    label1.style.color = "hsl(0, 0%, 5%)";
    label2.style.color = "hsl(0, 0%, 5%)";

    // Atividade3
    caixaAtv3.style.backgroundColor = "hsl(0, 0%, 100%)";
    tituloAtv3.style.color = "hsl(0, 0%, 5%)";
    botaoAdd.style.color = "hsl(0, 0%, 5%)";
    formText.style.color = "hsl(0, 0%, 5%)";
  }
});

// Atividade1
botaoAtv1.addEventListener("click", () => {
  if (!curtido) {
    curtido = !curtido;
    botaoAtv1.innerText = "Curtido";
    heartPath.setAttribute("fill", "red");
  } else {
    curtido = !curtido;
    botaoAtv1.innerText = "Não Curtido";
    heartPath.setAttribute("fill", "none");
  }
});

// Atividade2
formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = document.getElementById("inputUser").value;
  const pass = document.getElementById("inputPass").value;

  if (user == "admin" && pass == "1234") {
    formText.innerText = "Login realizado com sucesso";
  } else {
    formText.innerText = "Usuário ou senha inválidos";
  }
});

// Atividade3
botaoAdd.addEventListener("click", (e) => {
  e.preventDefault();

  const novoItemDiv = document.createElement("div");
  novoItemDiv.classList.add("item");

  const texto = document.createElement("p");
  texto.innerText = "Novo item";

  const botaoLixeira = document.createElement("button");
  botaoLixeira.innerHTML = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.12817 8.15391C5.12817 10.4103 5.12817 13.5898 5.12817 15.1283C5.23074 16.4616 5.3333 18.2052 5.43587 19.436C5.53843 20.8719 6.7692 22.0001 8.2051 22.0001H15.7948C17.2307 22.0001 18.4615 20.8719 18.5641 19.436C18.6666 18.2052 18.7692 16.4616 18.8718 15.1283C18.9743 13.5898 18.8718 10.4103 18.8718 8.15391H5.12817Z" fill="#000000"/>
      <path d="M19.1795 5.07698H16.6154L15.7949 3.53852C15.2821 2.61545 14.359 2.00006 13.3333 2.00006H10.8718C9.84615 2.00006 8.82051 2.61545 8.41026 3.53852L7.38462 5.07698H4.82051C4.41026 5.07698 4 5.48724 4 5.8975C4 6.30775 4.41026 6.71801 4.82051 6.71801H19.1795C19.5897 6.71801 20 6.41032 20 5.8975C20 5.38468 19.5897 5.07698 19.1795 5.07698ZM9.12821 5.07698L9.64103 4.25647C9.84615 3.84621 10.2564 3.53852 10.7692 3.53852H13.2308C13.7436 3.53852 14.1538 3.74365 14.359 4.25647L14.8718 5.07698H9.12821Z" fill="#000000"/>
    </svg>`;

  botaoLixeira.addEventListener("click", () => {
    novoItemDiv.remove();
  });

  novoItemDiv.appendChild(texto);
  novoItemDiv.appendChild(botaoLixeira);
  caixaAtv3.appendChild(novoItemDiv);
});