import { getPost, Post } from "./../Model/Post";
import { inputPost } from "../Model/Post";
import { AuthenticationData } from "../Model/User";
import authenticator from "../Services/authenticator";
import idGenerator from "../Services/idGenerator";
import moment from "moment";
import postDatabase from "../Data/PostDataBase"
import { CustomError } from "../Services/CustomError";

class PostBusiness {
  public async createPost(input: inputPost): Promise<string> {
    try {
      let message = "Success!";

      if (!input.photo || !input.description || !input.type) {
        throw new CustomError(406, '"photo", "description" and "type must be provided');
      }

      const createdAtMoment = moment().format("YYYY-MM-DD")

      const id: string = idGenerator.generateId();

      const tokenData: AuthenticationData = authenticator.getTokenData(input.token);

      const authorId: string = tokenData.id

      if (!tokenData) {
        throw new CustomError(406, "Unauthorized");
      }

      const newPost: Post = new Post(
        id, 
        input.photo, 
        input.description, 
        input.type, 
        createdAtMoment, 
        authorId
      )

      await postDatabase.createPost(newPost)

      return message;
    } catch (error) {
      let message = error.sqlMessage || error.message;

      return message;
    }
  }

  public async getPostById(input: getPost): Promise<Post> {
    try {

      if (!input.id) {
        throw new CustomError(406, "Post not found")
      }

      authenticator.getTokenData(input.token);

      const post: Post = await postDatabase.getPostById(input.id)

      return post
    } catch (error) {
      if(error.message === "jwt must be provided") {
        throw new CustomError(401, "Unauthorized")
      }
        throw new CustomError(400, error.message);
    }
  }
}

export default new PostBusiness();
