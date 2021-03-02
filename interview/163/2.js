// 数据范围 2(53) - 1
// bigint
// 高精度的时间戳， MySQL id 大数据
const theBiggestInt = 9007199254740991n; 
// console.log(typeof theBiggestInt);
const alsoHuge = BigInt(9007199254740991);

const b1 = BigInt(Number.MAX_SAFE_INTEGER);
console.log(b1);
console.log(BigInt(Number.MIN_SAFE_INTEGER));

const maxPlusOne = b1 + 1n;
console.log(maxPlusOne);