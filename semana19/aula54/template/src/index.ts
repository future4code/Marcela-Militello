import express from 'express'
import knex from 'knex'
import cors from 'cors'
import dotenv from 'dotenv'
import {connection} from './connection'
import signup from './controller/user/signup'
import {userRouter} from './routes/userRoutes'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use("/user", userRouter)

app.get("/", async function(req,res){
   res.send(await connection.raw('show tables'))
})

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})
