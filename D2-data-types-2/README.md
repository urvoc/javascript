# JavaScript 入門 - 資料型態 2

## 課前測驗
[課前測驗](https://learn.co/lessons/javascript-data-types-quiz)

這堂課會延續講解 Javascript 數據類型的進階使用，及介紹非原始數據類型：Object（物件）和 Array（陣列）。

## 數據類型
在上一節中，我們提到了一點關於數據類型的內容。數據類型可以分為兩種：

### 原始數據類型
JavaScript 中的原始數據類型包括：

1. 數字 - 整數、浮點數
2. 字串 - 單引號、雙引號或反引號下的任何數據
3. 布林 - 真或假值
4. Null - 空值或無值
5. undefined - 沒有值的聲明變量
6. Symbol - 可以由 Symbol 構造函數生成的唯一值（後段補充）

### 非原始數據類型
1. Object - 物件
2. Array - 陣列

「非原始數據類型」和「原始數據類型」最大的不同，就是：
1. 可以包含不同的數據類型（原始數據類型不行）
2. **數據可以被修改（原始數據類型不行）**
3. 不能進行比較（原始數據類型可以）

> 在 JavaScript 中，Array 索引從 0 開始。即，Array 的第一個元素位於索引 0 處，第二個元素位於索引 1 處，第三個元素位於索引 2 處，依此類推。

```JavaScript
let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)  // [10, 2, 3]
```

非原始數據類型不能進行判斷。即使兩個非原始數據類型具有相同的屬性和值，它們也不是嚴格相等的。

```js
let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false
```

```js
let userOne = {
   name:'Asabeneh',
   role:'teaching',
   country:'Finland'
}

let userTwo = {
   name:'Asabeneh',
   role:'teaching',
   country:'Finland'
}

console.log(userOne == userTwo) // false
```

通常我們不用非原始數據類型來進行判斷。不要判斷陣列、函數或物件。非原始值被稱為**引用類型**，因為它們是通過「引用」而不是「值」進行比較的。只有**當兩個對象引用同一個底層對象時，它們才是嚴格相等的**。

```JavaScript
let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)  // true
```

```js
let userOne = {
   name:'Asabeneh',
   role:'teaching',
   country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo)  // true
```

## 數字 - math object（math 物件）
Javascript 有許多預設的數學相關物件，這些物件提供很多方法（method）讓我們來操作數字。

```js
console.log(Math);               // 看看 Math 這個物件長怎樣

const PI = Math.PI
console.log(PI)                  // 3.141592653589793
console.log(Math.round(PI))      // 3 四捨五入
console.log(Math.round(9.81))    // 10 四捨五入
console.log(Math.floor(PI))      // 3 無條件捨去
console.log(Math.ceil(PI))       // 4 無條件進位
```

```js
console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5
console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20
```

```js
// 隨機數 0 ～ 0.999999
const randNum = Math.random() 
console.log(randNum) 

// 如果要 0 ～ 10 之間的隨機數
const num = Math.floor(Math.random () * 11)
console.log(num)  // min 0 and max 10

// 如何產生的？
let randomNum = Math.random()       // 0 ~ 0.999
randomNum = randomNum * 11          // 0 ~ 10.99
randomNum = Math.floor(randomNum)   // 0 ~ 10
```

## 字串 - 特殊字符及方法
JavaScript 有些字串會經過轉譯：
- `\n`：換行
- `\t`：tab
- `\\`：反斜線：數據若有 `\` 時，需要加反斜線 `\` = `\\`
- `\'`：單引號（'）：數據若有 `'` 時，用 `"` 包起來或加反斜線 `\` = `\'`
- `\"`：雙引號（"）：數據若有 `"` 時，需要加反斜線 `\` = `\"`

### 字串方法
JavaScript 中的一切都是物件。字串是一種「原始數據類型」，這意味著一旦創建它就無法修改它。字串物件也有提供許多方法（method）讓我們操作字串。

1. `length`：返回數字。字串長度，包含空格的字數。
```js
let js = 'JavaScript'
console.log(js.length)     // 10
```

2. 取得字串中的字：我們可以使用字串的索引，來取得字串中的每個字符。
```js
let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)   // J

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t
```

3. `toUpperCase()`：此方法將字串更改為大寫字母。
4. `toLowerCase()`：此方法將字串更改為小寫字母。
```js
let string = 'JavaScript'
console.log(string.toUpperCase())     // JAVASCRIPT
console.log(string.toLowerCase())     // javascript
```

5. `substr()`：切字
6. `substring()`：切字。開始處～結束處。
```js
let string = 'JavaScript'
console.log(string.substr(4,6))    // Script 第 4 個開始取，取「6 個」字

let string = 'JavaScript'
console.log(string.substring(4,10))    // Script 第 4 個開始取、取、取到第 10 個
```

7. `split()`：返回一個 Array。將字串拆成一個一個。
```js
let string = '30 Days Of JavaScript'

console.log(string.split())     //  ["30 Days Of JavaScript"]
console.log(string.split(' '))  // ["30", "Days", "Of", "JavaScript"]
```

8. `trim()`：刪除字符串開頭、結尾的空格。
```js
let string = '   30 Days Of JavaScript   '
console.log(string.trim()) // 30 Days Of JavaScript
```

9. `includes()`：返回布林 true 或 false。檢查字串中是否存在某字。
```js
let country = 'Finland'
console.log(country.includes('fin'))     // false
console.log(country.includes('Fin'))     // true
```

10. `replace()`：查詢並取代
```js
let string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python
```

11. `indexOf()`：返回索引。找字的 index 位置
```js
let string = '30 Days Of JavaScript'

console.log(string.indexOf('D'))          // 3
console.log(string.indexOf('Days'))       // 3
```

12. `concat()`：連接字串
```js
let string = '30'
console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let country = 'Fin'
console.log(country.concat("land")) // Finland
```

1.  `search`：返回索引。搜尋到的第一個結果的索引
2.  `match`：返回 Array。輸入需使用**正規表達式**。

✅ 什麼是[正規表達式](https://pjchender.dev/javascript/js-regex/)？

```js
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7

let string = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive

// syntax
string.match(substring)

let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))

// ["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]

let pattern = /love/gi
console.log(string.match(pattern))   // ["love", "love", "love"]
```

## 檢查數據類型
要檢查某個變量的數據類型，用 `typeof`。但是，只適用於檢查「原始數據類型」。非原始數據類型如陣列及物件，只會返回「object」（物件）。

故，如果要判斷 Array 時，需使用 `Array.isArray()` 判斷是否為 Array。

```js
console.log(typeof 'Asabeneh')  // string
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof NaN)         // number
console.log(typeof undefined)   // undefined
console.log(typeof null)        // ＊＊object＊＊
console.log(typeof [])          // ＊＊object＊＊
console.log(typeof {})          // object

// 判斷 Array
console.log(typeof Array.isArray([])) // true
```

## 更改數據類型
String ---> Number

- `parseInt()` - 整數、`parseFloat()` - 小數
- `parseFloat()`
- `Number()`
- `+`

```js
console.log(parseInt('10')) // 10
console.log(parseInt('10.6')) // 10
console.log(parseFloat('10.6')) // 10.6
console.log(Number('10.6')) // 10.6
console.log(+'10.6') // 10.6
```

---

## 🚀 挑戰
字串篇
- 檢查 `sushi` 是否有 `su`
- 將 `我愛吃巧克力` 改成 `你愛吃糖果`
- `我要成為海賊王` 中的 `海`，index 是多少？
- `魯夫愛肉`、`娜美愛錢`、`索隆愛睡覺`，如何只取得愛之後的字？並放入一個 Array 裡面？
- `魯夫愛肉！娜美愛錢！索隆愛睡覺！`，如何計算「愛」出現幾次？
- 用 `concat()` 把 `魯夫愛肉`、`娜美愛錢` 連接成一個字串

數字篇
- 將 `9.8` 四捨五入
- 將 `9.8` 無條件進入
- 將 `9.8` 無條件捨去
- 取得 0~100 的隨機整數
- 取得 50~100 的隨機整數
- 取得 0~255 的隨機整數
- 隨機取得 `我要成為海賊王` 中的其中一個字

## 作業

[練習資料型態應用](assignment.md)
