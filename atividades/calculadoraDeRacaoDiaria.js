const prompt = require('prompt-sync')()

console.log("Olá, vamos verificar a quantidade de ração que seu pet deve ingerir por dia")
let nome = prompt ("Por favor, entre com o nome do animal: ")
let peso = prompt ("Por favor, entre com o peso do animal (em Kgs): ")
let qtdRacao = prompt ("Por favor, entre com a quantidade de ração disponível (em gramas): ")
let qtdDiaria, diasRestantes

calcularQtdRacao(peso, qtdRacao)
imprimirDados()

function calcularQtdRacao(peso, qtdRacao){
    qtdDiaria = 30*peso
    diasRestantes = qtdRacao / qtdDiaria
}

function imprimirDados (){
    console.clear()
    console.info(`Nome: ${nome}`)
    console.info(`Peso: ${peso} Kgs`)
    console.info(`Quantidade de ração diária: ${qtdDiaria} gramas`)
    console.info(`O estoque de ração durará ${Math.floor(diasRestantes)} dias.`)
}