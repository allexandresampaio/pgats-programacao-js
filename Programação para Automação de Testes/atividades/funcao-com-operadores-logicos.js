const prompt = require('prompt-sync')()


console.log("Olá, vamos verificar o porte do seu pet")
let nome = prompt ("Por favor, entre com o nome do animal: ")
let peso = prompt ("Por favor, entre com o peso do animal: ")

console.info(`Nome: ${nome}`)
console.info(`Peso: ${peso}`)
console.info(`O seu pet é de ${porte2(peso)} porte.`)

const porte = peso => {
    return peso < 10 ? `pequeno` : `médio`
}

function porte2 (peso){
    return peso < 10 ? `pequeno` : `médio`
}

console.info(`O seu pet é de ${porte(peso)} porte.`)
