//Exemplo 01
//Usando var (escopo global/função)

var nome = "Nathan";
console.log(nome);

if(true){
    var nome = "Maria";
    console.log(nome);
}
nome = 15.8
console.log(nome);

//Usando let (escopo de bloco)
let idade = 19;
console.log(idade)

if(true){
    let idade = 25;
    console.log(idade);
}
idade = "Nathan"
console.log(idade);

// Usando const (escopo de bloco e valor constante)

const PI = 3.14;
console.log(PI);

if(true){
    const PI = 4.14159;
    console.log(PI);
}
PI = "Top. Integradores I";
console.log(PI);