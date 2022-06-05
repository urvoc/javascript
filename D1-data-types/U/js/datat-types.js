// 
// let
// 

let v;
console.log(1.1, v);

v = 123;
console.log(1.2, v);

// let v = 123;    // 報錯、let 不能重複用

let v2 = 456;
console.log(2.1, v2);

v2 = 789;
console.log(2.2, v2);

// 
// const
// 

// const PI;   // 報錯、const 一定要先賦值

const PI = 3;
console.log(3.1, PI);

// PI = 3.14   // 報錯、const 不能被改變
// console.log(3.2, PI);

// const obj = {a: 3};
// obj = {b: 5}
// console.log(3.3, obj);
// 「obj」已經被 const

const obj2 = {a: 3};
obj2.a = 5;
console.log(3.4, obj2);
// 「obj2.a」 並沒有被 const
// 上述只改變物件的數值而非物件本身，這是可以被允許的。

// const 代表參考物件在「重新賦值」上有存取的限制。「數值」本身並不是永遠不可變的，如果數值是規劃在其他物件上的話。