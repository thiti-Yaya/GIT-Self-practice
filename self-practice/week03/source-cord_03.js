// Function Declaration
function sum(a, b) {
    return a + b;
}

console.log(sum(3, 5));  // 8


// fucntion declaration
function devTools (dev){
 return this.dev = dev;
}


// function expression (Arrow Function)
const multiply = (x, y) => {
    return x * y;
};



//1.function declaration
function multiply1(a,b){
    return a*b 
}
// console.log(multiply(2, 3)); 

//2.function expression (using arrow function syntax)
const multiply2 = (a, b) => {return a*b} // (a,b) => { return a*b}
console.log(multiply2(4, 2));
 
//3.function expression (using function declaration) / Anonymous Function
const multiply3 = function(a, b){return a*b}
console.log(multiply3(5, 2));

console.log(typeof multiply1);
console.log(typeof multiply2);
console.log(typeof multiply3);
const x=multiply1
const y=multiply2
const z=multiply3
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(x(2, 3));
console.log(x(3, 3));
console.log(x(4, 3));

// เปรียบเทียบ reference ของฟังก์ชัน
if(x===multiply1)
    console.log("x equals to multiply1");
else
    console.log('x not equals to multiply1');
 
    
// ฟังก์ชันรับจำนวน argument ไม่จำกัด
function sum(...a) {
    let output = 0
    for (argu of arguments) {
        output += argu
    }  
    return output
}
console.log(sum(1));
console.log(sum(1,2,3,4,5,6,7,8));
console.log(sum());

// ส่งฟังก์ชันเป็น argument
//1.function declaration
function multiply1(a,b){ //a=3, b=5
    return a*b 
}

function doSomething(x){ //x=multiply1
//    return x(3, 5) // multiply1(3,5)
    return x // return function
}

// console.log(doSomething(multiply1));//pass function to another function //15
const a=doSomething(multiply1)//[Function: multiply]
console.log(a(2,4)) // 8

// ฟังก์ชันคืนค่าฟังก์ชัน
function sayGoodBye(){
    return 'GoodBye'
}
function doSomething(){
    return sayGoodBye
}
//let doIt=doSomething()
//console.log(doIt());
console.log(doSomething()()); // GoodBye
//doSomething() [first ()] => sayGoodBye()[ second ()]

// ฟังก์ชันเปลี่ยนค่า object ที่ส่งเข้าไป
function myFunc(theObject) {
    theObject.model = "A9999"
}
const product = {model: "A1001", price: 199}
console.log(product.model) //"A1001"
myFunc(product);
console.log(product.model) //"A9999"

// การใช้ arguments & rest parameter
function sum(x, y, ...z) {
 //   return x + y
 // return arguments[0] + argument[1]
 for (argu of arguments) {
    console.log(argu);
 }
 console.log(`length: ${arguments.length}`);
 console.log(`z: ${x}`);
 console.log(`x: ${y}`);
 console.log(`z: ${z}`);
 
 
 
}
sum(1, 2, 3, 4, 5, 6, 7, 8);

//  Default Parameters
function greeting(greet = "Hello", whom = "Guest", quote = "How are you?") {
    return `${greet} ${whom} ${quote}`
}

console.log(greeting("hi")) //hi Guest How are you?
console.log(greeting("Good morning", "Guy", "Great!")) //Good morning Guy Great!
console.log(greeting(undefined, null, "Fine")) //Hello null Fine
console.log(greeting()) // Hello Guest How are you?

// Function กับ Array
function sum(num1, num2, num3) {
    console.log(num1);
    console.log(num2);
    console.log(num3);
    return num1 + num2 + num3
}
let nums = [5]
console.log(sum(10, 20, 30, 40, 50))

// practice : Frequency of Words
function getFreqOfWords(sentence) {
  if (sentence == null) return undefined;  
  let words = sentence.toLowerCase().split(" ");
  let freq = {};

  for (let word of words) {
    if (freq[word]) {
      freq[word]+= 1;   
    } else {
      freq[word] = 1; 
    }
  }
   return freq;
}

console.log(getFreqOfWords("Today is present and present is your gift")) //{ today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
console.log(getFreqOfWords("Do your best just do it")) // { do: 2, your: 1, best: 1, just: 1, it: 1 }
console.log(getFreqOfWords(null)); // undefined
console.log(getFreqOfWords(undefined)); //undefined