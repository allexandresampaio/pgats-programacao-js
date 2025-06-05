
console.info(`Vamos alimentar seu Pet!`)
entregarPetiscosPet(10)

function entregarPetiscosPet(petSatisfeito){
    for (let contador = 1; contador <= petSatisfeito; contador++){
        console.info(`Entregando ao pet o petisco de número: ${contador}.`)
    }
    console.info(`Agora sim! O pet está satisfeito .`)
}