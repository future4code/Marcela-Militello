import { connection } from "../index";

export const editUserFunc = async (
  id: string,
  name: string,
  nickname: string
): Promise<any> => {
  await connection("Users")
    .update({
      name: name,
      nickname: nickname
    })
    .where("id", id);
};