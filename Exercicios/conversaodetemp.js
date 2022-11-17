/**
 * conversão de temperatura
 */

//importação de pacotes
const read = require('readline-sync')

console.log("========== Custo x Venda ==========")

//variáveis e entrada
let fahrenheit = Number(read.question("Digite a temperatura em fahrenheit: ")
.replace(",","."))

//processamento
let celsius = (fahrenheit - 32 ) /1.800
//saída
console.log(`Venda: R$ ${celsius}`)
console.log("Venda: R$ " + celsius)