console.log('但通常都是另外存在這裡');

let dogName;    // 駝峰式命名法
dogName = '小白'
console.log(dogName);

let catName = '小貓';
catName = '大貓'
console.log(catName);

const PI = 3.14;
console.log(PI);

const obj = {a:1};
console.log(obj);

// obj = {a:2} // 報錯
obj.a = 2;  // 允許
console.log(obj);

// Number

let num = 1729; 
num = '1729'   // string
console.log(num);   // 輸出值的本身

let isNum = typeof num; // 輸出是什麼類型
console.log(isNum); // 想知道的是 num 的類型

let numA = 1234
let numB = 5678
let numC = numA + numB;
let isNumC = typeof numC;

// console.log('總和', numA + numB);
console.log('總和', numC);
console.log(isNumC);

// String
let str = '與結'
let str2 = 'yellow'
let str22 = 'black'
let str3 = str + ' ' + str2 + ' ' + str22

// let str3 = `${str}  ${str2} ${str22}`
console.log(str3);

let min = 182;
let hourMin = `${parseInt(min/60)} 小時 ${min%60} 分鐘`
console.log(hourMin);

// boolean
// 用來判斷用
let myTrueBool = true;
let myFalseBool = false;

// truthy
// let v = '2';
// let v = 4;
// let v = [];
// let v = {};
// let v = true;

// falsy
// let v = undefined;
// let v = null;
// let v = false;

// let year = 20;
let year;

if (year) { // if 沒有加上 == 或 ===時，通常是判斷year有沒有值 
    console.log(`你是 ${year} 歲`);
} else {
    console.log('未填寫歲數');
}

// console.log('true', myTrueBool);
// console.log('false', myFalseBool);

let myStr = '綠洲樂團'
console.log('有綠嗎', myStr.includes('紅'));