const fs = require('fs');

fs.readFile('./timg.jpeg',function(err,data){
    // console.log(err);
    if(err) {
        throw new Error(err)
        return;
    }
    console.log(data)
})






