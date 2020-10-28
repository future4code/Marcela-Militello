import { Request, Response} from "express"
import { getPokemons } from "../data/getPokemons"
import { Pokemon } from "../types"

export const getAllPokemons = async (req: Request, res: Response) => {
    try {

      const pokemons: Pokemon[] = await getPokemons()
 
       if (!pokemons.length) {
          res.statusCode = 404
          throw new Error("No pokemons found")
       }
 
       res.status(200).send(pokemons)
 
    } catch (error) {
       console.log(error)
       res.send(error.message)
    }
 }