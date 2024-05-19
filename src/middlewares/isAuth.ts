import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function isAuth (req: Request, res: Response, next: NextFunction  ){

interface PayLoad {
    sub: string
    email: string


}
   
const authToke = req.headers.authorization;

if(!authToke){
    return res.status(401).end;
}
const [, token] = authToke.split(" ");

try{
//validar o token

const {sub, email} = verify(

    token, process.env.JWT_SECRETE

) as PayLoad;

req.user_id = sub;
req.email_user = email;

return next()

}catch(err){

    return res.status(401).end();
}


    next();
}