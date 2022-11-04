/**
 * Calculo do IMC
 */
const read = require('readline-sync')

console.log("========== Calculo do IMC ==========")

//entrada e variaveis
let Peso = Number(read.question("Peso: ")
.replace(",","."))
let Altura = Number(read.question("Altura: ")
.replace(",","."))

//processamento
let imc = Peso / (Altura * Altura)
console.log("imc: " + imc.toFixed(1))

if (imc < 18.5) {
    console.log("baixo do peso")
}
if (imc > 18.6 && imc < 24.9) {
    console.log("peso ideal")
}
if (imc > 25.0 && imc < 29.9) {
    console.log("levemente acima do peso")
}
if (imc > 30.0 && imc < 34.9) {
    console.log("obesidade nivel 1")
}
if (imc > 35.0 && imc < 39.9) {
    console.log("obesidade nivel 2")
}
if (imc > 40) {
    console.log("obesidade nivel 3")
}