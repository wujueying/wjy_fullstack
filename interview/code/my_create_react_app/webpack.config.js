const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {  
    entry:{  
        app: './src/index.js' 
    },  
    output:{
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js' 
    }, 
    plugins:[
        new HtmlWebpackPlugin({ 
            title: '我要去杭州', 
            template: path.resolve(__dirname, './public/index.html'), 
            filename: 'index.html' 
        }) 
    ]  
}  
  