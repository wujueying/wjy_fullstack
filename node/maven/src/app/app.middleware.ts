import {Request,Response,NextFunction, request, response} from 'express'

export const defaultErrorHandler = () => (
  error: any,
  request:Request,
  response:Response,
  next:NextFunction
) => {
    if(error.message){
        console.log(error.message,'-------')
    }
        let statusCode:number, message:string;
        /**
         * 处理异常
        */
        switch(error.message){
            case 'NAME_IS_REQUIRE':
                statusCode= 400;
                message = '提供用户名';
                break;
            case 'PASSWORD_IS_REQUIRED':
                statusCode=400;
                message='请提供密码';
                break;
            case 'USER_ALREADY_EXIST':
                statusCode=409;
                message='用户名已被占用';
                break;
            case 'USER_DOSE_NOT_EXIT':
                statusCode=400;
                message='用户不存在';
                break;
            case 'USER_DOES_NOT_OWN_RESPONSE':
                statusCode=403;
                message="您不能处理内容";
                break;
           case 'NOT_FOUND':
               statusCode=404;
               message="没找到";
            default:
                statusCode=500;
                message='运维小哥正在抢修中...'
                break;
            case 'UNAUTHORIZED':
                statusCode = 401;
                message="请先登录";
        }
    response.status(statusCode).send({message})

}