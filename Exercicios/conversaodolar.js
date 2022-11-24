/**
 * conversão de temperatura
 */

//importação de pacotes
const read = require('readline-sync')

console.log("========== dolar para real ==========")

//variáveis e entrada
let REAL = Number(read.question("Digite o valor em real: ")
.replace(",","."))

//processamento
let DOLAR = REAL/ 5.36
//saída
console.log(` valor convertido: R$ ${DOLAR}`)
console.log("valor convertido: R$ " + DOLAR)

