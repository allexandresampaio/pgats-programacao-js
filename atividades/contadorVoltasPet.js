
console.info(`Contador de Voltas:`)
verificarSatisfacaoPet()

function verificarSatisfacaoPet(){
    let contador = 1
    let petSatisfeito = false
    while (!petSatisfeito){
        console.info(`Esta é a volta de número: ${contador}`)
        if (contador >= 5){
            petSatisfeito = true
            console.info(`Agora sim! O pet está satisfeito .`)
        }
    contador++
    }
}