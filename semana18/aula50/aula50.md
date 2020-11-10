### Exercício 1

a) 

b) no código

### Exercício 2

a) 

b) 
```
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
````

c) 
const userTableName = "User";

const createUser = async (
id: string, 
email: string, 
password: string) => {
await connection
.insert({
id,
email,
password,
})
.into(userTableName);
};
);

### Exercício 3

a) 

b) 
import * as jwt from "jsonwebtoken"

export type AuthenticationData = {
    id: string,
}

export function generateToken(
    payload: AuthenticationData
):string {
    return jwt.sign(
        payload,
       process.env.JWT_KEY as string,
        {
            expiresIn: "30min"
        }
    )
}

### Exercício 4

a) 

b) 
 if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

c) 
if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }


### Exercício 5

a) 
import {connection} from "../index"

const userTableName = "User";

export const getUserByEmail = async(email: string): Promise<any> => {
    const result = await connection
    .select("*")
    .from(userTableName)
    .where({ email });
    return result[0];
   }

### Exercício 6

a) 
import { Request, Response } from "express"
import { getUserByEmail } from "../data/getUserByEmail"
import { generateToken } from "../services/authenticator"

export default async function login(
    req: Request,
    res: Response
) {
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
          throw new Error("Invalid email");
        }
        const userData = {
          email: req.body.email,
          password: req.body.password,
        };
        const user = await getUserByEmail(userData.email);
        if (user.password !== userData.password) {
 throw new Error("Invalid password");
}
const token = generateToken({
id: user.id,
        });
        res.status(200).send({
          token, message: "token gerado pelo jwt",
        });
      } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
    };

b)
 if (!req.body.email || req.body.email.indexOf("@") === -1) {
    throw new Error("Invalid email");
}

### Exercício 7

a) Para que o token possa permitir qualquer tipo (string, number etc)

b) 
export const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};

### Exercício 8

a)
import { connection } from "..";

export default async function getUserByIdData(
    id: string
): Promise<any> {
    const result = await connection("User")
        .select('*')
        .where({ id })
    return result[0]
}

b)
import { Request, Response } from "express";
import getUserByIdData from "../data/getUserByIdData";
import { getData } from "../services/authenticator";

export default async function getUserById(
   req: Request,
   res: Response
) {
   try {
      const token = req.headers.authorization as string;
      const authenticationData = getData(token);
      const user = await getUserByIdData(authenticationData.id)
      res.status(200).send({
         id: user.id,
         email: user.email
      });

   } catch (error) {
      res.status(400).send({
         message: error.message
      });
   }
};