// functions
console.log(Math);

let string = '    JavaScript'
console.log(string.toUpperCase())     // JAVASCRIPT
console.log(string.toLowerCase())     // javascript

console.log(string);

console.log(string.trim())

let string2 = 'I love JavaScript. If you do not love JavaScript what else can you love.'

let pattern = /love/gi

console.log(string2.match('love'));
console.log(string2.match(pattern));
console.log(Array.isArray(string2.match(pattern)));

console.dir(Array);
console.log(parseInt('10')) // 10
console.log(parseInt('10.6')) // 10
console.log(parseFloat('10.6')) // 10.6
console.log(Number('10.6')) // 10.6
console.log(+'10.6') // 10.6


let name2 = '消雨節'
name2 = '222'

let arr = ['T', 3]
let obj = {'name': 'T', 'number': 3}

console.log(arr);   

arr[0] = 'S'
console.log(arr);   

// 

let str = '我愛吃肉'    // 字串 string
console.log(str[1]);

str[1] = '不'
str = '我不吃肉'
console.log(str[1]);

// 
let num = 123
let num2 = 123

console.log(num === num2);

let arr1 = [[1], 2, 3]
let arr2 = [[1], 2, 3]

console.log(arr1[0] === arr2[0]);   // false
// [1] === [1]

let arr3 = [1, 2, 3]
let arr4 = [1, 2, 3]

console.log(arr3[0] === arr4[0]);   // true
// 1 === 1

let myBackpackItem = {
    name: '大師球',
    quantity: 100,
    plusOne: function plusOne(num) {
        return num + 10
    }
}

console.log(myBackpackItem.name);   // 物件
console.log(myBackpackItem['name']);    //通常在取得物件中的值時，不會用這個格式
console.log(myBackpackItem.plusOne(5));
// method ＝ 方法 ＝ 物件裡面的函式(function)

// Math.floor(Math.random() * (max - min + 1)) + min

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(randomNum(4, 9));


// const randomNum = () => {
// }

console.log(String.prototype);

let str5 = '   我要成為 海賊王   ' // 0 - 6
console.log(str5.length); // 7
console.log(str5[0]);
console.log(str5[str5.length - 1]); // 7 - 1
console.log(str5.substring(0, 4));
// console.log(str5.substr(2, 3));
console.log(str5.split(' '));
console.log(str5.trim());

console.log(str5.includes('山'));
console.log(str5.replace('海', '山'));
console.log(str5);

console.log(str5.indexOf('海'));
console.log(str5[8]);
console.log(str5.search('海'));


let post = '小智每個月賺 5000 元，年終獎金 10000 元，每月 15000 打道館獎金';

console.log(pay); // 年收入