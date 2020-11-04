import { Request, Response } from 'express'
import { filterUsersByType } from '../data/filterUsersByType'
import { inputType } from '../types/User'

export const searchUsersByType = async (req: Request, res: Response) => {
    try {
        const data: inputType = {
            type: (req.params.type as string).toLowerCase(),
            // orderBy: req.query.orderBy as string ||,
            // orderType: req.query.orderType as string || 'ASC',
            // page: Number(req.query.page) <= 0 ? 1 : Number(req.query.page) || 1
        }

        if (!data.type) {
            throw new Error("Insira um valor para type")
        }

        // const validOrderByValues = ['name'];

        // if (!validOrderByValues.includes(data.orderBy)) {
        //     throw new Error('Os valores para "orderBy" devem ser "name"')
        // }

        // const validOrderTypeValues = ['ASC', 'DESC'];

        // if (!validOrderTypeValues.includes(data.orderType)) {
        //     throw new Error('Os valores para "orderType" devem ser "ASC" ou "DESC"')
        // }

        const result = await filterUsersByType(data.type)

        if (!result.length) {
            res.statusCode = 404;
            throw new Error("Tipo não encontrado")
        }

        res.status(200).send(result)

    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }

}