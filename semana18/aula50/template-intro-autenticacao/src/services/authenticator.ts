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

export const getData = (
    token: string
    ): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};