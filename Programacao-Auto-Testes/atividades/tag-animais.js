const prompt = require('prompt-sync')()

console.log("Olá, vamos preencher a tag de identificação de mais um cão?")
let nome = prompt ("Por favor, entre com o nome do animal: ")
//let idade = prompt ("Por favor, entre com a idade do animal: ")
let peso = prompt ("Por favor, entre com o peso do animal: ")
let raca = prompt ("Por favor, entre com a raça do animal: ")
//let adotado = prompt ("Finalmente, nos diga se ele é adotado (S ou N): ")

console.clear()
console.info("Tag de Identificação")
console.info(`Nome: ${nome.toUpperCase()}`)
console.info(`Raça: ${raca.charAt(0).toUpperCase()}${raca.slice(1).toLowerCase()}`)
console.info(`Peso: ${peso}kg`)