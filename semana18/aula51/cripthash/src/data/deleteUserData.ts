import { connection } from '../index'

const userTableName = "User";

export const deleteUserData = async (id: string): Promise<any> => {
    await connection
      .delete()
      .from(userTableName)
      .where({ id });
  }