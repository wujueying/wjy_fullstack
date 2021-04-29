const dateStr = '2019-01-02' 
let dateArr= dateStr.split('-') 
// let year = dateArr[0]
// let month = dateArr[1]   
// let day = dateArr[2]
let [year, month, day] = dateArr;

console.log(year, month, day);

let reg = /(\d{4})-(\d{2})-(\d{2})/.exec(dateStr);

console.log(reg);
