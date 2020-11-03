import { Request, Response } from "express"
import { editUserFunc } from "../data/editUserFunc";

export const editUser = async (req: Request, res: Response)=>{
    try{ 
        const { id, name, nickname } = req.body;

    if (!(id && name && nickname)) {
        throw new Error("Usuário não foi atualizado")
    }

    const users = await editUserFunc(id, name, nickname)
       //deu tudo certo
       res.status(200).send({chaveDoRetorno: "Usuário atualizado com sucesso!"});
    }catch(error){
       //deu tudo errado
       res.status(400).send(error.message);
    }
 };