import {connection} from "../index"

export async function getAllUsersFunc(): Promise<[]> {
    try {
        const result = await connection.raw("SELECT id, nickname FROM Users")

        console.log(result)

        return result[0]
    } catch (error) {
        console.log(error)
        return []
    }
}