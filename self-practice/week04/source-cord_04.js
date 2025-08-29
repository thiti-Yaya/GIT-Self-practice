//filter function does not change an original array
const words=['apple', 'mango', 'mangosteen', 'orange'] 
//1. annnonymous arrow function
// const shortWords = words.filter((word) => word.length <= 6) 
//2. annonymous function declaration
// const shortWords = words.filter (function (word) {
//     return word.length <= 6
// })
//3. reuse call back function (named function)
function wordLength(word) {
    return word.length <= 6
}
const shortWords = words.filter(wordLength)
//const shortWords = words.filter(wordLength("apple")) //words.filter(true)
console.log(words); // [ 'apple', 'mango', 'mangosteen', 'orange' ]
console.log(shortWords); // [ 'apple', 'mango', 'orange' ]


//sort function change original array
const shortedWords = words.sort()
console.log(words); // [ 'apple', 'mango', 'mangosteen', 'orange' ]
console.log(shortedWords); // [ 'apple', 'mango', 'mangosteen', 'orange' ]
console.log(words.map(word => word.toUpperCase()));


const students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
]
console.log(students.map(students => students.id));

const stu = students.map((students) => students.id).filter(id => id % 2=== 0)
console.log(stu)
 
// return all words that include 'mango' (ignore case)
//result ['apple', 'mango', 'mangosteen', 'orange']

const words1 =['Apple', 'mango', 'mangosteen', 'orange']
console.log(words.filter(word => word.toLowerCase().includes("mango")));

// includes() ->array
console.log(words1.includes("Apple")) //true
console.log(words1.includes("apple")) //false
console.log(words1.includes("app")) //false



// includes() ->string
const sentence = "The quick brown fox jumps over the lazy dog."
const word = "OX"
console.log(sentence.includes(word)); // false



const words2 = ['Mango','Apple','mangosteen','orange', 'mangoes']
//check array that has word "apple" (ignore case) or not if has display 'has apple' , 
// otherwise, display 'does not have apple'

if(words2.find(x => x === 'Apple')){
    console.log('has apple')
}
else{console.log("does not have apple")
 
} 


const product = [1, 'RED', 102]
const productDetail = product.reduce ((detail, prop) => {
    return prop === 'RED' ? detail?.concat('R') : detail?.concat(prop)
}, '') 

console.log(productDetail);

const cart = [
  { productId: 1001, price: 500, quantity: 2 },
  { productId: 1002, price: 10, quantity: 3 },
  { productId: 1003, price: 5, quantity: 10 },
]
// find cart total and return object that show the total {total: 1080}

const total = cart
  .map(product => product.price * product.quantity)
  .reduce((sum, price) => sum + price, 0);          

console.log(total);

// cart[cart.length] = { productId: 5555, price: 1, quantity: 4 }
cart.push({ productId: 5555, price: 1, quantity: 4 })
console.log(cart)
console.log(cart.pop()) //{ productId: 5555, price: 1, quantity: 4 }
console.log(cart.length) //3
//unshift
//shift

const words3 = ['Mango','Apple','mangosteen','orange', 'mangoes']
words3.splice(2, 1, 'banana') //replace "mangosteen" with 'banana
console.log(words3);
words3.splice(3, 2) //remove the last two words
console.log(words3);
words3.splice(1,0,'melon','cherry') //add 'melon' and 'cherry' after 'Apple'
console.log(words3);

//slice item at index at 2 to last
console.log(words1.slice(2));
//slice the first to third items
console.log(words1.slice(0,3));
//fill  null to all items
console.log(words1.fill(null));


///////////////////////////////////////

// sort strings
const names = ['YY', 'JK', 'BM'];
names.sort(); // [ 'BM', 'JK', 'YY' ]
console.log(names); // ['YY', 'JK', 'BM']

// Adding / Removing elements
// ---------------------------

let colors = ['red', 'green', 'blue'];

colors.push('yellow'); 
console.log(colors); // ['red','green','blue','yellow']

colors.pop(); 
console.log(colors); // ['red','green','blue']

colors.unshift('pink'); 
console.log(colors); // ['pink','red','green','blue']

colors.shift(); 
console.log(colors); // ['red','green','blue']

colors.splice(1,1,'purple','orange'); 
console.log(colors); // ['red','purple','orange','blue']

console.log(colors.slice(1,3)); // ['purple','orange']

console.log(colors.fill('black')); // ['black','black','black','black']
