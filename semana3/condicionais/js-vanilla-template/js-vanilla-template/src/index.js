//------------- EXERCÍCIOS 29/07 ---------------//

/*EXERCÍCIO 1: 
Se o número digitado pelo usuário, quando dividido por 2, tiver um resto de divisão 
igual a 0 (zero), será impresso "Passou no teste". Caso contrário, se ele digitar um
número que dividido por 2 tenha o resto de divisão diferente de 0 (zero), será impresso
"Não passou no teste".*/ 

/*EXERCÍCIO 2: 
a) Para informar o preço da fruta digitada pelo usuário/cliente. 
b) O preço da fruta Maçã é R$ 2.25
c) O preço da fruta  Pêra  é  R$  5*/

/*EXERCÍCIO 3:
a) Pedindo para o usuário digitar o primeiro número (uma string que será convertida 
para número), sendo este o valor atribuído à const numero.
b) Esse número passou no teste, já que 10 é maior que 0(zero). 
Não aparecerá mensagem, pois -10 é menor que 0(zero).
c) A chave fechou logo após a última variável declarada, deixando a última linha do
código sem acesso a essa variável dentro do bloco, impossibilitando a impressão.
*/

/*EXERCÍCIO 4:

const respostaIdade = prompt("Qual é a sua idade?")
const idade = Number(respostaIdade)

if(idade >= 18) {
    console.log("Você pode dirigir")
} else { 
    console.log("Você não pode dirigir")
}

*/

/*EXERCÍCIO 5:

let turno = prompt("Digite seu turno com M (Matutino) ou V (Vespertino) ou N (Noturno)")

if(turno === "M"){
    console.log("Bom dia!")
} else if (turno === "V"){ 
    console.log("Boa tarde!")
} else if (turno === "N"){
    console.log("Boa noite!")
} */
    
/*EXERCÍCIO 6:

let turno = prompt("Digite seu turno com M (Matutino) ou V (Vespertino) ou N (Noturno)")

switch (turno) {
    case "M":
        console.log("Bom dia!")
        break;
    case "V":
        console.log("Boa tarde!")
        break;
    case "N":
        console.log("Boa noite!")
        break;
}

*/

/*EXERCÍCIO 7:

let generoFilme = prompt("Qual o gênero de filme gostaria de assistir hoje?")
let precoIngresso = prompt("Qual é o valor do seu ingresso?")

if (generoFilme === "Fantasia" && precoIngresso < 15) {
    console.log("Bom filme!")
} else { 
    console.log("Escolha outro filme :(")
}

*/

/*DESAFIO1

let generoFilme = prompt("Qual o gênero de filme gostaria de assistir hoje?").toLowerCase()
let precoIngresso = prompt("Qual é o valor do seu ingresso?")

if (generoFilme === "fantasia" && precoIngresso < 15) {
    let snack = prompt("Qual snack que você quer comprar?")
    console.log("Bom filme! " + "...com " + snack)
} else { 
    console.log("Escolha outro filme :(")
}

*/

/*DESAFIO2*/

let nomeCompleto = prompt("Informe seu nome completo")
let tipoJogo = prompt("Digite IN (internacional) ou DO (doméstico) para o tipo de jogo") 
let etapaJogo = prompt("Digite SF (semi-final) ou DT (terceiro lugar) ou FI (final)")  
let categoria = prompt("Digite a categoria (1, 2, 3 ou 4)")
let quantidadeIngressos = prompt("Informe a quantidade de ingressos")
let valorIngresso
let valorTotal


console.log("---Dados da compra---")
console.log("Nome do cliente: " + nomeCompleto)

if (tipoJogo === "DO") {
    console.log("Tipo do jogo: Doméstico")
} else if (tipoJogo === "IN") {
    console.log("Tipo de jogo: Internacional")
} else if (etapaJogo === "SF") {
    console.log("Etapa do jogo: semi-final")
} else if (etapaJogo === "DT") {
    console.log("Etapa do jogo: terceiro lugar")    
} else if (etapaJogo === "FI") {
    console.log("Etapa do jogo: final")  
}

