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
        Nota: 7
    }, 
     {
        Nome: 'Joao',
        Nota: 8
    }
]

listaAlunosENotas.forEach(aluno =>{
    console.log (`O aluno ${aluno.Nome} obteve a nota ${aluno.Nota}.`)
})