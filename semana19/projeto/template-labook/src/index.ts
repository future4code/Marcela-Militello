import { postRouter } from './Routes/postRoutes';
import { userRouter } from './Routes/userRoutes';
/**************************** IMPORTS ******************************/

import express, { Express } from "express"
import cors from "cors"

/**************************** CONFIG ******************************/

const app: Express = express()
app.use(express.json())
app.use(cors())

/**************************** ENDPOINTS ******************************/

app.use("/user", userRouter)
app.use("/post", postRouter)

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})