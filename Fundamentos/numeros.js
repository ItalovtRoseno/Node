/**
 * Números
 */

const peso = 62.0//virgula gera um BUG 62,0
const altura = 1.70 
console.log(typeof(peso))
console.log(typeof(altura))
//dica para saber se um numero é inteiro ou não
console.log(Number.isInteger(peso)) // true ou false
console.log(Number.isInteger(altura))
// + dicas
const imc = peso/ (peso * altura)
console.log(`IMC: ${imc.toFixed(2)}`)// toFixed(2) arredondar

//ATENÇÃO !!!
console.log (10/0)
console.log (10/"2")
console.log (0.1 + 0.2)//NaN (not a number)

