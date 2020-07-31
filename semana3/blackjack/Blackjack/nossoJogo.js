/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
      let ok = true
} else {
      console.log("O jogo acabou")
}      

const carta = comprarCarta(); 

let cartaUsuarioUm = comprarCarta();
let cartaUsuarioDois = comprarCarta();
let cartaCompUm = comprarCarta();
let cartaCompDois = comprarCarta();
let pontuacaoUsuario = cartaUsuarioUm.valor + cartaUsuarioDois.valor 
let pontuacaoComp = cartaCompUm.valor + cartaCompDois.valor

console.log(`Usuário - cartas: ${cartaUsuarioUm.texto + " " + cartaUsuarioDois.texto} - pontuação ${pontuacaoUsuario}`) 
console.log(`Computador - cartas: ${cartaCompUm.texto + " " + cartaCompDois.texto}  - pontuação ${pontuacaoComp}`)

if (pontuacaoUsuario > pontuacaoComp) {
      console.log("O usuário ganhou!") 
} else if (pontuacaoUsuario < pontuacaoComp) {
      console.log("O computador ganhou!")
} else {
      console.log("Empate!")
}