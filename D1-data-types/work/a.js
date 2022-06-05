console.log('here');
let dogName ;
dogName = '狗';
console.log(dogName);
let catName = '貓1';
catName = '貓2';
console.log(catName);

const PI =3.14 ;
console.log(PI);
// PI=3;
// console.log(PI);

const obj = {a:1} ;

console.log(obj);
obj.a=2;
console.log(obj);
let number = 9527;
// mumber='9527';
let number2 = typeof number; 
let numA='1234';
let numB=4567;
console.log(number);
console.log(number2);
// console.log('總和',numA+numB);

let numC=numA+numB;
let isNumbC= typeof numC;
console.log('總和',numC);
console.log(isNumbC);

//String
let str ='雨潔';
let str2 = '明星';
let str22 ='誌';
console.log(str,str2);
//let str3 = str +" "+ str2+" "+str22;
let str3 = `${str} ${str2}有${str22}`
console.log(str3);

 
let min = 77;
let time = `${parseInt(min/60)}小時${min%60}分`
console.log(time); 
//boolean
let myTrueBool=true;
let myFalseBool=false;
let bool ;
if(bool)
{
    console.log(`抽到了${bool}號球`);
}
else
{
    console.log('尚未抽球');
}