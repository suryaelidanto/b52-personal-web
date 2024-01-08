
// built in HOF array -> bawaan dari javascript
// forEach, map, filter, reduce

// forEach
// const arr = [1,2,3,4,5]

// arr.forEach((x, y) => {
//     arr[y] = x * 2
// })

// const newArr = arr.forEach((item, index) => {
//     arr[index] = item * 2
// })

// console.log(newArr)
// console.log("ini array aslinya",arr)

// map
// const arr = [1,2,3,4,5,6,7,8,9,10]

// const newArr = arr.map((item, index) => {
//     if(item % 2 === 0) {
//         return item
//     }
// }) // array baru

// console.log(newArr)

// filter
// const arr = [1,2,3,4,5,6,7,8,9,10]

// 1 % 2 = 1
// 2 % 2 = 0
// 3 % 2 = 1
// 4 % 2 = 0 

// const filteredArray = arr.filter((item, index) => {
//     if(item % 2 === 0) {
//         return true
//     }
//     // mengembalikan boolean : true OR false
// })

// console.log(filteredArray)

// reduce
// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// const sum = arr.reduce((total, current) => {
//     return total + current
// }, 100)

// console.log(sum)

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const obj3 = { e: 5, f: 6 };

// const arr = [obj1, obj2, obj3]

// const mergedObj = arr.reduce((acc, curr) => {
//     return { ...acc, ...curr };
// }, {});
// console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }