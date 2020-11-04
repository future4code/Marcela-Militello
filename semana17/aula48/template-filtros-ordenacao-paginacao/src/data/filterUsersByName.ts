import { connection } from ".."
import { inputName, User } from "../types/User"

export const filterUsersByName = async (data: inputName): Promise<User[]> => {
    try {

        // const resultPerPage: number = 5;
        // const offset: number = resultPerPage * (data.page - 1)

        const result = await connection.raw(`
        SELECT * FROM aula48_exercicio
        WHERE name LIKE "%${data.name}%"
        `)

        return result[0]

    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

// ORDER BY ${data.orderBy} ${data.orderType}
        // LIMIT ${resultPerPage}
        // OFFSET ${offset}