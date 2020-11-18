import { connection } from "..";

export default async function insertRecipe(
    id: string,
    title: string,
    description: string,
    createdAt: Date,
    user_id: string
) {
    await connection('recipes')
        .insert({
            id,
            title,
            description,
            createdAt,
            user_id
        })
}