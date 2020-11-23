import { addFriends } from './../Model/User';
import { inputUser } from "../Model/User";
import { Request, Response } from "express";
import userBusiness from "../Business/UserBusiness";
import UserBusiness from "../Business/UserBusiness";

class UserController {
  public async createUser(req: Request, res: Response) {
    try {
      const input: inputUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const token: string = await userBusiness.signup(input);

      res.status(200).send({ message: "User created", token })
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const loginData = {
        email: req.body.email,
        password: req.body.password,
      };

      const token: string = await userBusiness.loginBusiness(loginData);

      res.status(200).send({ message: "User logged", token })
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  public async followById(req: Request, res: Response) {
    try {
      const input: addFriends = {id: req.params.id, token: req.headers.authorization!}

      const friends = await UserBusiness.addFriendById(input)

      res.status(200).send({message: "Friend added!", friends})

    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

export default new UserController()