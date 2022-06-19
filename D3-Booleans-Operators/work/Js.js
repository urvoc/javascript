// 數字 0
// if (0) {   // () 成立 === true
    // console.log('1'); // 如果是 true
// } else {
//     console.log('2');
// }
// console.log(0);

let value = ''  // 空字串
value = '0'
// let value
// console.log(value);
if(value) {
    console.log(value, typeof value, 'true');
} else {
    console.log(value, typeof value, 'false');
}

let a = Number('1') ;
// if (a>1 && a<5)  {     // 和 兩邊都要是 true
//     console.log('是');
// } else {
//     console.log('不是');
// }

// if (a>1 || a<5)  {     // 和 一邊是 true 就好
//     console.log('是');
// } else {
//     console.log('不是');
// }

// if (a!==3)  {     // 和 一邊是 true 就好
//     console.log('是');
// } else {
//     console.log('不是');
// }

// if (!0) {   // () 成立 === true
//     console.log('true'); // 如果是 true
// } else {
//     console.log('false');
// }

// let count = '1.2'
// count = +count

// console.log(++count) // +1
// console.log(count);

// console.log(count++);
// console.log(count);

// let num = 6

// if (num>=15) {
//     console.log('>=15');
// }else if(num>=10) {
//     console.log('>=10');
// }else if(num>=5){
//     console.log('>=5');
// }else {
//     console.log('都不符合');
// }

let num2 = 20

switch (true) {
    case (num2>=15):
        console.log('>=15');
        break;
    case num2>=10:
        console.log('>=10');
        break;
    case num2>=5:
        console.log('>=5');
        break;
    default:
        console.log('都不符合');
        break;
}

switch (num2) {
    case 20:
        console.log('20');
        break;
    default:
        console.log('都不符合');
        break;
}