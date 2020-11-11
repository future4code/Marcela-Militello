import { hash } from "../services/hashManager";
import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator";

export default async function createUser(
    req: Request,
    res: Response
) {
    try {
    
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
          throw new Error("Invalid email");
        }
    
        if (!req.body.password || req.body.password.length < 6) {
          throw new Error("Invalid password");
        }
    
        const userData = {
          email: req.body.email,
          password: req.body.password,
          role: req.body.role
        };
    
        const id = generateId();

        const hashPassword = await hash(userData.password);
      
        await insertUser(
          id, 
          userData.email, 
          hashPassword, 
          userData.role);
    
        const token = generateToken({
          id,
          role: userData.role
        });
    
        res.status(200).send({
          token: "token gerado pelo jwt"
        });
      } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
    };