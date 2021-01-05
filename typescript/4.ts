type IUserInfoFunc = (user:IUser) => string
interface IUser {
    name: string;
    age: number
}

const getUserInfoWithInterfaceFunc:IUserInfoFunc = (user) =>{
    return `name:${user.name},age:${user.age}`;
}

getUserInfoWithInterfaceFunc({name:"Koala",age:18})