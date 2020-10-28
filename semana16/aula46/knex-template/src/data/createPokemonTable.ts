import { connection } from "../index"

async function createPokemonTable(): Promise<void> {
    try {
        await connection.raw(`
        CREATE TABLE pokemons (
            id INT PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            type VARCHAR (255)
        );
    `)

        console.log("Sucesso!")
    } catch (error) {
        console.log(error)
    }
}

createPokemonTable()