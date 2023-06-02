// First contacts JS

console.log('Hello world');

let myName = 'Vitor';                   //Declara variavel 
console.log('My name is', myName);
console.log(typeof myName);

const Name = 'Vitor';                   //Não é variavel
const surname = 'Freitas';
const age = 21;
const weight = 84;
const hight = 1.80;
let imc = weight / (hight ** 2)

const currentdate = new Date().getFullYear();   //Objeto tempo atualizado
console.log(currentdate);
let bornin = currentdate - age;
console.log(bornin);

console.log('');
// Vitor tem 20 anos, pesa 60kg, tem 1.83 de altura 
// tem IMC é de ' '  nasceu em 2002

console.log(`${Name} have ${age} years old weighs ${weight} his IMC is ${imc} and born in ${bornin}`);
