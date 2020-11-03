import {connection} from "../index"
import { Pokemon } from "../types";

export async function searchPokemonByName(
    name: string,
): Promise<Pokemon[]> {
    try {
        const result = await connection
            .select("*")
            .from("pokemons")
            .where("name", "LIKE", `%${name}%`)

            console.log(result)

        return result
    } catch (error) {
        console.log(error)
        return []
    }   
}