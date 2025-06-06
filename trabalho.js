const dadosDoMeuPet = {
    nome: `Pipoca`,
    porte: `Médio`,
    cor: `Caramelo`,
    genero: `F`,
    raca: `SRD`,
    vacinas: [`Cinomose`, 
        `Parvovirose`, 
        `Hepatite infecciosa`, 
        `Adenovírus tipo 2`, 
        `Parainfluenza`,
        `Coronavírus`,
        `Leptospirose`
    ]
}

function geradorDeTagsDeIdentificacao(nomeDoPet){
    return nomeDoPet.toUpperCase()
}

function verificarSePodeSerAdotado(idade, porte){
    if (idade >= 1 && (porte == 'M' || porte == 'G')) return true
}

function calcularConsumoDeRacao(nomeDoPet, idadeDoPet, pesoDOPet){
    let porcaoDiariaDeRacao
    if (idadeDoPet > 0 && idadeDoPet < 1) porcaoDiariaDeRacao = pesoDOPet * 150
    else if (idadeDoPet < 2) porcaoDiariaDeRacao = pesoDOPet * 300
    else if (idadeDoPet < 10) porcaoDiariaDeRacao = pesoDOPet * 350
    else if (idadeDoPet > 10) porcaoDiariaDeRacao = pesoDOPet * 200
    //console.log(`A porção diária de ração indicada para ${nomeDoPet} é de ${porcaoDiariaDeRacao} gramas.`)
    return porcaoDiariaDeRacao
}

function decidirTipoDeAtividadePorPorte(porte){
    let atividade
    if (porte == `pequeno`) atividade = `brincar dentro de casa`
    else if (porte == `médio`) atividade = `caminhada no quarteirão`
    else if (porte == `grande`) atividade = `correr no parque`
    else atividade = `Verifique o porte indicado e tente novamente.`
    return atividade
}

async function buscarDadoAsync(){
    return dadosDoMeuPet.nome
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}
