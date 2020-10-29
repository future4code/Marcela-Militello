import { Request, Response } from "express"
import { getActorGender } from "../data/getActorGender";

export const getActorByGender = async (req: Request, res: Response) => {
    try {
        const count = await getActorGender(req.query.gender as string);
        res.status(200).send({
            quantity: count,
        });
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
};