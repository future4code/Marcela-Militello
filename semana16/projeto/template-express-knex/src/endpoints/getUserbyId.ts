import { Request, Response} from "express"
import { getUserByIdFunc } from "../data/getUserByIdFunc"

export const getUserById = async (req: Request, res: Response) => {
    try { 
      const result = await getUserByIdFunc(req.params.id);
 
       if (!result) {
          res.statusCode = 404
          throw new Error("Nenhum usuário encontrado.")
       }
 
       res.status(200).send(result)
 
    } catch (error) {
       console.log(error)
       res.send(error.message)
    }
 }