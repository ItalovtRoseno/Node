/**
 * Calculo de imposto
 */

//importação de pacotes
const read = require('readline-sync')

console.log("========= imposto ==========")

//variáveis e entrada
let produto = Number(read.question ("Valor total do produto: ")
.replace(",","."))

//processamento
let totaldoimposto = (produto *0.30) + produto
//saída
console.log(`total do imposto: R$ ${totaldoimposto}`)