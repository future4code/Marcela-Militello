/* 2 - 
const operacao = process.argv[2]
const numero1 = Number(process.argv[3])
const numero2 = Number(process.argv[4]) 

if (!numero1 || !numero2 || !operacao) {
    console.log('\x1b[33m%s\x1b[0m',"Esperava 3 parâmetros e só recebi um ou dois.")
} else {
    switch(operacao){
    case "som":
        console.log('\x1b[33m%s\x1b[0m',numero1+numero2)
    break;
    case "sub":
        console.log('\x1b[33m%s\x1b[0m',numero1-numero2)
    break;
    case "mul":
        console.log('\x1b[33m%s\x1b[0m',numero1*numero2)
    break;
    case "div":
        console.log('\x1b[33m%s\x1b[0m',numero1/numero2)
    break;
    }
} */