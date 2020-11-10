import { Request, Response } from "express";
import { getData } from "../services/authenticator";
import { deleteUserData } from "../data/deleteUserData";

export default async function deleteUser(
    req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;
  
      const authenticationData = getData(token);
  
      if (authenticationData.role !== "admin") {
        throw new Error("Only a admin user can access this funcionality");
      }
  
      const id = req.params.id;
  
      await deleteUserData(id);
  
      res.sendStatus(200);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };