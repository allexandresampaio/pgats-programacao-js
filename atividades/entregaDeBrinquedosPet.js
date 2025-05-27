let listaBrinquedosPet = [
    '🎾 Bola',
    '🦴 Osso',
    '🪢 Corda',
    '🔔 Sino'
]

function entregarBrinquedosAoPet(listaDeBrinquedos){
    listaDeBrinquedos.forEach(itemDaLista => {
        console.log (`Entregando o brinquedo ${itemDaLista} para Romeu.`)
    });
}

entregarBrinquedosAoPet(listaBrinquedosPet)