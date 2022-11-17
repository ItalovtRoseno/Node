/**
 * String
 */

const professor = "Italo vinicius"
//indice           01234567891011
console.log(typeof(professor))
console.log(professor)
//obtem o valor de um caractere de string
console.log(professor.charAt(8))
//para obtrer o valor de indice de uma string
console.log(professor.lastIndexOf("é"))
//obter uma sequencia a partir do indice
console.log(professor.substring(8))
//É possivel alterar o conteudo da string
console.log(professor.replace("italo","ito"))//(original, novo)
//dica: replace(",",".")

/**** Concatenação ****/
const x = 2 
const y ="3"
console.log(typeof(x))
console.log(typeof(y))
console.log("Valor de x: " + x)
console.log("2" + x)//concatena
console.log("3" - x)//subtrai (o mesmo para)
console.log("professor "+ professor)
 //Evitar o uso do + na concatenação
 //Para concatenar usar crases ``
 console.log(`professor: ${professor}`)
