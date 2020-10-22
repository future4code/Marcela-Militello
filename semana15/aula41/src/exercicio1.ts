//a) Ele retorna um erro e não roda o código.
// let minhaString: number = "nome" 

//b) Usando um pipe único e tipando com string também.
// let meuNumero: number | string = "nome" ou 7

//c) Criando um type e atribuindo os valores às propriedades descritas.
// type pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: string
// }

// let primeiraPessoa: pessoa = {
//     nome: "Marcela",
//     idade: 31,
//     corFavorita: "arco-íru"
// }

// //d)
// let segundaPessoa: pessoa = {
//     nome: "Jessica",
//     idade: 24,
//     corFavorita: "roxo"
// }

// let terceiraPessoa: pessoa = {
//     nome: "Matheus",
//     idade: 21,
//     corFavorita: "vermelho"
// }

// let quartaPessoa: pessoa = {
//     nome: "Thiago Alexandre",
//     idade: 28,
//     corFavorita: "verde"
// }

//e) 
// enum CORES_DO_ARCO_IRIS {
//     VERMELHO = "vermelho",
//     LARANJA = "laranja",
//     AMARELO = "amarelo",
//     VERDE = "verde",
//     AZUL = "azul",
//     ANIL = "anil",
//     VIOLETA = "violeta"
// }

// type pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: CORES_DO_ARCO_IRIS
// }

// let primeiraPessoa: pessoa = {
//     nome: "Marcela",
//     idade: 31,
//     corFavorita: CORES_DO_ARCO_IRIS.ANIL
// }

// let segundaPessoa: pessoa = {
//     nome: "Jessica",
//     idade: 24,
//     corFavorita: CORES_DO_ARCO_IRIS.VIOLETA
// }

// let terceiraPessoa: pessoa = {
//     nome: "Matheus",
//     idade: 21,
//     corFavorita: CORES_DO_ARCO_IRIS.VERMELHO
// }

// let quartaPessoa: pessoa = {
//     nome: "Thiago Alexandre",
//     idade: 28,
//     corFavorita: CORES_DO_ARCO_IRIS.VERDE
// }