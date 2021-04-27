const path = require('path')
var basePath = __dirname;
var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode : 'development',
    context: path.join(basePath, "src"),

    entry: [
       "./ index.tsx",
    ],
    output:{
        path: path.join(basePath, "dist"),
        filename: "bundle.js" 
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    module:{
        rules: [{
        test: /\.(js|tsx?)$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        options: {
            useBabel: true,
            babelCore: "@babel/core",
            
        },
    },{
      test: /\.css$/,
      use: ["css-loader"]
      // use: ["style-loader","css-loader?sourceMap"]
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: "file-loader",
      options: {
        name: "assets/img/[name].[ext]?[hash]"
      }
    }
] 
  },
  
  devServer: {
    contentBase: "./dist", // Content base
    inline: true, // Enable watch and live reload
    host: "localhost",
    port: 8080,
    stats: "errors-only"
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
      hash: true
    })]
}
