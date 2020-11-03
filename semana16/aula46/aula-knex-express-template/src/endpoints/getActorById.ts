import { Request, Response } from "express"
import { getActorId } from "../data/getActorId";

export const getActorById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const actor = await getActorId(id);

        res.status(200).send(actor)
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
};