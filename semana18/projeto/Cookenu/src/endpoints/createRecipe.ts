import { Request, Response } from "express";
import insertRecipe from "../data/insertRecipe";
import { AuthenticationData, getTokenData } from "../services/authenticator";
import { generateId } from "../services/idGenerator";

export default async function createRecipe(
   req: Request,
   res: Response
) {
   try {

      const token: string = req.headers.authorization as string;

      const authenticationData: AuthenticationData = getTokenData(token)

      if (
         !req.body.title ||
         !req.body.description
      ) {
         throw new Error('"title" e "description" são obrigatórios')
      }

      const id: string = generateId()

      const date = new Date()

      await insertRecipe(
         id,
         req.body.title,
         req.body.description,
         date,
         authenticationData.id,
      )

      res.status(400).send({
         message: "Receita postada com sucesso!",
      })

   } catch (error) {
      let message = error.sqlMessage || error.message

      res.status(400).send({ message })
   }
}