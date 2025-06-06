/**
 * 
 *  Describe -> Agrupador de testes
 *  it       -> implementacao do teste
 * 
 * 
 */

import { exibirNomeDogFormatado } from "../conceitos/testes-de-unidade.js"
import assert from 'node:assert'

describe (`Testes do projeto`, () => {
    it (`Primeiro teste`, () => {

    })

     it (`Segundo teste`, () => {
       // throw new Error()
    })

    it (`Deve existir o nome do dog com letras maiúsculas`, () => {
        assert.strictEqual(exibirNomeDogFormatado('Mimosa'), 'MIMOSA')
    })
})