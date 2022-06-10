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
