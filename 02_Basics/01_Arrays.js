//Array
const myArr = [0,1,2,3,4,5]
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[1]);

// Array Method

//myArr.push(5)
//myArr.push(6)
//myArr.pop(6)

//myArr.unshift(9)
//myArr.shift()

const newArr = myArr.join()

console.log(myArr);

console.log(newArr);
console.log(typeof newArr);

// Slice, Splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);
const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);