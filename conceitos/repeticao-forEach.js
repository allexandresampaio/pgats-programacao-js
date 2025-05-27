const listaAlunos = [
    'Matheus', 'Luana', 'Peixe', 'Maia', 'Joao'
]

listaAlunos.forEach(aluno => {
    console.log(aluno)
    console.log(aluno.toUpperCase())
})

const listaAlunosENotas = [
    {
        Nome: 'Matheus',
        Nota: 9
    }, 
     {
        Nome: 'Luana',
        Nota: 10
    }, 
     {
        Nome: 'Peixe',
        Nota: 8
    }, 
     {
        Nome: 'Maia',
        Nota: 6
    }, 
     {
        Nome: 'Joao',
        Nota: 8
    }
]

listaAlunosENotas.push({ //add ao fim da lista
    Nome: 'Allexandre',
    Nota: 10
})

listaAlunosENotas.forEach(aluno =>{
    console.log (`O aluno ${aluno.Nome} obteve a nota ${aluno.Nota}.`)
    if (aluno.Nota < 7){
        console.log (`O aluno ${aluno.Nome} precisa fazer trabalho extra.`)
    }
})