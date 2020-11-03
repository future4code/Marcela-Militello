import { Request, Response } from "express"
import { editUserFunc } from "../data/editUserFunc";

export const editUser = async (req: Request, res: Response)=>{
    try{ 
        const result = await editUserFunc (req.params.id, req.body.name, req.body.nickname)

    // if (!result) {
    //     throw new Error("Usuário não foi atualizado")
    // }
       
       res.status(200).send({chaveDoRetorno: "Usuário atualizado com sucesso!"});
    }catch(error){
       res.status(400).send(error.message);
    }
 };