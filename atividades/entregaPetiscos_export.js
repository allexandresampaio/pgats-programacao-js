const petsLista = [
    `🐩 Pantera`,
    `🦮 Luna`,
    `🐕 Thor`
]

function entregarPetiscosPet (listaPets){
    listaPets.forEach(petDaLista => {
        console.log (`Entregando o petisco para ${petDaLista}.`)
    });
}

export {
    entregarPetiscosPet,
    petsLista
}