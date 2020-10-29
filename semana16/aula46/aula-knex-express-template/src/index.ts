import knex from "knex";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { getActorById } from "./endpoints/getActorById"
import { getActorByGender } from "./endpoints/getActorByGender";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app: Express = express();

app.use(express.json());

app.get("/actor/:id", getActorById)

app.get("/actor/query", getActorByGender)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// app.get('/', testEndpoint)

// async function testEndpoint(req: Request, res: Response): Promise<void> {
//   try {
//     const result = await connection.raw(`
//       SELECT * FROM Actor
//     `)

//     res.status(200).send(result)
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// }

