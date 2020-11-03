import { connection } from "..";

const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
  }; 

export default deleteActor;