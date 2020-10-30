import {connection} from "../index"

export async function getUserByIdFunc (
    id: string,
): Promise<any> {
    try {
        const result = await connection
            .select("id", "nickname")
            .from("Users")
            .where("id", "LIKE", `${id}`)

            console.log(result)

        return result[0]
    } catch (error) {
        console.log(error)
    }   
}