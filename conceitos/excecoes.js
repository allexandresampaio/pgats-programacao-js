try {
    console.log(`Tentando alimentar o gato...`)
    throw new Error(`Pet não quis alimento...`)
}
catch (excecao){
    console.log(excecao)
    console.log(excecao.name)
    console.log(excecao.message)
}
finally {
    console.log(`Sempre serei executado!`)
}