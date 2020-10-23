import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";

const app: Express = express()

app.use(express.json())
app.use(cors())

type transacoes = {
    valor: number,
    data: number,
    descricao: string
}

type conta = {
    nome: string,
    cpf: number,
    dataNasc: number,
    extrato: transacoes[],
    saldo: number
}

const usuarios: conta[] = [{
    nome: "Marcela",
    cpf: 11122233340,
    dataNasc: 19890316,
    extrato: [],
    saldo: 0
},
{
    nome: "Jessica",
    cpf: 22233344450,
    dataNasc: 19960516,
    extrato: [],
    saldo: 0
}]

app.post("/usuarios", (req: Request, res: Response): void => {
    try {
        const { nome, cpf, dataNasc, extrato, saldo } = req.body;
        if (new Date().getFullYear() - (req.body.dataNasc / 10000) < 18) {
            throw new Error("Usuário precisa ser maior de 18.")
        }

        const cpfIgual = usuarios.find((item) => item.cpf === req.body.cpf)

        if (cpfIgual) {
            throw new Error("CPF já cadastrado!")
        }

        const usuario: conta = {
            nome: nome,
            cpf: cpf,
            dataNasc: dataNasc,
            extrato: extrato,
            saldo: saldo
        }

        usuarios.push(usuario);
        res.status(200).send({ message: "Usuário criado com sucesso!" });

    } catch (error) {
        res.status(400).send({
            message: (error.message)
        });
    }
})

app.get("/usuarios", (req: Request, res: Response): void => {

    try {
        res.status(200).send(usuarios);
    } catch (error) {
        res.status(400).send({
            message: "Erro, usuários não encontrados."
        });
    }
});

// app.get("/usuarios/:cpf", (req: Request, res: Response): void => {

//     try {
//         res.status(200).send(usuarios);
//     } catch (error) {
//         res.status(400).send({
//             message: "Erro, usuários não encontrados."
//         });
//     }
// });

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});

