import { CustomError } from './../Services/CustomError';
import { addFriends } from './../Model/User';
import UserDataBase from "../Data/UserDataBase";
import { inputUser, User } from "../Model/User";
import authenticator from "../Services/authenticator";
import hashManager from "../Services/hashManager";
import idGenerator from "../Services/idGenerator";
import { AuthenticationData } from "../Model/User";

class userBusiness {
  public async signup(input: inputUser): Promise<string> {
    try {

      if (!input.name || !input.email || !input.password) {
        throw new CustomError(406, '"name", "email" and "password" must be provided');
      }

      const id: string = idGenerator.generateId();

      const cypherPassword = await hashManager.hash(input.password);

      const newUser: User = new User(
        id,
        input.name,
        input.email,
        cypherPassword
      );

      await UserDataBase.signup(newUser);

      const token: string = authenticator.generateToken({ id }) as string;

      const tokenData: AuthenticationData = authenticator.getTokenData(token);

      if (!tokenData) {
        throw new CustomError(406, "Unauthorized");
      }

      return token
    } catch (error) {
      let message = error.sqlMessage || error.message;

      return message;
    }
  }
  public async loginBusiness(input: any): Promise<any> {
    try {

      const user: User = await UserDataBase.selectUserByEmail(input.email);

      if (!input.email || !input.password) {
        throw new CustomError(406, '"email" and "password" must be provided');
      }

      const passwordIsCorrect: boolean = await hashManager.compare(
        input.password,
        user.getPassword()
      );

      if (!passwordIsCorrect) {
        throw new CustomError(406, "Invalid credentials");
      }

      const id: string = user.getId();

      const token: string = authenticator.generateToken({ id }) as string;

      const tokenData: AuthenticationData = authenticator.getTokenData(token);

      if (!tokenData) {
        throw new CustomError(406, "Unauthorized");
      }

      if (!user) {
        throw new CustomError(406, "User not found");
      }

      return token
    } catch (error) {
      let message = error.sqlMessage || error.message;

      return message;
    }
  }

  public async addFriendById(input: addFriends): Promise<string> {
    try {
      if (!input.id) {
        throw new CustomError(406, "id must be provided")
      }

      const tokenData: AuthenticationData = authenticator.getTokenData(input.token)
      const friendOne: string = tokenData.id!
      const friendTwo: string = input.id
      const friends = await UserDataBase.addFriendById(friendOne, friendTwo)
  
      return friends

    } catch (error) {
      throw new CustomError(400, error.message)
    }
  }
}

export default new userBusiness();
