# JavaScript 入門 - 做出決定

## 課前測驗
[課前測驗](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/11?loc=zh_tw)

為程式碼做決定與控制順序以提高其重複利用性與豐富性。這堂課程提供 JavaScript 的資料流控制語法與布林資料型的重點。

## 回顧布林資料型

布林只能有兩種數值： `true` 或 `false`。 布林幫助程式碼間在特定的條件下做出決定。

設定布林值的方式如下：

`let myTrueBool = true`
`let myFalseBool = false`

✅ 布林的命名來源為一位英格蘭數學家、哲學家暨邏輯學家喬治·布爾 George Boole (1815–1864)。

## Truthy
- 除零外，所有數字（正數和負數）都是真實的
- 除空字符串 ('') 外，所有字符串都是真實的
- true

## Falsy
- 0
- 0n
- null
- undefined（變量沒有賦值時、函數沒有返回值時）
- NaN
- false
- '', "", ``, empty string

## 關係運算子與布林

運算子會被使用在執行比較上，並回傳布林值。以下是常用的運算子列表。

| 符號  | 描述                                                                       | 舉例               |
| ----- | -------------------------------------------------------------------------- | ------------------ |
| `<`   | **小於**： 比較兩數，當左數小於右數時，回傳 `true`。                       | `5 < 6 // true`    |
| `<=`  | **小於等於**： 比較兩數，當左數小於右數或左數等於右數時，回傳 `true`。     | `5 <= 6 // true`   |
| `>`   | **大於**： 比較兩數，當左數大於右數時，回傳 `true`。                       | `5 > 6 // false`   |
| `>=`  | **大於等於**： 比較兩數，當左數大於右數或左數等於右數時，回傳 `true`。     | `5 >= 6 // false`  |
| `===` | **嚴格相等**： 比較兩數，當左數等於右數且有相同的資料型態時，回傳 `true`。 | `5 === 6 // false` |
| `!==` | **嚴格不等於**： 比較兩數，回傳值與嚴格相等恰恰相反。                      | `5 !== 6 // true`  |

✅ 藉由在瀏覽器命令欄中撰寫關係運算子來驗證你學到的知識。你有什麼意外發現嗎?

大部分時間使用後增量。

## 邏輯運算子與布林

有時候條件內容包含兩個以上的比較，邏輯運算子可以協助串接比較式來回傳布林值。

| 符號   | 描述                                                                       | 舉例                                                      |
| ------ | -------------------------------------------------------------------------- | --------------------------------------------------------- |
| `&&`   | **邏輯和**： 比較兩個布林條件式，當兩者**皆**回傳 `true` 時，回傳 `true`。 | `(5 > 6) && (5 < 6 ) //左為false、右為true，回傳 false。` |
| `\|\|` | **邏輯或**： 比較兩個布林條件式，當其中一個回傳 `true` 時，回傳 `true`。   | `(5 > 6) \|\| (5 < 6) //左為false、右為true，回傳 true。` |
| `!`    | **邏輯非**： 回傳布林條件式的相反回傳值。                                  | `!(5 > 6) // 5 不大於 6，但 "!" 讓回傳值為 true。`        |


## 增量運算符
1. 預增量/減量
```js
let count = 0
console.log(++count)        // 1
console.log(count)          // 1

let count = 0
console.log(--count) // -1
console.log(count)  // -1
```

2. 後增量/減量
```js
let count = 0
console.log(count++)        // 0
console.log(count)          // 1

let count = 0
console.log(count--) // 0
console.log(count)   // -1
```

## If 條件式

當條件成立時，If 條件式會執行區塊內的程式碼。

```javascript
if (condition){
    //Condition was true. Code in this block will run.
}
```

邏輯運算子常被用在建立條件上。

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
}
```

## IF..Else 條件式

當條件不成立時，`else` 條件式會執行區塊內的程式碼。它可以和 `if` 條件式選擇性地使用。

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    // if 條件成立時，這段程式碼會被執行。
    console.log("Getting a new laptop!");
}
else{
    // else 條件成立時，這段程式碼會被執行。
    console.log("Can't afford a new laptop, yet!");
}
```
邏輯運算子可以用在建立 if..else 條件式中的條件
```javascript
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
    // if 條件成立時，這段程式碼會被執行。
    console.log("Getting a new laptop!");
}
else {
    // else 條件成立時，這段程式碼會被執行。
    console.log("Can't afford a new laptop, yet!");
}
```
任何 `if` 條件需要決定它的是與否。利用運算子 `!` 來 _否定_ 結果。它以下列方式呈現：

```javascript
if (!condition) {
  // condition 為 false 時，執行。
} else {
  // condition 為 true 時，執行。
}
```
多個 if
```js
// syntax
if (condition) {
     // code
} else if (condition) {
   // code
} else {
    //  code

}
```

✅ 在瀏覽器命令欄中測試你是否了解上述程式碼的意義。改變變數 currentMoney 和 laptopPrice 的數值來取得不同的回傳值 `console.log()`。

## Switch
Switch 是 if else if else else 的替代品。如果 switch 語句括號中的值與 case 值匹配，則 case 塊運行。break 語句用於終止執行，因此在滿足條件後代碼執行不會停止。如果所有案例都不滿足條件，則默認塊運行。
```js
switch(caseValue){
  case 1:
    // code
    break
  case 2:
   // code
   break
  case 3:
   // code
   break
  default:
   // code
}
```


### 條件運算子（三元運算符）

`if...else` 並不是唯一表達條件式的方式。你也可以使用名為條件運算子的符號。語法如下：

```javascript
let variable = condition ? <條件成立時回傳 A> : <條件否定時回傳 B>
```


下列是較明確的例子：

```javascript
let firstNumber = 20;
let secondNumber = 10
let biggestNumber = firstNumber > secondNumber ? firstNumber: secondNumber;
```

```js
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
```

✅ 花點時間閱讀這段程式碼。你能了解這些運算子的運作方式嗎?

上述的狀態為：
- 若 `firstNumber` 大於 `secondNumber` 時
- 則賦予 `firstNumber` 數值 `biggestNumber` 
- 否則賦予為數值 `secondNumber`。 
  
條件運算子的另一種表達方式為：

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 挑戰

建立一個程式，使用邏輯運算式來做判斷，再將程式碼改寫成條件運算子。你喜歡用哪一種語法?

---
## 課後測驗
[課後測驗](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/12?loc=zh_tw)

## 複習與自學

閱讀更多可被使用的運算子：[MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators)。

瀏覽 Josh Comeau 所編制的[運算子查詢表](https://joshwcomeau.com/operator-lookup/)！

## 作業

[運算子](assignment.md)
