import { connection } from "../index"

const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
  return result
}

export default searchActor;