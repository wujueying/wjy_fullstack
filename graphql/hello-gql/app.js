const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql').graphqlHTTP;
// const userSchema = require('./graphql/user/schema')
// app.use('/graphql',graphqlHTTP)({
//     schema: userSchema,
//     graphql: true
// })
// 数据从mysql 来， 前端 -> graphql -> MVC -> 数据库
app.listen(1514);