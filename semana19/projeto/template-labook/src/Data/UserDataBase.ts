import { CustomError } from './../Services/CustomError';
import BaseDataBase from "./BaseDataBase";
import { User } from "../Model/User";

class UserDataBase extends BaseDataBase {

  private static tableName: string = "labook_users";

  private static tableFriend: string = "labook_friends";

  public getTableName = (): string => UserDataBase.tableName;

  public async signup(user: User) {
    try {
      await BaseDataBase.connection
        .insert({
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          password: user.getPassword(),
        })
        .into(UserDataBase.tableName);
    } catch (error) {
      throw new Error("Database Error: " + error.sqlMessage);
    }
  }
  public async selectUserByEmail(email: string): Promise<User> {
    try {
      let message = "Success!";

      const queryResult: any = await BaseDataBase.connection(UserDataBase.tableName)
        .select("*")
        .where({ email });

      if (!queryResult) {
        message = "Invalid credentials";
        throw new Error(message);
      }

      return new User(queryResult[0].id, queryResult[0].name, queryResult[0].email, queryResult[0].password)

    } catch (error) {
      throw new Error("Database Error: " + error.sqlMessage);
    }
  }

  public async selectUserById(id: string): Promise<any> {
    try {
      const input: any = await BaseDataBase.connection
      .select ("*")
      .where({id})
      .from(UserDataBase.tableName)

      if(!input) {
        throw new CustomError(401, "Invalid credentials")
      }
    } catch (error) {
      throw new Error("Database Error: " + error.sqlMessage)
    }
  }

  public async addFriendById(friendOne_id: string, friendTwo_id: string): Promise<any> {
    
    await BaseDataBase.connection
    .insert({"friendOne_id": friendOne_id, "friendTwo_id": friendTwo_id})
    .into(UserDataBase.tableFriend)

    await BaseDataBase.connection
    .insert({"friendOne_id": friendTwo_id, "friendTwo_id": friendOne_id})
    .into(UserDataBase.tableFriend)
  }
}

export default new UserDataBase()