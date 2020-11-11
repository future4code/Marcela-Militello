import { Request, Response } from "express";
import getUserByIdData from "../data/getUserByIdData";
import { getData } from "../services/authenticator";

export default async function getUserById(
   req: Request,
   res: Response
) {
   try {
      const token = req.headers.authorization as string;

      const authenticationData = getData(token);

      if (authenticationData.role !== "normal"){
         throw new Error ("Only a normal user can access this funcionality")
      }
      const user = await getUserByIdData(authenticationData.id)

      res.status(200).send({
         id: user.id,
         email: user.email,
         role: authenticationData.role
      });

   } catch (error) {
      res.status(400).send({
         message: error.message
      });
   }
};