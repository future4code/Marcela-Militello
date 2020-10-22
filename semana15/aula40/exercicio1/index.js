// 1 -

// a) ???

// b) 
// const nome = process.argv[2]
// const idade = process.argv[3]

// if (!nome || !idade) {
//     console.log('\x1b[33m%s\x1b[0m',"Esperava 2 parâmetros e só recebi um.")
// } else {
//     console.log('\x1b[33m%s\x1b[0m',`Olá, ${nome}! Você tem ${idade} anos.`)
// } 

//no terminal: node index.js "Marcela" 31

// c) 
// const nome = process.argv[2]
// const idade = Number(process.argv[3])

// if (!nome || !idade) {
//     console.log('\x1b[33m%s\x1b[0m',"Esperava 2 parâmetros e só recebi um.")
// } else {
//     console.log('\x1b[33m%s\x1b[0m',`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`)
// } 

//no terminal: node index.js "Marcela 31 31"