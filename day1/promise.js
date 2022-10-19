// create a new promise object save in a variable
const myPromise = new Promise((resolve, reject) => {
    // if resolve runs, that triggers .then
    // if reject runs, that trigger .catch
    
    if(true){
        resolve(1)
    } else {
        reject("Sorry, too bad")
    }
})

console.log("the promise", myPromise)

myPromise.then((result) => console.log(result))

console.log(2)
console.log(3)