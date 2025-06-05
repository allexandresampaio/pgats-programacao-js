function retorneQtdVogais (texto){
    let contador = 0
    for (let i=0; i<texto.length; i++){
        if (/[aeiou]/.test(texto[i])) contador++
    }    
    return contador
}

console.log(retorneQtdVogais("tenho em mim todos os sonhos do mundo."))