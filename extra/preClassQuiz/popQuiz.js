// given this array

const arr = [1,2,3,4,5,6]

// us .forEach to loop over the array and log each element

arr.forEach((element) => {
    console.log(element)
})

// use .map to loop over the array return an array with each value + 2

const newArr = arr.map((element, index) => {
    console.log(element + 2)    
})

// use .reduce to loop over array and add all the value
const reduceArr = arr.reduce((arr, element) => {
    console.log()
})