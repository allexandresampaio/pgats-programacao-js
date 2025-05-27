let listaBrinquedosPet = [
    {
        Nome: 'Bola'
    }, 
     {
        Nome: 'Osso'
    }, 
     {
        Nome: 'Corda'
    }, 
     {
        Nome: 'Sino'
    }
]

function entregarBrinquedosAoPet(listaDeBrinquedos){
    listaDeBrinquedos.forEach(itemDaLista => {
        console.log (`Entregando o brinquedo ${itemDaLista.Nome} para Romeu.`)
    });
}

entregarBrinquedosAoPet(listaBrinquedosPet)