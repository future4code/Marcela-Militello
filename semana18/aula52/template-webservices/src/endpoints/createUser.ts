import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";

export default async function createUser(
    req: Request,
    res: Response
) {
    try {

        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email ||
            !req.body.password ||
            !req.body.role ||
            !req.body.logradouro ||
            !req.body.numero ||
            !req.body.bairro ||
            !req.body.cidade ||
            !req.body.estado
        ) {
            throw new Error('Preencha os campos "name", "nickname", "email", "password", "role", "logradouro", "numero", "bairro", "cidade", "estado"')
        }

        const id: string = generateId()

        const cypherPassword = await hash(req.body.password);

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email,
            cypherPassword,
            req.body.role,
            req.body.logradouro,
            req.body.numero,
            req.body.complemento,
            req.body.bairro,
            req.body.cidade,
            req.body.estado
        )

        const token: string = generateToken({
            id,
            role: req.body.role
        })

        res
            .status(201)
            .send({
                message: "Usuário criado!",
                token
            })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}