const numeros = [1,2,3,4,5,6];

numeros.forEach(num => {
    console.log(`Numero: ${num}`);
});

const dobrados = numeros.map(num => num *2); //map -> método que retorna um novo array
console.log(dobrados)

const variavel = dobrados.filter(num => num > 8).some(num => num < 20);
console.log(variavel);
/*
const filtrados = numeros.filter(num => num>5);
console.log(filtrados);

const maiorQue9 = dobrados.find(num => num >= 9); //find - retorna o primeiro elemento que vai satisfazer aquela condição
console.log(maiorQue9);

const todosMaiores2 = dobrados.every(num => num>=2);
console.log(todosMaiores2);

const algumMaior12 = dobrados.some(num => num > 11);
console.log(algumMaior12);
*/