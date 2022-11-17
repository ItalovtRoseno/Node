/**
 *etanol ou gasolina
 */

 let read = require('readline-sync')
 let color = require('colors')
 
 let etanol = read.question("quanto custa o etanol? ")
 let gasolina = read.question("quanto custa a gasolina? ")
 
 if ((gasolina * 30) / 100 > etanol) {
     console.log ("etanol é o mais em conta".blue)
 } else {
     console.log ("gasolina é o mais mais em conta".red)
 }