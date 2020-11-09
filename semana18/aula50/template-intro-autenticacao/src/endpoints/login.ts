import { Request, Response } from "express"
import { getUserByEmail } from "../data/getUserByEmail"
import { generateToken } from "../services/authenticator"

export default async function login(
    req: Request,
    res: Response
) {
    try {

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
          throw new Error("Invalid email");
        }
    
        const userData = {
          email: req.body.email,
          password: req.body.password,
        };
    
    
        const user = await getUserByEmail(userData.email);
    
        if (user.password !== userData.password) {
          throw new Error("Invalid password");
        }
    
        
        const token = generateToken({
          id: user.id,
        });
    
        res.status(200).send({
          token: "token gerado pelo jwt",
        });
      } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
    };