import { Request, Response } from "express"
import { createUserFunc } from "../data/createUserFunc";

export const createUser = async (req: Request, res: Response) => {
    try {

        const { name, nickname, email } = req.body;

        if (!(name && nickname && email)) {
            throw new Error("Digite todos os campos!")
        }

        const users = await createUserFunc(name, nickname, email)
        //deu tudo certo
        res.status(200).send({ chaveDoRetorno: "Usuário criado com sucesso!" });
    } catch (error) {
        //deu tudo errado
        res.status(400).send(error.message);
    }
};