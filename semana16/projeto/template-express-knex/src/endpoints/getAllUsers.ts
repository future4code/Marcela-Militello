import { Request, Response} from "express"
import { getAllUsersFunc } from "../data/getAllUsersFunc"

export const getAllUsers = async (req: Request, res: Response) => {
    try {

      const users = await getAllUsersFunc()
 
       if (!users.length) {
          res.statusCode = 404
          throw new Error("Usuários não encontrados")
       }
 
       res.status(200).send(users)
 
    } catch (error) {
       console.log(error)
       res.send(error.message)
    }
 }