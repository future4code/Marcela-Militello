// EXEMPLO 1 
// function dizOi() {
//     console.log("oi")
// }

// dizOi()


// EXEMPLO 2

// ------------------------------------------- EXEMPLO DE FUNCAO NOMEADA -----------------

// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)

// function somaDoisNumeros(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }




// ------------------------------------------- EXEMPLO DE FUNCAO NÃO NOMEADA -----------------


// const somaDoisNumeros = function(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }
    
// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)



// ------------------------------------------- EXEMPLO DE ARROW FUNCTION (FUNCAO FLECHA) -----------------


// const somaDoisNumeros = (numero1, numero2) => {
//     const soma = numero1 + numero2
//     return soma
// }


// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)




// ------------------------------------------- EXERCÍCIO 1 -----------------

// function verificaArray(arrayDeParametro) {
//     for (let elemento of arrayDeParametro) {
//         console.log(elemento)
//     }

//     return arrayDeParametro.length 
// }


// ------------------------------------------- EXERCÍCIO 2 -----------------


// const verificaTamanhoDoArray = (arrayDeParametro) => {
//     for (let elemento of arrayDeParametro) {
//         console.log(elemento)
//     }

//     return arrayDeParametro.length
// }

// const profs = ["chijo", "paulinha", "sot", "caio", "severo"]

// const tamanhoDoArray = verificaTamanhoDoArray(profs)




/*-------- EXERCICIO 1 
a) 10
   50

b) Nada seria impresso, os valores seriam apenas "guardados"*/



/*-------- EXERCICIO 2
a) Darvas
   Goli

b) Amanda
   Caio
*/


/*-------- EXERCICIO 3
x da array só será incluído na arrayFinal se for um número par. Além disso, irá para essa
lista após ser multiplicado por x.

Novo nome - arrayComNumeroPar*/



/*-------- EXERCICIO 4
a) 
function minhasInfos() {
    console.log("Me chamo Marcela, tenho 31 anos, moro em Ribeirão Preto e sou estudante")
}
    
minhasInfos()


b) 
function minhasInfos (nome, idade, cidade, estudante) {
    if (estudante === true) {
    console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e sou estudante")
    } 
}

minhasInfos("Marcela", 31, "Ribeirão Preto", true) */



/*-------- EXERCICIO 5

a) 
function minhaFuncao (numero1, numero2) {
    let soma = numero1 + numero2
    return soma
}

const resultado = minhaFuncao(16, 3)

console.log(resultado)


b) 
function novaFuncao (numero1, numero2) {
    if (numero1 >= numero2) {
    console.log("O número " + numero1 + " é maior que o " + numero2)  
    } else {
    console.log("O número " + numero1 + " não é maior que o número " + numero2)      
    }
}

novaFuncao()


c)  
function umaMensagem (string) {
    console.log (string) 
}

umaMensagem ("Esta é uma mensagem")
umaMensagem ("Esta é uma mensagem")
umaMensagem ("Esta é uma mensagem")
umaMensagem ("Esta é uma mensagem")
umaMensagem ("Esta é uma mensagem")
umaMensagem ("Esta é uma mensagem")
umaMensagem ("Esta é uma mensagem")
umaMensagem ("Esta é uma mensagem")
umaMensagem ("Esta é uma mensagem")
umaMensagem ("Esta é uma mensagem")
*/



/*-------- EXERCICIO 6

a)
function tamanhoDoArray (array) {
    return array.length
}
        
const numeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
const quantidadeElementos = tamanhoDoArray(numeros)
console.log(quantidadeElementos)

tamanhoDoArray(numeros)


b)
function indicaPar (numero) {
    if (numero % 2 === 0) {
    console.log("O número " + numero + " é par")
    } else {
    console.log("O número " + numero + " não é par")
    }
}  

indicaPar(numero) 


c)

*/


