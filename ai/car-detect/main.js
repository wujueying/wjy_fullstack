const AipClient = require('baidu-aip-sdk').ocr;
// 内置模块  fileSystem 
const fs = require('fs');
const image = fs.readFileSync('car2.jpg').toString('base64');
// 1.读入文件 I/O  从硬盘里读入内存中，
const APP_ID = "23078070";
const API_KEY = "TDZGUxSBGy58OcMcQBBlrRRg"
const SECRET_KEY = "HGqTABrWHyXTPm479iYBd44mv4gGGZC4"

const client = new AipClient(APP_ID,API_KEY,SECRET_KEY);
// const fs = require('fs');
const options = {};
options["multi_detect"] = "true";


client.licensePlate(image,options)
.then(function(result){
console.log(result);
})
.catch(function(err){
    console.log(err);
})


