import {connection} from "../index"

export async function getActorGender (
    gender: string,
): Promise<any> {
    try {
        const result = await connection
            .select("*")
            .from("Actor")
            .where("gender", "LIKE", `"${gender}"`)

            console.log(result)

        return result
    } catch (error) {
        console.log(error)
        return []
    }   
}