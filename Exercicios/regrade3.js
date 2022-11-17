/**
 * Regra de 3
 */

//importar o pacote
const read = require('readline-sync')

//variaveis e processamento
let valorporcento = Number(read.question("Digite o valor de porcentagem: ").replace(",","."))
let valornumero = Number(read.question(`${valorporcento.toFixed(0)} % De: `).replace(",","."))
let resultado = (valorporcento * valornumero) / 100

//saida 
console.log(`${valorporcento.toFixed(0)} % De ${valornumero.toFixed(1)} = ${resultado.toFixed(1)}`)