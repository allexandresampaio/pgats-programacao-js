const prompt = require('prompt-sync')()


console.log("Olá, vamos verificar a melhor atividade para o seu pet")
let nome = prompt ("Por favor, entre com o nome do animal: ")
let peso = prompt ("Por favor, entre com o peso do animal (em Kgs): ")
let tempo = prompt ("Por favor, entre com o tempo disponível (em minutos): ")

console.info(`Atividade para ${nome}:`)
console.info(definirMensagem(tempo,definirAtividade(verificarPorte(peso))))

function verificarPorte (peso){
    let porte
    if (peso > 0 && peso <= 10) porte = `pequeno`
    else if (peso > 10 && peso <= 20) porte = `médio`
    else if (peso > 20) porte = `grande`
    else porte = `porte inválido`
    return porte
}

function definirAtividade (porte){
    let atividade
    if (porte == `pequeno`) atividade = `brincar dentro de casa`
    else if (porte == `médio`) atividade = `caminhada no quarteirão`
    else if (porte == `grande`) atividade = `correr no parque`
    else atividade = porte
    return atividade
}

function definirMensagem (tempo, atividade){
    let mensagem
    if (tempo > 0 && tempo <= 15) mensagem = 'Atividade rápida: ' + atividade
    else if (tempo > 15 && tempo <= 30) mensagem = 'Tempo ideal: ' + atividade
    else if (tempo > 30) mensagem = 'Hora da diversão: ' + atividade
    return mensagem
}
