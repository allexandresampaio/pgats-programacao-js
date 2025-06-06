//funcao assincrona - esperar resultado
async function exibirNomeDogFormatado(nome){
    return nome.toUpperCase()
}

//aqui ele entrega a promise do retorno
console.log(exibirNomeDogFormatado(`Romeu`))

//aqui ele espera e entrega o retorno
console.log(await exibirNomeDogFormatado(`Romeu`))


export {
    exibirNomeDogFormatado
}