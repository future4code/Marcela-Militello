//----------- Exercícios de interpretação de código ------------

/* 1 - Através da função conversorDeMoeda, o código calcula o valor em reais a partir
do valor da cotação do dólar informado pelo usuário (cast de string para number) 
multiplicado pelo valor em dólar atribuído ao parâmetro da função. Será impresso no console o
resultado da operação atribuído à variável meuDinheiro.*/
                //uso do return segue obscuro e aqui está dentro da chave
                //testei e tudo ok

/* 2 - Através da função investeDinheiro, o código calcula o valor do montante de 
Dinheiro após investimento, usando o comando switch case para condicionais para calcular 
o valor após investimento a partir do tipo de investimento e o valor investido 
informados como parâmetros da função. Ainda há um alerta emitido quando o campo para 
informar o tipo de investimento estiver incorreto. A função foi chamada duas vezes 
e seus valores foram atribuídos a variáveis e impressos no console.*/ 
                //uso do return segue obscuro e aqui ele aparece fora da chave
                /*testei e imprimiu undefined no segundo console após o alert, mas entendi:
                 "Tesouro Direto" não era um case da condicional*/ 
               

/* 3 - Através de um loop for e uma condicional if, os números pares da array numeros são 
adicionados à array1 e caso não sejam pares, são adicionados à array2 com o .push. 
A quantidadde de elementos de cada uma das três arrays são impressas no console 
através do .length. */
                //testei e tudo ok

/* 4 - Através do loop for, o código verifica cada número da array numeros. Se o número (guardado 
na variável numero) for menor que infinito (valor atribuído à variável numero1), a variável 
numero1 passa a ter o valor da variável numero. E em outra condicional, se o número for 
maior que zero (valor atribuído à variável numero2), a variável numero2 passa a ter o valor
da variavel numero. É esperado que todos os números sejam impressos com o console.log da 
variável numero1 e todos os números (menos o -10) sejam impressos com o console.log da 
variável numero2. */ 
                /*testei e imprimiu -10 e 1590, mas entendi depois da explicação de um colega:
                o código analisa caso a caso (loop) e só imprime o resultado final (console.log
                fora das chaves)
    


//------------- Exercícios de Lógica de Programação -------------

/* 1 - Através de while, for e for of.

let i = 0

while (i < 10) {
    console.log(i)
    i++
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let numero of numeros){
    console.log(numero)
}
*/

/* 2 - 
a) true
b) true
c) true
d) true 
e) true
*/

/* 3 - Não funciona, pois falta atribuir um valor à const e retirar o = de dentro
da condição.

const quantidadeDeNumerosPares = (prompt ("Digite um número"))

let i = 0
while(i < quantidadeDeNumerosPares) {
    console.log(i*2)
    i++
}
*/

/* 4 - 

function classificacaoTriangulo (a, b, c){
    if (a === b && b === c){
        console.log("Equilátero")
    } else if (a !== b && b !== c && c !== a) {
        console.log("Escaleno")
    } else { 
        console.log("Isósceles")
    }
}

classificacaoTriangulo(a, b, c) //inserir números no lugar dos parâmetros
*/

/* 5 - */

let numero1 = prompt ("Digite o primeiro número")
let numero2 = prompt ("Digite o segundo número")

if (numero1 > numero2) {
    console.log ("O maior é: " + numero1)
} else if (numero2 > numero1) { 
    console.log ("O maior é: " + numero2)
} else {
    console.log ("Números iguais!")
}

if (numero1 % numero2 === 0){
    console.log (numero1 + " é divisível por " + numero2)
} else {
    console.log (numero1 + " não é divisível por " + numero2)
}
