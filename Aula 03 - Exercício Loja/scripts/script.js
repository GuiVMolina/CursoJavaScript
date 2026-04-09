let nome = "GamesStation";
let cliente = String(prompt("Digite seu nome:"));
let produto = String(prompt(`Digite o jogo desejado:
    - (1) The Last of Us Part II
    - (2) God of War
    - (3) Red Dead Redemption 2
    - (4) Cyberpunk 2077
    - (5) Assassin's Creed Valhalla`));
let quantidade = Number(prompt("Quantos produto são desejados? "));
let jogos = ["The Last of Us Part II",
             "God of War",
             "Red Dead Redemption 2",
             "Cyberpunk 2077",
             "Assassin's Creed Valhalla"];
switch (produto) {
    case "The Last of Us Part II" :
    case "1":
        produto = jogos[0];
        var preco = 199.90;
        break;
        case "God of War" :
    case "2":
        produto = jogos[1];
        var preco = 149.90;
        break;
    case "Red Dead Redemption 2" :
    case "3":
        produto = jogos[2];
        var preco = 249.90;
        break;
    case "Cyberpunk 2077" :
    case "4":
        produto = jogos[3];
        var preco = 299.90;
        break;
    case "Assassin's Creed Valhalla" :
    case "5":
        produto = jogos[4];
        var preco = 179.90;
        break;
    default:
        var preco = 0;
        console.log("Produto não encontrado. Por favor, escolha um produto da lista.");
        break;
}

console.log(`Bem-vindo à ${nome}!
Cliente: ${cliente}
Produto: ${produto}
Preço: R$ ${preco}
Quantidade: ${quantidade}
Total: R$ ${(preco * quantidade).toFixed(2)}
Pedido realizado com sucesso!
Obrigado por pela preferência, ${cliente}!`);