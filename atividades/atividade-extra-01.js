function removeStringsDaLista (listaDeEntrada){
    let listaDeSaida = []
    listaDeEntrada.forEach(elementoDaLista => {
        if (typeof elementoDaLista == `number` && Number.isInteger(elementoDaLista)) listaDeSaida.push(elementoDaLista)
    });

    return listaDeSaida
}

let listaExemplo = [1, 5, 6, 'Fanny', 'Alle', 8, 12837, 930481, 'Lucas']
console.log(removeStringsDaLista(listaExemplo))