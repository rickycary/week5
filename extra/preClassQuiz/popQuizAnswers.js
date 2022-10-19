// given this array

const arr = [1,2,3,4,5,6]
//===========================================================
//===========================================================

// us .forEach to loop over the array and log each element

// 1st way
// arr.forEach(function(item, index){console.log(item)})

// // 2nd way (Arrow Function)
// arr.forEach((item, index) => {
//     console.log(item)
// })

//===========================================================
//===========================================================

// use .map to loop over the array return an array with each value + 2

// arr.map(function(item, index){return item + 2})

// arr.map((item, index) => {
//     console.log(item)
// })


// use .reduce to loop over array and add all the value
arr.reduce(function(acc, item, index){ return acc + item }, 0)

// arr.reduce((acc, item, index) => {
//     return acc + item
// }, 0)