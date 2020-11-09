import { Request, Response } from 'express'
import { filterUsersByName } from '../data/filterUsersByName'
import { inputName } from '../types/User'

export const searchUsersByName = async (req: Request, res: Response) => {
    try {
        const data: inputName = {
            name: (req.query.name as string).toLowerCase(),
            // orderBy: req.query.orderBy as string ||,
            // orderType: req.query.orderType as string || 'ASC',
            // page: Number(req.query.page) <= 0 ? 1 : Number(req.query.page) || 1
        }

        if (!data.name) {
            throw new Error("Insira um valor para name")
        }

        // const validOrderByValues = ['name'];

        // if (!validOrderByValues.includes(data.orderBy)) {
        //     throw new Error('Os valores para "orderBy" devem ser "name"')
        // }

        // const validOrderTypeValues = ['ASC', 'DESC'];

        // if (!validOrderTypeValues.includes(data.orderType)) {
        //     throw new Error('Os valores para "orderType" devem ser "ASC" ou "DESC"')
        // }

        const result = await filterUsersByName(data)

        if (!result.length) {
            res.statusCode = 404;
            throw new Error("Nenhum usuário encontrado")
        }

        res.status(200).send(result)

    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }

}