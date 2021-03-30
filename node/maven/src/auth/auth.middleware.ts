import {Request, Response, NextFunction} from 'express';
export const authGard = (request:Request,response:Response,next:NextFunction) => {
    // if(request.user.id){

    // }
    // 
    console.log('验证用户身份');
    next(new Error('UNAUTHORIZE'))  
}