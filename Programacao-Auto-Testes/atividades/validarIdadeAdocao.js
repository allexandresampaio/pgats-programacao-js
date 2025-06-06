const prompt = require('prompt-sync')()


console.log("Olá, vamos verificar se o pet já tem a idade mínima definida para adoção")
let nome = prompt ("Por favor, entre com o nome do animal: ")
let idade = prompt ("Por favor, entre com a idade do animal: ")
let peso = prompt ("Por favor, entre com o peso do animal: ")

let aptoAdocao = idade >= 2 ? "está apto" : "não está apto" 
let porte = peso < 10 ? `pequeno` : `grande`
if (porte == `pequeno`) {
    aptoAdocao =  "está apto"
}

console.clear()
console.info(`Nome: ${nome}`)
console.info(`Idade: ${idade}`)
console.info(`Este animal ${aptoAdocao} para adoção.`)


