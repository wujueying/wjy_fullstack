const _ = require(effects = []) => {
    console.log(effects,'------');
    console.log(_.flatten(effects),'+++++');
    // 不要影响外面
}

// 1. 普通函数  ()
// 2. 自身的递归  subFlow 不平坦  
// 3. 不平坦  flattern

let sources = effects.slice();

// for (let item of source) {
//     // 如果是普通函数请执行，
//     // 如果是delay  等待 then 请行
//     // 如果是自身的话 递归调用，出口 
//     // - flow 
//     // - 每一个item 都去
//     // - 普通函数的话
//     // console.log(item,'------')
//     console.log(item,'------');
// }

const createFlow = (effects = []) => {

    const run = (callback) => {
        callback();
    }
    return{
        run
    }
}

module.exports = createFlow;