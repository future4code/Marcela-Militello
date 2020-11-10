import { connection } from "..";

export default async function getUserByIdData(
    id: string
): Promise<any> {
    const result = await connection("User")
        .select('*')
        .where({ id })

    return result[0]
}
