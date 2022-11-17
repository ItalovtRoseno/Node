/**
 * calculo da média
 */

const read = require ('readline-sync')
const colors = require ('colors')

//variaveis
console.log("==== calculo da média ====")
let nome = read.question("digite seu nome: ")
console.log(`aluno: ${nome}`)
let nota1 = Number(read.question("Digite a nota1: ").replace(",",".")
let nota2 = Number(read.question("Digite a nota2: ").replace(",",".")
//processamento
let media = (nota1 + nota2) / 2
//Saída
console.log (`Média: ${media.toFixed(1)}`)
//status
if(media< 5) {
    console.log("Aluno reprovado".red)
} else {
    console.log("Aluno Aprovado".blue)
}
