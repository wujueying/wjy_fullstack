// console.log('AI 来了，帅！')
// node 引入模块的关键字
// 图像识别
const ApiImageClassifyClient = require('baidu-aip-sdk').imageClassify;
// 内置模块  fileSystem 
const fs = require('fs');
// 1.读入文件 I/O  从硬盘里读入内存中，
const APP_ID = "23077972";
const API_KEY = "QkfqkaDvuU39N4PHmAaffyM4"
const SECRET_KEY = "FDSWGsn39OuaqKul42x2hGPjshCgtiSB"

const client = new ApiImageClassifyClient(APP_ID,API_KEY,SECRET_KEY);
// const fs = require('fs');
const image = fs.readFileSync("timg.jpeg").toString("base64");

client
.carDetect(image)
.then(function(result){
    console.log(result);
})
.catch(function(err){
    console.log(err)
})







