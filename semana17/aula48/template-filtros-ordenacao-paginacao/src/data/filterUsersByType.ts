import { connection } from ".."
import { User } from "../types/User"

export const filterUsersByType = async (data: string): Promise<User[]> => {
    try {

        // const resultPerPage: number = 5;
        // const offset: number = resultPerPage * (data.page - 1)

        const result = await connection.raw(`
        SELECT * FROM aula48_exercicio
        WHERE type LIKE "%${data}%"
        `)

        return result[0]

    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

// ORDER BY ${data.orderBy} ${data.orderType}
        // LIMIT ${resultPerPage}
        // OFFSET ${offset}