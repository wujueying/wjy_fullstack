import {Response,Request,NextFunction} from 'express'
import * as userService from './user.service';

export const store = async(
    // 顺序不能更换，参数传递按顺序来
     request: Request,
     response: Response,
     next: NextFunction
) => {
 const {name,password} = request.body;
 try{
    const data = await userService.createUser({
        name,
        password
    })
    response.status(201).send(data);
 }catch(error){
     next(error)
 }
}