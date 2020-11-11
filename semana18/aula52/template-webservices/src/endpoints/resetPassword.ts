import { Request, Response } from 'express'
import selectUserByEmail from '../data/selectUserByEmail'
import { hash } from "../services/hashManager"
import { updatePassword } from "../data/updatePassword"
import { writeEmail } from "../services/mailer"

export async function resetPassword(req: Request, res: Response) {
    let errorCode = 400
    try {
        const email = req.body.email
        if (!email) {
            throw new Error("Por favor, insira um email válido.")
        }

        const user = await selectUserByEmail(email)
        if (!user) {
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }

        const password = "bananinha"
        const hashPassword = await hash(password)

        await updatePassword(user.id, hashPassword)

        await writeEmail(
            "João Alves <joao@labenu.com>",
            "mateus@labenu.com",
            "Salve!",
            "Oi, Mateus, tudo susse?",
            `<p>Salve Mateus, meu peeexe. Sua nova senha é ${password}</p>`
        )

        res.send({ message: "Senha atualizada com sucesso" }).status(200)

    } catch (error) {
        res.send(errorCode).send({ message: "Deu ruim!" })
    }
}

