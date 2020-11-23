import { Request, Response } from "express";
import { inputPost, Post } from "../Model/Post";
import PostBusiness from '../Business/PostBusiness'

class PostController {
  public async createPost(req: Request, res: Response) {
    try {
      const input: inputPost = {
        photo: req.body.photo,
        description: req.body.description,
        type: req.body.type,
        token: req.headers.authorization!
      };

      if (!input) {
        throw new Error('"photo", "description" and "type" must be provided');
      }

      const message = await PostBusiness.createPost(input)

      res.status(200).send({message});
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  public async getPostById(req: Request, res: Response) {
    try {
      const output: Post = await PostBusiness.getPostById({
        id: req.params.id, 
        token: req.headers.authorization as string
      })

      if (!output) {
        throw new Error("Post not found");
      }

      res.status(200).send({ message: "Success!", post: output})
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

export default new PostController();
