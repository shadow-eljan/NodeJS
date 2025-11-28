let numbers = [1,2,3,4,'eljan', 'rai', true, false, null]

// numbers.push(11)             //ADD
// numbers.push(true)
// numbers.pop()                //REMOVE FROM BACK
// numbers.shift()              //REMOVE FROM FRONT
// numbers.unshift(10)          //ADD FROM FRONT


// console.log(numbers.slice(1,4))              //SLICE DOESN'T MODIFY ORIGINAL ARRAY
// numbers.splice(2, 1, 0)                      //SPLICE(INDEX TO EDIT, HOW MANY ELEMENT TO REMOVE, REPLACE WITH)
// console.log(numbers.indexOf(true))
// console.log(numbers.lastIndexOf(true))
// console.log(numbers)
// console.log(numbers.includes(null))
// console.log(numbers.join(" , "));

// let a = "1,2,3,4,5"
// console.log(a.split(","))

// email ="eljan@gmail.com"
// part = email.split("@")
// let username = part[0]
// let domain = part[1].split(".")
// let rem = domain[1]
// console.log("Name: ", username)
// console.log("Domain: ", domain[0])
// console.log("Rem: ", rem)

let number = [1,2,3,4,5]
let doublenumbers = number.map((num) => num * 2);
console.log(doublenumbers)
