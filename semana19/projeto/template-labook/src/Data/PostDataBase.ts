import BaseDataBase from "./BaseDataBase";
import { Post } from "./../Model/Post";

class PostDataBase extends BaseDataBase {

  private static tableName: string = "labook_posts";

  public getTableName = (): string => PostDataBase.tableName;

  public async createPost(newPost: Post) {
    try {
      await BaseDataBase.connection
        .insert({
          id: newPost.getId(),
          photo: newPost.getPhoto(),
          description: newPost.getDescription(),
          type: newPost.getType(),
          created_at: newPost.getCreatedAt(),
          author_id: newPost.getAuthorId(),
        })
        .into(PostDataBase.tableName);
    } catch (error) {
      throw new Error("Erro de banco de dados: " + error.sqlMessage);
    }
  }

  public async getPostById(id: string): Promise<Post> {
    try {
      const result = await BaseDataBase.connection
        .select("*")
        .where({ id })
        .from(PostDataBase.tableName);

      return new Post(
        result[0].id,
        result[0].photo,
        result[0].description,
        result[0].type,
        result[0].created_at,
        result[0].author_id);

    } catch (error) {
      throw new Error("Erro de banco de dados: " + error.sqlMessage);
    }
  }
}

export default new PostDataBase()