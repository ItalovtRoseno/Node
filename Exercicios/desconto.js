/**
 * Calculo de Desconto
 */

//importação de pacotes
const read = require('readline-sync')

console.log("========== Desconto ==========")

//variáveis e entrada
let total = Number(read.question ("Valor total da compra: ")
.replace(",","."))
let desconto = Number(read.question ("valor total do desconto: ")
.replace(",","."))

//processamento
let totaldodesconto = total - (total * desconto) / 100
//saída
console.log(`total do desconto: R$ ${totaldodesconto}`)
console.log("total do desconto: R$ " + totaldodesconto )