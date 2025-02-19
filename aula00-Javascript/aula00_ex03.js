//Exemplo 03: Classes

class Animal{
    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo;
    }

    exibirInformacoes(){
        return `Este é umm ${this.tipo} chamado ${this.nome}.`;
    }
}

const cachorro = new Animal("Charlie Golf", "cachorro");
const gato = new Animal("Noel", "gato");

console.log(cachorro.exibirInformacoes());
console.log(gato.exibirInformacoes());