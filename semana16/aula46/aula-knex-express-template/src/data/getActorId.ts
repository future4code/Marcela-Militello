import {connection} from "../index"

export async function getActorId (
    id: string,
): Promise<any> {
    try {
        const result = await connection
            .select("*")
            .from("Actor")
            .where("id", "LIKE", `${id}`)

            console.log(result)

        return result
    } catch (error) {
        console.log(error)
        return []
    }   
}