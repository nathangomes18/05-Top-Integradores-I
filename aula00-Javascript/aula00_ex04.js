/*class Produto{
    constructor(mouse, teclado){
        this.mouse = mouse;
        this.teclado = teclado;
    }
}

const soma = (x,y) => x + y;
console.log(soma(5,6));

console.log(cachorro.exibirInformacoes());
console.log(gato.exibirInformacoes());
*/


// Função que recebe um objeto como argumento
function exibirInfoProdutos(produto){
    return `Produto: ${produto.nome}, Preço: ${produto.preco.toFixed(2)},
    Estoque: ${produto.estoque} unidade.`;
}

//

const produto1 = {
    nome: "Café",
    preco: 30,
    estoque: 20,
}

const produto2 = {
    nome: "Pera",
    preco: 10,
    estoque: 20,
}

console.log(exibirInfoProdutos(produto1));
console.log(exibirInfoProdutos(produto2));