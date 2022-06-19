let str ="string";
str[1]= "i";
console.log(str);

let arr1 =[0,1,2];
let arr2 =[0,1,2];

// arr1[1]= 'i';

console.log(arr1[0]==arr2[0]);


let obj1= {
    a:'1',
    b:'2',
    c:'3',
}
let obj2= {
    a:'1',
    b:'2',
    c:'3',
}
// obj1.a=1;

console.log(obj1.a==obj2.a);

let mainLineProps={
    key:'鑰匙',
    number:1,
    only:true,    
}
console.log(mainLineProps);
console.log(Math.round(5.6)); // 四捨五入
console.log(Math.floor(7891.56789)); //無條件捨去小數
console.log(Math.ceil(5.001)); //無條件進位
console.log(Math.min(16,32));
console.log(Math.max(16,32,48));
console.log(Math.random());
console.log(Math.ceil(Math.random()*10)); //0.5812977318007015

console.log(Math.round(9.8));
console.log(Math.ceil(9.8));
console.log(Math.floor(9.8));
console.log(Math.floor(Math.random()*(100 - 0 + 1)));
console.log(Math.floor(Math.random()*(100 - 50 + 1))+50);
let str10='我要成為海賊王';
// console.log(Math.floor(str10[(Math.random()*(7- 0 + 1))]));
let random=Math.floor(Math.random()*(6 - 0 + 1));
console.log(str10[random]);
console.log(random);



console.log(`sushi`.includes(`su`));
let str11=`我愛吃巧克力`;
console.log(str11.replace(`我`,`你`).replace(`巧克力`,`糖果`));
let str12=`我要成為海賊王` ;
console.log(`index為:` + str12.indexOf('海'));
let str13=`魯夫愛肉、娜美愛錢、索隆愛睡覺`;
console.log(str13.match(/愛/gi)) 

let str16 =`魯夫愛肉！娜美愛錢！索隆愛睡覺！`;
console.log(`愛 出現次數為：`+(str16.match(/愛/gi)).length);

let str17=``;
console.log(str17.concat(`魯夫愛肉`, `娜美愛錢`));

let work =`小智每個月賺 5000 元，年終獎金 10000 元，每月 15000 打道館獎金`;
let num = work.match( gi);  // 字串.match() 會給你一個陣列
console.log('num', num);
let pay =parseInt(num[0]*12)+parseInt(num[1])+parseInt(num[2]*12);
console.log(work.concat(`年收為：`, pay ));